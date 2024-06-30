import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(4, "Password is minimum 4 characters."),
});

export type SignIn = z.infer<typeof SignInSchema>;
