import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/Header";

const monsrat = Montserrat({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "TFC",
  description: "WELCOME TO  TAXFREECLUB ",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png24" sizes="16x16"/>
      <body className={monsrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
