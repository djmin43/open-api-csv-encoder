import "./globals.scss";
import "./main-styles.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "_components/tracking/header";
import { NoScript } from "_components/tracking/no-script";
import { Navbar } from "_components/layout/navbar";
import Footer from "_components/layout/footer";

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
      <body className={`${inter.className} main-page`}>
        <NoScript />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
