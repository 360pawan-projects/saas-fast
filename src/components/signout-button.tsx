"use client";

import { signOut } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};
