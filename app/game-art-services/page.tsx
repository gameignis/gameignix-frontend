import type { Metadata } from "next";
import dynamic from "next/dynamic";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const GameArtClient = dynamic(
  () => import("./GameArtClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/game-art-services`;
  return {
      title: "Game Art Studio | Game Art Services | Game Design Services | GameIgnix",
      description: "GameIgnix is a leading game art studio offering top-notch game art services and design solutions, crafting stunning visuals for all major platforms and genres.",
      keywords: [
      "game art studio", "game art outsourcing studio", "game art services", "video game art studio", "game art services company", "video game art services", "game art company", "game art development company", "game design services", "game design studio", "video game design company"],
      alternates: {
        canonical,
      },
  };
}

export default function GameArtPageServer() {
  return <GameArtClient />;
}