import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapphire Gold International School",
  description: "Exploring the Gold Mine in Every Child",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
