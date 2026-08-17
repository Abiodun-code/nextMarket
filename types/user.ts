// types/user.ts

export interface User {
  id: number;
  username: string;
  email: string;

  firstName: string;
  lastName: string;

  gender: string;
  image: string;

  age?: number;
  phone?: string;
  birthDate?: string;

  height?: number;
  weight?: number;

  bloodGroup?: string;
  eyeColor?: string;

  address?: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
}