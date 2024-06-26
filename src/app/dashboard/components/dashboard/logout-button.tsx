"use client";

import { signOut } from "@/auth/helpers";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Log out</Button>;
};
