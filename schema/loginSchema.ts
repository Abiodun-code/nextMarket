import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    // .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    // .regex(/[0-9]/, "Must contain at least one number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;