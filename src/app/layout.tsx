import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

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
      <head>
        <meta
          name="naver-site-verification"
          content="4dee96c4eeff952b9a21af62daa0e529d3e6a489"
        />
      </head>

      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQBP4XTC')
        `,
        }}
      />

      <body className={`${inter.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQBP4XTC"
            height="0"
            width="0"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
