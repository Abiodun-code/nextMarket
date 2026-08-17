"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { currentUserKey } from "./useCurrentUser";
import { useAuthStore } from "@/stores/auth.store";

export function useLogin() {
  const queryClient =
    useQueryClient();

  const setAuthenticated =
    useAuthStore(
      (state) =>
        state.setAuthenticated
    );

  return useMutation({
    mutationFn:
      authService.login,

    onSuccess: (response) => {
      setAuthenticated(true);

      queryClient.setQueryData(
        currentUserKey,
        response
      );
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn:
      authService.register,
  });
}

export function useLogout() {
  const queryClient =
    useQueryClient();

  const reset =
    useAuthStore(
      (state) => state.reset
    );

  return useMutation({
    mutationFn:
      authService.logout,

    onSuccess: () => {
      reset();

      queryClient.removeQueries({
        queryKey:
          currentUserKey,
      });
    },
  });
}