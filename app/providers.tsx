// app/providers.tsx

"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAuthStore } from "@/stores/auth.store";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { AuthInitializer } from "./auth-initializer";

export default function ReactQueryProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  


  return (
    <QueryClientProvider client={queryClient}>
      <AuthInitializer>
        {children}
      </AuthInitializer>
    </QueryClientProvider>
  );
}