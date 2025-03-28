import type { Metadata } from "next";
import { Oxanium } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruti Group",
  description: "Generated by create next app",
};

const oxanium = Oxanium({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${oxanium.className} dark`}>{children}</body>
    </html>
  );
}
