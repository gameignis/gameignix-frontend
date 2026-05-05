import type { Metadata } from "next";
import dynamic from "next/dynamic";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const ServicesClient = dynamic(
  () => import("./ServicesClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/services`;
  return {
      title: "Game Development Services | Custom Game Design Services | GameIgnix",
      description: "GameIgnix offers expert game development services and tailored game design services to build high-quality games that deliver engaging gaming experiences.",
      keywords: [
      "game development services", "Video game development services", "game development solutions", "game design services", "video game design services", "online game development services", "online game design services"],
      alternates: {
        canonical,
      },
  };
}

export default function ServicesPageServer() {
  return <ServicesClient />;
}