import { Header1 } from "../components/header/header";
import { Footer } from "../components/footer/footer";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header1 />
      {children}
      <Footer />
    </>
  );
}
