"use server";

import { z } from "zod";
import { signIn as naSignIn } from "@/lib/auth";

export const signIn = async (
  prevState: any,
  formData: FormData
): Promise<{
  status: "pending" | "error" | "success";
  message: string;
}> => {
  try {
    const formSchema = z.object({
      email: z.string().trim().email(),
      password: z.string().min(4, "Password is minimum 4 characters."),
    });
    const parse = formSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!parse.success) {
      return { status: "error", message: "Failed to sign in." };
    }

    const { email, password } = parse.data;

    await naSignIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      status: "success",
      message: "Signed in successfully.",
    };
  } catch (error: any) {
    return {
      status: "error",
      message: error?.cause?.err?.message || "Something went wrong.",
    };
  }
};
