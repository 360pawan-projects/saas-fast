"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  {
    slug: "/dashboard",
    title: "Overview",
  },
  {
    slug: "/dashboard/customers",
    title: "Customers",
  },
  {
    slug: "/dashboard/emails",
    title: "Emails",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.slug}
          href={link.slug}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === link.slug ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
