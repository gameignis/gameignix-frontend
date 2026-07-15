import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GameIgnix: Game Development Company | Expert Game Studio",
  description: "GameIgnix is a top-rated game development company and studio crafting immersive games for mobile, console, and Web3 platforms. Let’s build your next hit.",
};

const GA_MEASUREMENT_ID = "G-ZCP1LD2X12";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${orbitron.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCP1LD2X12"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCP1LD2X12');
          `}
        </Script> */}
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            setTimeout(function () {

              var script = document.createElement("script");
              script.src = "https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}";
              script.async = true;
              document.head.appendChild(script);

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });

            }, 3000);
          `}
        </Script>
      </body>
    </html>
  );
}
