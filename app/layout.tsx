import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/ui/Navbar"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Nerd Dev Showcase",
  description: "A website to showcase my development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar></Navbar>
        <AuroraBackground>
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
