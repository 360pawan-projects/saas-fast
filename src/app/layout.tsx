import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import AuthWrapper from "@/auth/auth-wrapper";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Starter",
  description: "The Next.js boilerplate offers a complete setup.",
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
        <AuthWrapper>{children}</AuthWrapper>
        <Toaster />
      </body>
    </html>
  );
}
