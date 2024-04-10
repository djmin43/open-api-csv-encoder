import React from "react";
import Script from "next/script";

export const Header = () => {
  return (
    <head>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="naver-site-verification"
        content="4dee96c4eeff952b9a21af62daa0e529d3e6a489"
      />
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
    </head>
  );
};
