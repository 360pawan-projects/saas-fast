import { z } from 'zod';

const SignupRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type SignupRequestType = z.infer<typeof SignupRequestSchema>;
