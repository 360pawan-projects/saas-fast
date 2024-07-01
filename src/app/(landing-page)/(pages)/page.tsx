"use client";

// import { auth } from "@/auth";

import { useSession } from "next-auth/react";

// export default async function HomePage() {
export default function HomePage() {
  const session = useSession();
  // const session = await auth();

  console.log(session?.data);

  return (
    <main className="container mx-auto min-h-[calc(100vh-313px)] p-5">
      I am main content
    </main>
  );
}
