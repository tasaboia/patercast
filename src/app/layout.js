import { DM_Serif_Display as DM, Sora } from "next/font/google";
import "./globals.css";

const dm = DM({
  subsets: ["latin"],
  weight: "400", // Especifique o peso correto
  variable: "--font-dm", // Variável CSS para DM Serif Display
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});
export const metadata = {
  title: "PaterCast",
  description: "Um movimento para o resgate da paternidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3500373973594497');
              fbq('track', 'PageView');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3500373973594497&ev=PageView&noscript=1"
          />
        </noscript> */}
      </head>
      <body className={`${dm.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
