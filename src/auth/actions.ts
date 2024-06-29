"use server";

import { User } from "@/lib/models/user.model";
import { signIn as naSignIn, signOut as naSignOut } from ".";
import dbConnect from "@/lib/db/dbConnect";
import { z } from "zod";
import { revalidatePath } from "next/cache";

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

    console.log(prevState);

    // revalidatePath("/");

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
