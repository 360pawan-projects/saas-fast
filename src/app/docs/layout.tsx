import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SassFast-Docs",
  description:
    "The Next.js boilerplate offers a complete setup for building SaaS, AI tools, and web apps to help you monetize quickly online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
