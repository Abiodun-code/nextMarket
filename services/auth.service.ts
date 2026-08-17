// services/auth.service.ts

import { api, internalApi } from "@/lib/axios";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth";
import { User } from "@/types/user";

export const authService = {
  async login(payload: LoginPayload) {
  const { data } = await internalApi.post<{ user: User }>("/api/auth/login", payload);
  return data;
},

  async register(payload: RegisterPayload) {
    const { data } = await api.post<AuthResponse>(
      "/users/add",
      payload
    );

    return data;
  },

  async logout() {
    await api.post("/auth/logout");
  },

  async me() {
    const { data } = await internalApi.get<User>("/api/auth/me");

    return data;
  },
};