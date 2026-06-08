import { apiRequest } from "@/lib/api";

export type BlogCategory = {
  _id?: string;
  name?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  urlPath?: string;
  category?: BlogCategory | null;
  contentHtml?: string;
  imageUrl?: string;
  imageAlt?: string;
  createdAt?: string;
};

type BlogListResponse = {
  items: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
};

type BlogResolveResponse = {
  ok: boolean;
  result: BlogPost;
  related: BlogPost[];
  canonicalPath?: string;
};

export async function getPublishedBlogs(params?: {
  q?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}) {
  const search = new URLSearchParams({
    status: "published",
    page: String(params?.page || 1),
    pageSize: String(params?.pageSize || 9),
  });

  if (params?.q) search.set("q", params.q);
  if (params?.category) search.set("category", params.category);

  return apiRequest<BlogListResponse>(`/api/blogs?${search.toString()}`, {
    cache: "no-store",
  });
}

export async function resolveBlogByPath(path: string) {
  const search = new URLSearchParams({ path });
  return apiRequest<BlogResolveResponse>(`/api/blogs/resolve?${search.toString()}`, {
    cache: "no-store",
  });
}

export function toBlogHref(blog: BlogPost) {
  if (blog.urlPath) return blog.urlPath;
  if (blog.slug) return `/${blog.slug}`;
  return "/blog";
}

export function decodeHtmlEntities(text = "") {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

/** Decode escaped HTML from CMS and return safe markup for rendering. */
export function prepareBlogHtml(html = "") {
  if (!html) return "";

  let prepared = html.trim();
  if (/^(&lt;|&#60;)/i.test(prepared) || /&lt;(p|h\d|ul|ol|div|span|strong|em)\b/i.test(prepared)) {
    prepared = decodeHtmlEntities(prepared);
  }

  return prepared;
}

export function htmlToPlainText(html = "", maxLength = 150) {
  const prepared = prepareBlogHtml(html);
  let text = prepared
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|h[1-6]|li|tr)>/gi, " ")
    .replace(/<[^>]+>/g, " ");

  text = decodeHtmlEntities(text).replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function getBlogExcerpt(blog: BlogPost, maxLength = 150) {
  if (blog.metaDescription?.trim()) {
    return decodeHtmlEntities(blog.metaDescription.trim());
  }
  return htmlToPlainText(blog.contentHtml || "", maxLength);
}

export function summarizeHtml(html = "", maxLength = 150) {
  return htmlToPlainText(html, maxLength);
}

export type BlogHeading = {
  id: string;
  text: string;
  level: "h1" | "h2";
};

function slugifyHeading(value: string, fallbackIndex: number) {
  const base = decodeHtmlEntities(value)
    .toLowerCase()
    .replace(/<[^>]*>/g, " ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return base || `section-${fallbackIndex}`;
}

export function prepareContentWithHeadings(html = ""): {
  html: string;
  headings: BlogHeading[];
} {
  const prepared = prepareBlogHtml(html);
  const headings: BlogHeading[] = [];
  const usedIds = new Set<string>();
  let index = 0;

  const htmlWithHeadingIds = prepared.replace(
    /<(h1|h2)\b([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_, tag: "h1" | "h2", attrs: string, inner: string) => {
      index += 1;
      const idMatch = attrs.match(/\sid=["']([^"']+)["']/i);
      let id = (idMatch?.[1] || "").trim();

      if (!id) {
        id = slugifyHeading(inner, index);
      }

      let uniqueId = id;
      let suffix = 2;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${id}-${suffix}`;
        suffix += 1;
      }
      usedIds.add(uniqueId);

      headings.push({
        id: uniqueId,
        text: htmlToPlainText(inner, 200),
        level: tag,
      });

      const cleanedAttrs = attrs.replace(/\sid=["'][^"']+["']/i, "");
      return `<${tag}${cleanedAttrs} id="${uniqueId}">${inner}</${tag}>`;
    }
  );

  return {
    html: htmlWithHeadingIds,
    headings,
  };
}

export function extractBlogHeadings(html = ""): BlogHeading[] {
  return prepareContentWithHeadings(html).headings;
}
