"use client";

import { signOut } from "@/auth/actions";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};
