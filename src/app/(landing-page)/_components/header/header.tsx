import Link from "next/link";

import { RocketIcon } from "@/components/ui/icons";

//* Add your links here
const headerLinks = [
  { href: "/", label: "Public home page" },
  { href: "/dashboard", label: "Dashboard private page" },
  { href: "/signin", label: "Sign in" },
  { href: "/signup", label: "Sign up" },
];

const HeaderLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="font-medium hover:text-gray-400 transition-colors duration-300"
  >
    {label}
  </Link>
);

export const Header = async () => {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center py-8 gap-5 sm:gap-20 justify-between">
        <Link
          href="/"
          className="font-bold text-xl sm:text-2xl flex gap-2 items-center"
        >
          <span className="inline-block w-6 h-6 text-green-800">
            <RocketIcon />
          </span>
          Starter
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden sm:flex items-center gap-5 sm:gap-10 text-gray-900">
            {headerLinks.map((link, index) => (
              <HeaderLink key={index} href={link.href} label={link.label} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
