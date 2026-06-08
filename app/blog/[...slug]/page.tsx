import type { Metadata } from "next";
import { redirect } from "next/navigation";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com";

type BlogPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanPath = `/${slug.join("/")}`;
  return {
    title: "GameIgnix Blog",
    description: "Explore the latest industry updates, insights, and product stories from GameIgnix.",
    alternates: {
      canonical: `${SITE}${cleanPath}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  redirect(`/${slug.join("/")}`);
}
