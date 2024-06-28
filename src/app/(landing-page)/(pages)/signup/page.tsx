import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SignUpForm } from "./form";

export default async function SignInPage() {
  const session = await auth();

  if (session) redirect("/dashboard");

  return (
    <main className="py-10 container mx-auto">
      <div className="mx-auto w-full md:max-w-xl">
        <h3 className="font-bold text-xl mb-3">Sign up</h3>
        <SignUpForm />
      </div>
    </main>
  );
}
