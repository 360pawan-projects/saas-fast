import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter - Signup",
  description: "The Next.js boilerplate offers a complete setup.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
