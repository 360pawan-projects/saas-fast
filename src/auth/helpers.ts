"use server";

import { signIn as naSignIn, signOut as naSignOut } from ".";

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

export async function signOut() {
  await naSignOut();
}
