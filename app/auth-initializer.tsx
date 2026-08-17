// app/auth-initializer.tsx
"use client";

import { useEffect } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAuthStore } from "@/stores/auth.store";

export function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSuccess, isError } = useCurrentUser();
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);

  useEffect(() => {
    if (isSuccess) setAuthenticated(true);
    if (isError) setAuthenticated(false);
  }, [isSuccess, isError, setAuthenticated]);

  return children;
}