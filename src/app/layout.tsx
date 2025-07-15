import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// app/layout.tsx
import { MotionConfig } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angoturi",
  description: "Conheça Angola com Angoturi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionConfig reducedMotion="user">
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-950 antialiased`}
      >
        {children}
      </body>
    </html>
    </MotionConfig>
  );
}
