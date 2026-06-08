import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/app/blog/[...slug]/BlogDetailContent";
import { ApiError, apiRequest } from "@/lib/api";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gameignix.com";

type BlogPageProps = {
  params: Promise<{ slug: string[] }>;
};

type BlogResolveResponse = {
  ok: boolean;
  result: {
    _id: string;
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    urlPath?: string;
    contentHtml?: string;
    imageUrl?: string;
    imageAlt?: string;
    category?: { name?: string };
    createdAt?: string;
  };
  related: Array<{
    _id: string;
    title: string;
    slug?: string;
    urlPath?: string;
    imageUrl?: string;
    imageAlt?: string;
    category?: { name?: string };
  }>;
};

async function fetchBlogByPath(pathname: string) {
  const query = new URLSearchParams({ path: pathname });
  return apiRequest<BlogResolveResponse>(`/api/blogs/resolve?${query.toString()}`, {
    cache: "no-store",
  });
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;

  try {
    const data = await fetchBlogByPath(pathname);
    const canonicalPath = data.result?.urlPath || pathname;
    return {
      title: data.result?.metaTitle || data.result?.title || "GameIgnix Blog",
      description:
        data.result?.metaDescription ||
        "Explore the latest industry updates, insights, and product stories from GameIgnix.",
      alternates: {
        canonical: `${SITE}${canonicalPath}`,
      },
    };
  } catch {
    return {
      title: "GameIgnix Blog",
      description: "Explore the latest industry updates, insights, and product stories from GameIgnix.",
    };
  }
}

export default async function BlogDetailByPathPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  let data: BlogResolveResponse;

  try {
    data = await fetchBlogByPath(pathname);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    notFound();
  }

  return <BlogDetailContent blog={data.result} />;
}
