import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import { Header } from "@/app/_components/header";
import { NoScript } from "@/app/_components/no-script";
import { Navbar } from "@/app/_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "한글깨짐 해결사",
  description:
    "한글이 깨져보이는 csv 파일을 한글이 보일 수 있도록 해결해드려요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className={`${inter.className}`}>
        <NoScript />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
