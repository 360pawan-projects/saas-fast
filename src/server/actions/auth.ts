"use server";

import { flattenValidationErrors } from "next-safe-action";

import { User } from "../models/user";
import dbConnect from "@/lib/db-connect";
import { signIn, signOut } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { SignInSchema, SignUpSchema } from "@/lib/schemas/auth";
import { revalidatePath } from "next/cache";

export const signInAction = actionClient
  .schema(SignInSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { email, password } }) => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    revalidatePath("/");

    return { message: "Signed in successfully." };
  });

export const signUpAction = actionClient
  .schema(SignUpSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { name, email, password } }) => {
    await dbConnect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email already used.");
    }

    await User.create({ email, name, password });
    await signInAction({ email, password });

    return { message: "Signed in successfully." };
  });

export const signOutAction = actionClient.action(async () => {
  await signOut();

  return { message: "Signed out successfully." };
});
