import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 md:py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex gap-2 justify-center md:justify-start items-center"
              href="/#"
            >
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                SassFast
              </strong>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Ship your startup in days, not weeks
              <br />
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
            <Link
              className="inline-block mt-4 text-sm border duration-200 cursor-pointer rounded px-2 py-1"
              href="/"
            >
              <div className="flex gap-1 items-center">
                <span>Built with</span>
                <span className="font-bold flex gap-0.5 items-center tracking-tight">
                  SassFast
                </span>
              </div>
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <FooterLinkHeader label="LINKS" />
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <FooterLink href="/docs" label="Documentation" />
                <FooterLink href="/dashboard" label="Dashboard" />
                <FooterLink href="/#pricing" label="Pricing" />
                <FooterLink href="/support" label="Support" />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <FooterLinkHeader label="LEGAL" />
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <FooterLink href="/terms" label="Terms of services" />
                <FooterLink href="/privacy-policy" label="Privacy policy" />
                <FooterLink href="/license" label="License" />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <FooterLinkHeader label="TEMPLATES" />
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <FooterLink href="/templates" label="Free templates" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return <Link href={href}>{label}</Link>;
};

export const FooterLinkHeader = ({ label }: { label: string }) => {
  return (
    <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
      {label}
    </div>
  );
};
