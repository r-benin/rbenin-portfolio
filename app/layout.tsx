import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const interFont = Inter()

export const metadata: Metadata = {
  title: "RBenin",
  description: "Portfolio of Ryan Benin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={interFont.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
