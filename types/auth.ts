import { User } from "./user";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;

  firstName: string;
  lastName: string;

  gender: string;
  image: string;

  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: User;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  age?: number;
}

export interface RegisterResponse {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
}