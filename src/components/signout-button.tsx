"use client";

import { signOut } from "@/auth/helpers";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};
