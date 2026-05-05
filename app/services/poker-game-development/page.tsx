import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const PokerGameClient = dynamic(
  () => import("./PokerGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/poker-game-development`;
  return {
      title: "Poker Game Development Company | Poker Game Developers",
      description: "As a top poker game development company, GameIgnix delivers high-quality poker software with stunning graphics, smooth gameplay, and advanced features.",
      keywords: [
      "poker game development",
      "poker game development company",
      "poker game developers",
      "poker game company",
      "poker game development services",
      "poker game development studio",
      "poker game development agency",
      "poker game app development",
      "poker gaming development services", 
      "poker mobile game development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Poker Game Development Company | Poker Game Developers",
      description: "As a top poker game development company, GameIgnix delivers high-quality poker software with stunning graphics, smooth gameplay, and advanced features.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/poker-game-development.jpeg",
          width: 1200,
          height: 630,
          alt: "Poker Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Poker Game Development Company | Poker Game Developers",
      description: "As a top poker game development company, GameIgnix delivers high-quality poker software with stunning graphics, smooth gameplay, and advanced features.",
      images: ["https://www.gameignix.com/common/ogimage/poker-game-development.jpeg"],
    },
  };
}

export default function PokerGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Poker Game Development",
    url: "https://www.gameignix.com/services/poker-game-development",
    description:
      "GameIgnix provides poker game development services, creating multiplayer poker platforms with real-money and social gaming features.",
  };
  return (
    <>
      <PokerGameClient />
      <Script
          id="poker-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}