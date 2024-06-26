import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SassFast",
  description:
    "The Next.js boilerplate offers a complete setup for building SaaS, AI tools, and web apps to help you monetize quickly online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={bricolageGrotesque.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
