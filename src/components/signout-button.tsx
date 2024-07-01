"use client";

import { signOutAction } from "@/server/actions/auth";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => signOutAction()}>Sign out</Button>;
};
