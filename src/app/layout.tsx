import "./globals.scss";
import "./main-styles.scss";
import type { Metadata } from "next";
import { Header } from "@/app/_components/tracking/header";
import { NoScript } from "@/app/_components/tracking/no-script";
import { Navbar } from "@/app/_components/layout/navbar";
import Footer from "@/app/_components/layout/footer";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/woff2-subset/Pretendard-Medium.subset.woff2",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "한글깨짐 해결사",
  description:
    "한글이 깨져서 보이는 CSV 파일을 정확하게 표시할 수 있도록 도와드립니다.",
  keywords: ["한글깨짐", "CSV", "csv", "엑셀", "한글깨짐 해결"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {process.env.NODE_ENV !== "development" && <Header />}
      <body className={`${pretendard.className} main-page`}>
        {process.env.NODE_ENV !== "development" && <NoScript />}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
