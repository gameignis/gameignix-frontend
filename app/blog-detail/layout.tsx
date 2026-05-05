import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "../header.css";
import "../footer.css";
import "../globals.css";
import "../blog-detail.css";

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
        {children}
      </body>
    </html>
  );
}
