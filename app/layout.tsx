import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeDep Assignment for SWE-FE-Inter-2026",
  description:
    "An application to view open source package insights using SafeDep API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
