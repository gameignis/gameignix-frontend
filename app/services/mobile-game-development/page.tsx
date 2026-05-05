import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const MobileGameClient = dynamic(
  () => import("./MobileGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/mobile-game-development`;
  return {
      title: "Mobile Game Development Company | Mobile Game Developers",
      description: "GameIgnix specializes in mobile game development and game app development, creating engaging, next-gen games with expert mobile game developers.",
      keywords: [
      "mobile game development",
      "mobile game development company",
      "mobile game developers",
      "game app development company",
      "mobile game development services",
      "mobile game development studio",
      "mobile game development agency",
      "mobile game app development",
      "game app development services", 
      "online mobile game development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Mobile Game Development Company | Mobile Game Developers",
      description: "GameIgnix specializes in mobile game development and game app development, creating engaging, next-gen games with expert mobile game developers.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/mobile-game-development.jpeg",
          width: 1200,
          height: 630,
          alt: "Mobile Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mobile Game Development Company | GameIgnix",
      description: "GameIgnix specializes in mobile game development and game app development, creating engaging, next-gen games with expert mobile game developers.",
      images: ["https://www.gameignix.com/common/ogimage/mobile-game-development.jpeg"],
    },
  };
}

export default function MobileGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile Game Development",
    url: "https://www.gameignix.com/services/mobile-game-development",
    description:
      "GameIgnix is a mobile game development company creating addictive iOS and Android games with stunning visuals.",
  };
  return (
    <>
      <MobileGameClient />
      <Script
          id="mobile-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}