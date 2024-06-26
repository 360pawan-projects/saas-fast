import Link from "next/link";
import { Metadata } from "next";

import { MainNav } from "../components/dashboard/main-nav";
import { Search } from "../components/dashboard/search";
import { UserNav } from "../components/dashboard/user-nav";
import { RocketIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "SassFast - Dashboard",
  description:
    "The Next.js boilerplate offers a complete setup for building SaaS, AI tools, and web apps to help you monetize quickly online.",
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
            <span className="">SassFast</span>
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
