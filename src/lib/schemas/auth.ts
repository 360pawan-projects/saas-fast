import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(4, "Password is minimum 4 characters."),
});

export type SignInType = z.infer<typeof SignInSchema>;

export const SignUpSchema = SignInSchema.extend({
  name: z.string().min(1, "Name is required.").trim(),
});

export type SignUpType = z.infer<typeof SignUpSchema>;
