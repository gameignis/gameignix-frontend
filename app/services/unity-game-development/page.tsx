import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const UnityGameClient = dynamic(
  () => import("./UnityGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/unity-game-development`;
  return {
      title: "Unity Game Development Company | Unity 3D Game Developers",
      description: "GameIgnix is a Unity game development company crafting immersive 2D, 3D, AR & VR games. Hire expert Unity game developers to bring your vision to life.",
      keywords: [
      "unity game development company",
      "unity 3d game development company",
      "unity game developers",
      "unity 3d game developers",
      "unity game development studio",
      "unity game development services",
      "unity 3d game development studio",
      "unity game development agency",
      "unity game development outsourcing company", 
      "unity 3d game development services", 
      "unity 2d game development company"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Unity Game Development Company | Unity 3D Game Developers",
      description: "GameIgnix is a Unity game development company crafting immersive 2D, 3D, AR & VR games. Hire expert Unity game developers to bring your vision to life.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/unity-game-development-company.jpeg",
          width: 1200,
          height: 630,
          alt: "Unity Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Unity Game Development Company | Unity 3D Game Developers",
      description: "GameIgnix is a Unity game development company crafting immersive 2D, 3D, AR & VR games. Hire expert Unity game developers to bring your vision to life.",
      images: ["https://www.gameignix.com/common/ogimage/unity-game-development-company.jpeg"],
    },
  };
}

export default function UnityGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Unity Game Development",
    url: "https://www.gameignix.com/services/unity-game-development",
    description:
      "GameIgnix provides end-to-end Unity game development services for mobile, PC, console, and AR/VR platforms.",
  };
  return (
    <>
      <UnityGameClient />
      <Script
          id="unity-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}