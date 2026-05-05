import type { Metadata } from "next";
import dynamic from "next/dynamic";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com/";

const BlogClient = dynamic(
  () => import("./BlogClient")
);

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${SITE}/blog`;
  return {
      title: "GameIgnix: Blog",
      description: "Have a game idea or project in mind? Contact GameIgnix today to discuss your requirements and connect with our expert game developers.",
      keywords: [
      "gameignix contact", "gameignix request quote", "gameignix business inquiry"],
      alternates: {
        canonical,
      },
  };
}

export default function BlogPageServer() {
  return <BlogClient />;
}