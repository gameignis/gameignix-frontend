import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const CasinoGameClient = dynamic(
  () => import("./CasinoGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/casino-game-development`;
  return {
      title: "Casino Game Development Company | GameIgnix",
      description: "GameIgnix is a premier casino game development company with skilled casino game developers building secure, engaging, and custom casino games.",
      keywords: [
      "casino game development company",
      "casino game development",
      "casino game developers",
      "casino game development studio",
      "casino game development services",
      "casino game development agency",
      "casino game development outsourcing company",
      "online casino game development",
      "casino game app development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Casino Game Development Company | GameIgnix",
      description: "GameIgnix is a premier casino game development company with skilled casino game developers building secure, engaging, and custom casino games.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/casino-game-development.jpeg",
          width: 1200,
          height: 630,
          alt: "Casino Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Casino Game Development Company | GameIgnix",
      description: "GameIgnix is a premier casino game development company with skilled casino game developers building secure, engaging, and custom casino games.",
      images: ["https://www.gameignix.com/common/ogimage/casino-game-development.jpeg"],
    },
  };
}

export default function CasinoGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Casino Game Development",
    url: "https://www.gameignix.com/services/casino-game-development",
    description:
      "GameIgnix is a top-rated casino game development company specializing in crafting custom casino platforms with secure and engaging gameplay.",
  };
  return (
    <>
      <CasinoGameClient />
      <Script
          id="casino-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}