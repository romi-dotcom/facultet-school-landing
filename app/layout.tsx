import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Facultet School — Licensed Education in Lisbon & Porto",
  description:
    "Evening professional programmes with an official enrolment certificate for your AIMA residence permit renewal. DGERT-licensed. Real campus. Real results.",
  openGraph: {
    title: "Facultet School — Licensed Education in Lisbon & Porto",
    description:
      "Keep your student permit. Build your European career. 423 students. DGERT-licensed.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
