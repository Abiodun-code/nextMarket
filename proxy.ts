// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("accessToken");
  // console.log("MW hit:", request.nextUrl.pathname, "token:", token);

  const isDashboard =
    request.nextUrl.pathname.startsWith("/home");

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  if (isDashboard && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(
      new URL("/home", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/login",
    "/register",
  ],
};