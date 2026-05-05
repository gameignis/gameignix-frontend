import type { Metadata } from "next";
import dynamic from "next/dynamic";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const ContactClient = dynamic(
  () => import("./ContactClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/contact`;
  return {
      title: "Gameignix Contact Us | Discuss Your Game Project",
      description: "Have a game idea or project in mind? Contact GameIgnix today to discuss your requirements and connect with our expert game developers.",
      keywords: [
      "gameignix contact", "gameignix request quote", "gameignix business inquiry"],
      alternates: {
        canonical,
      },
  };
}

export default function ContactPageServer() {
  return <ContactClient />;
}