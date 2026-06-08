"use client";

import { useEffect } from "react";
import Contact from "@/components/Contact";
import {
  getBlogExcerpt,
  prepareContentWithHeadings,
  type BlogPost,
} from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  blog: BlogPost;
};

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogDetailContent({ blog }: Props) {
  const preparedContent = prepareContentWithHeadings(blog.contentHtml || "");
  const contentHtml = preparedContent.html;
  const headings = preparedContent.headings;
  const excerpt = getBlogExcerpt(blog, 220);

  const readMinutes = Math.max(
    1,
    Math.ceil(htmlToWordCount(contentHtml) / 200)
  );

  useEffect(() => {
    const contentRoot = document.querySelector(".blog-rich-content");
    const tocRoot = document.querySelector(".sticky-bnav");
    if (!contentRoot || !tocRoot) return undefined;

    const sections = Array.from(contentRoot.querySelectorAll("h1[id], h2[id]")) as HTMLElement[];
    const navLinks = Array.from(tocRoot.querySelectorAll(".stic-link")) as HTMLAnchorElement[];
    if (!sections.length || !navLinks.length) return undefined;

    const threshold = 150;
    const offset = 50;

    const getId = (link: HTMLAnchorElement) =>
      (link.dataset.scroll || link.getAttribute("href") || "").replace(/^.*#/, "");

    const setActive = (id?: string) => {
      navLinks.forEach((link) => {
        link.classList.toggle("active", getId(link) === id);
      });
    };

    const onScroll = () => {
      const y = window.scrollY;
      const current = sections.filter((section) => y >= section.offsetTop - threshold).pop();
      setActive(current?.id);
    };

    const clickHandlers: Array<{ link: HTMLAnchorElement; handler: (event: Event) => void }> = [];

    navLinks.forEach((link) => {
      const handler = (event: Event) => {
        event.preventDefault();
        const target = document.querySelector(link.dataset.scroll || "") as HTMLElement | null;
        if (target) {
          window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
          setActive(target.id);
        }
      };
      link.addEventListener("click", handler);
      clickHandlers.push({ link, handler });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      clickHandlers.forEach(({ link, handler }) => link.removeEventListener("click", handler));
    };
  }, [contentHtml]);

  return (
    <>
      <section className="in-bansc">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-6/12">
              <div className="inban-lef">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap gap-2 breadcrumb">
                    <li>
                      <Link href="/" className="text-white hover:text-orange-500">
                        Home
                      </Link>
                    </li>
                    <li className="separator">/</li>
                    <li>
                      <Link href="/blog" className="text-white hover:text-orange-500">
                        Blog
                      </Link>
                    </li>
                  </ol>
                </nav>
                <span className="categ-tx">{blog.category?.name || "Blog"}</span>
                <h1 className="cm-hd1">{blog.title}</h1>
                {excerpt ? <p className="para-cnt1">{excerpt}</p> : null}
                <div className="flex justify-between">
                  <span className="dat-tx1">{readMinutes} min read</span>
                  <span className="dat-tx1">{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="blog-mnim">
                <Image
                  src={blog.imageUrl || "/common/blog/blogim1.webp"}
                  className="blog-im1"
                  alt={blog.imageAlt || blog.title}
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pos-mnsc1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="w-full md:col-span-4">
              <div className="pos-stickycn">
                {headings.length > 0 ? (
                  <div className="sticky-bnav">
                    <h5 className="nav-title">In this blog</h5>
                    <ul className="stic-lis">
                      {headings.map((heading, index) => (
                        <li key={heading.id}>
                          <Link
                            href={`#${heading.id}`}
                            data-scroll={`#${heading.id}`}
                            className={`stic-link${index === 0 ? " active" : ""}`}
                          >
                            <span className="st-num">{String(index + 1).padStart(2, "0")}</span>
                            <span className={`st-name ${heading.level === "h2" ? "st-sub" : ""}`}>{heading.text}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="soc-bk1">
                  <h5 className="nav-title">Share this post</h5>
                  <div className="social-icons flex flex-wrap">
                    <Link href="https://www.facebook.com/gameignix/" target="_blank" aria-label="facebook" className="flex items-center justify-center">
                      <Image src="/common/facebook.webp" alt="facebook" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/gameignix" target="_blank" aria-label="linkedin" className="flex items-center justify-center">
                      <Image src="/common/linkedin.webp" alt="linkedin" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                    <Link href="https://www.instagram.com/gameignix/" target="_blank" aria-label="instagram" className="flex items-center justify-center">
                      <Image src="/common/instagram.webp" alt="instagram" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                    <Link href="https://x.com/gameignix/" target="_blank" aria-label="twitter" className="flex items-center justify-center">
                      <Image src="/common/twitter.webp" alt="twitter" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                    <Link href="https://www.pinterest.com/gameignix/" target="_blank" aria-label="pinterest" className="flex items-center justify-center">
                      <Image src="/common/pinterest.webp" alt="pinterest" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                    <Link href="https://www.youtube.com/@gameignix" target="_blank" aria-label="youtube" className="flex items-center justify-center">
                      <Image src="/common/youtube.webp" alt="youtube" className="max-w-full h-auto flex-shrink-0" width={16} height={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:col-span-8">
              <div
                className="pos-mncnt blog-rich-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="blogfoot">
        <section className="contactsc" id="footer">
          <div className="container">
            <div className="text-center cm-head2">
              <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
              <p className="lead text-gray-400">
                Dreaming of your next big game? Fill out the form to request a tailored quote and let our skilled team provide the best solution
                for your needs with precision and creativity.
              </p>
            </div>
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}

function htmlToWordCount(html: string) {
  return html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}
