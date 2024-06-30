"use server";

import { User } from "../models/user";
import dbConnect from "@/lib/db-connect";
import { SignInSchema } from "@/schemas/auth";
import { signIn as naSignIn, signOut as naSignOut } from "../auth";

export const signUp = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  await dbConnect();

  try {
    const { email, password, name } = formData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email already used.");
    }

    await User.create({ email, name, password });

    const response = await naSignIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      success: true,
      message: "Signed in successfully.",
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
};

export const signIn = async (
  prevState: any,
  formData: FormData
): Promise<{
  status: "pending" | "error" | "success";
  message: string;
}> => {
  try {
    const parse = SignInSchema.safeParse({
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

export const signOut = async () => {
  await naSignOut();
};
