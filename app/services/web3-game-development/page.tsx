import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const Web3GameClient = dynamic(
  () => import("./Web3GameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/web3-game-development`;
  return {
      title: "Web3 Game Development Company | Web3 Game Developers",
      description: "GameIgnix is a leading Web3 game development company that creates blockchain, NFT, and play-to-earn games with expert developers and designers.",
      keywords: [
      "web3 game development",
      "web3 game development company",
      "web3 game developers",
      "web3 game company",
      "web3 game development services",
      "web3 game development studio",
      "web3 game development agency",
      "web3 game app development",
      "web3 gaming development services", 
      "web3 mobile game development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Web3 Game Development Company | Web3 Game Developers",
      description: "GameIgnix is a leading Web3 game development company that creates blockchain, NFT, and play-to-earn games with expert developers and designers.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/web3-game-development.jpeg",
          width: 1200,
          height: 630,
          alt: "Web3 Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web3 Game Development Company | Web3 Game Developers",
      description: "GameIgnix is a leading Web3 game development company that creates blockchain, NFT, and play-to-earn games with expert developers and designers.",
      images: ["https://www.gameignix.com/common/ogimage/web3-game-development.jpeg"],
    },
  };
}

export default function Web3GamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web3 Game Development",
    url: "https://www.gameignix.com/services/web3-game-development",
    description:
      "GameIgnix delivers Web3 game development, building decentralized blockchain games, NFT-enabled experiences, and metaverse-ready gameplay.",
  };
  return (
    <>
      <Web3GameClient />
      <Script
          id="web3-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}