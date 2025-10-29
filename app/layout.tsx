// FIX: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode type.
import React from 'react';
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "Cleaning Company",
  description: "A modern and professional showcase website for a cleaning services company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} bg-white font-sans text-brand-dark-blue relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}