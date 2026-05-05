import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const SlotGameClient = dynamic(
  () => import("./SlotGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/slot-game-development`;
  return {
      title: "Slot Game Development Company | Slot Game Developers",
      description: "Hire GameIgnix, a top Slot game development company, to build stunning custom slot machines and game apps. Our Slot game developers turn ideas into hits.",
      keywords: [
      "slot game development company",
      "slot game developers",
      "slot game development",
      "slot game development studio",
      "slot game development services",
      "slot game development agency",
      "slot game app development",
      "slot game company",
      "slot machine software development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Slot Game Development Company | Slot Game Developers",
      description: "Hire GameIgnix, a top Slot game development company, to build stunning custom slot machines and game apps. Our Slot game developers turn ideas into hits.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/slot-game-development-company.jpeg",
          width: 1200,
          height: 630,
          alt: "Slot Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Slot Game Development Company | Slot Game Developers",
      description: "Hire GameIgnix, a top Slot game development company, to build stunning custom slot machines and game apps. Our Slot game developers turn ideas into hits.",
      images: ["https://www.gameignix.com/common/ogimage/slot-game-development-company.jpeg"],
    },
  };
}

export default function SlotGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Slot Game Development",
    url: "https://www.gameignix.com/services/slot-game-development",
    description:
      "GameIgnix delivers slot game development services, creating visually stunning slot machines, mobile slot apps, and interactive gaming experiences.",
  };
  return (
    <>
      <SlotGameClient />
      <Script
          id="slot-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}