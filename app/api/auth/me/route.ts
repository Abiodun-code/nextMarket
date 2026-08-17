// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function refreshTokens(refreshToken: string) {
  const res = await fetch(`${process.env.API_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken, expiresInMins: 30 }),
  });

  if (!res.ok) return null;
  return res.json() as Promise<{ accessToken: string; refreshToken: string }>;
}

export async function GET() {
  const cookieStore = await cookies();
  let token = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!token && !refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let res = token
    ? await fetch(`${process.env.API_URL}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    : new Response(null, { status: 401 });

  // access token expired (or missing) — try to refresh
  if (res.status === 401 && refreshToken) {
    const refreshed = await refreshTokens(refreshToken);

    if (!refreshed) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    token = refreshed.accessToken;

    res = await fetch(`${process.env.API_URL}/user/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await res.json();
    const response = NextResponse.json(user);

    // persist the new tokens
    response.cookies.set("accessToken", refreshed.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    response.cookies.set("refreshToken", refreshed.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return response;
  }

  if (!res.ok) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await res.json();
  return NextResponse.json(user);
}