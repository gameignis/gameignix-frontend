import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./header.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCP1LD2X12"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCP1LD2X12');
          `}
        </Script>
      </body>
    </html>
  );
}
