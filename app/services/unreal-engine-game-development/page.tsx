import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const UnrealGameClient = dynamic(
  () => import("./UnrealGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/unreal-engine-game-development`;
  return {
      title: "Unreal Engine Game Development Company | GameIgnix",
      description: "Hire GameIgnix, a top Unreal Engine game development company, to build stunning custom 2D & 3D games. Our Unreal game developers turn ideas into hits.",
      keywords: [
      "unreal engine game development company",
      "unreal engine game developers",
      "unreal engine developers",
      "unreal engine game development studio",
      "unreal engine game development services",
      "unreal engine game development agency",
      "unreal engine game development outsourcing company",
      "unreal engine 3d game development company",
      "unreal engine video game development company"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Unreal Engine Game Development Company | GameIgnix",
      description: "Hire GameIgnix, a top Unreal Engine game development company, to build stunning custom 2D & 3D games. Our Unreal game developers turn ideas into hits.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/unreal-engine-game-development-company.jpeg",
          width: 1200,
          height: 630,
          alt: "Unreal Engine Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Unreal Engine Game Development Company | GameIgnix",
      description: "Hire GameIgnix, a top Unreal Engine game development company, to build stunning custom 2D & 3D games. Our Unreal game developers turn ideas into hits.",
      images: ["https://www.gameignix.com/common/ogimage/unreal-engine-game-development-company.jpeg"],
    },
  };
}

export default function UnrealGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Unreal Engine Game Development",
    url: "https://www.gameignix.com/services/unreal-engine-game-development",
    description:
      "GameIgnix is a leading Unreal Engine game development company, creating immersive AAA-quality games for PC, console, and mobile, tailored to client needs.",
  };
  return (
    <>
      <UnrealGameClient />
      <Script
          id="unreal-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}