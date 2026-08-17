"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export const currentUserKey = ["user", "me"];

export function useCurrentUser() {
  return useQuery({
    queryKey: currentUserKey,
    queryFn: authService.me,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}