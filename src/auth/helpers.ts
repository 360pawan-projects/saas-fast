"use server";
import dbConnect from "@/lib/db/dbConnect";
import { signIn as naSignIn, signOut as naSignOut } from ".";
import { User } from "@/models/user.model";

export async function signIn(formData: { email: string; password: string }) {
  try {
    const response = await naSignIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return {
      success: true,
      message: "Logged in successfully.",
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.cause?.err?.message || "Something went wrong.",
    };
  }
}

export async function signUp(formData: {
  name: string;
  email: string;
  password: string;
}) {
  await dbConnect();

  try {
    const { name, email, password } = formData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: "Email already used.",
      };
    }

    await User.create({ email, name, password });

    await naSignIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return {
      success: true,
      message: "Logged in successfully.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.cause?.err?.message || "Something went wrong.",
    };
  }
}

export async function signOut() {
  await naSignOut();
}
