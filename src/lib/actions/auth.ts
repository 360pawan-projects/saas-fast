"use server";

import { flattenValidationErrors } from "next-safe-action";

import { signIn } from "../auth";
import { SignInSchema } from "@/schemas/auth";
import { actionClient } from "@/lib/safe-action";

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

    return { message: "Signed in successfully." };
  });
