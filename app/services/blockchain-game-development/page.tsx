import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const BlockchainGameClient = dynamic(
  () => import("./BlockchainGameClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services/blockchain-game-development`;
  return {
      title: "Blockchain Game Development Company | GameIgnix",
      description: "GameIgnix is a top blockchain game development company crafting NFT, play-to-earn, and Crypto games with cutting-edge design and expert developers.",
      keywords: [
      "blockchain game development",
      "blockchain game development company",
      "blockchain game developers",
      "blockchain game company",
      "blockchain game development services",
      "blockchain game development studio",
      "blockchain game development agency",
      "blockchain game app development",
      "blockchain gaming development services",
      "blockchain mobile game development"
    ],
    alternates: { canonical },
    openGraph: {
      title: "Blockchain Game Development Company | GameIgnix",
      description: "GameIgnix is a top blockchain game development company crafting NFT, play-to-earn, and Crypto games with cutting-edge design and expert developers.",
      url: canonical,
      siteName: "GameIgnix",
      type: "website",
      images: [
        {
          url: "https://www.gameignix.com/common/ogimage/blockchain-game-development.jpeg",
          width: 1200,
          height: 630,
          alt: "Blockchain Game Development Company | GameIgnix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blockchain Game Development Company | GameIgnix",
      description: "GameIgnix is a top blockchain game development company crafting NFT, play-to-earn, and Crypto games with cutting-edge design and expert developers.",
      images: ["https://www.gameignix.com/common/ogimage/blockchain-game-development.jpeg"],
    },
  };
}

export default function BlockchainGamePageServer() {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blockchain Game Development",
    url: "https://www.gameignix.com/services/blockchain-game-development",
    description:
      "GameIgnix specializes in blockchain game development, creating decentralized games with NFT integration, crypto wallets, and play-to-earn mechanics.",
  };
  return (
    <>
      <BlockchainGameClient />
      <Script
          id="blockchain-game-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </>
  );

}