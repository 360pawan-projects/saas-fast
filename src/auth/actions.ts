"use server";

import { User } from "@/lib/models/user.model";
import { signIn as naSignIn, signOut as naSignOut } from ".";
import dbConnect from "@/lib/db/dbConnect";

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
      message: "Logged in successfully.",
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
};

export const signIn = async (formData: { email: string; password: string }) => {
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
};

export const signOut = async () => {
  await naSignOut();
};
