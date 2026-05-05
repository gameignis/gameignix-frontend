import type { Metadata } from "next";
import dynamic from "next/dynamic";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const WhiteLabelCasinoClient = dynamic(
  () => import("./WhiteLabelCasinoClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/white-label-casino`;
  return {
      title: "White Label Online Casino & Crypto Casino Software | GameIgnix",
      description: "Launch your own branded online casino with GameIgnix White Label Casino and Crypto Casino Software solutions built for speed, security, and scalability.",
      keywords: [
      "white label casino", "white label online casino", "white label online casino software", "casino software", "white label crypto casino", "crypto casino software", "white label casino game development", "white label casino game development company", "white label casino software provider", "white label casino platform", "white label crypto casino software"],
      alternates: {
        canonical,
      },
  };
}

export default function WhiteLabelCasinoPageServer() {
  return <WhiteLabelCasinoClient />;
}