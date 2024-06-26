import Link from "next/link";

import { RocketIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

//* Add your links here
const headerLinks = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#features", label: "Features" },
];

const HeaderLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="font-medium hover:text-gray-400 transition-colors duration-300"
  >
    {label}
  </Link>
);

export const Header1 = () => {
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
          SassFast
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden sm:flex items-center gap-5 sm:gap-10 text-gray-900">
            {headerLinks.map((link, index) => (
              <HeaderLink key={index} href={link.href} label={link.label} />
            ))}
          </div>
          <Button asChild>
            <a href={process.env.PRODUCT_LINK}>Start Shipping</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
