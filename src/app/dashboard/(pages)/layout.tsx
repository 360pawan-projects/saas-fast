import Link from "next/link";
import { Metadata } from "next";

import { UserNav } from "../_components/dashboard/user-nav";
import { RocketIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Starter - Dashboard",
  description: "The Next.js boilerplate offers a complete setup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-block w-6 h-6 text-green-800">
              <RocketIcon />
            </span>
            <span className="">Starter</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
