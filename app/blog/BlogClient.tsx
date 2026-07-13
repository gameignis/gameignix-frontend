"use client";
import { useEffect, useMemo, useState } from "react";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import { getBlogExcerpt, getPublishedBlogs, toBlogHref, type BlogPost } from "@/lib/blogs";

export default function BlogPageServer() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadBlogs() {
      try {
        const data = await getPublishedBlogs({ page: 1, pageSize: 30 });
        if (mounted) {
          setPosts(data.items || []);
        }
      } catch {
        if (mounted) {
          setPosts([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          posts
            .map((post) => post.category?.name)
            .filter((name): name is string => Boolean(name))
        )
      ),
    [posts]
  );

  const filteredCards = useMemo(() => {
    return posts.filter((post) => {
      const lowerSearch = search.trim().toLowerCase();
      const titleMatch = post.title?.toLowerCase().includes(lowerSearch);
      const categoryName = post.category?.name || "";
      const categorySearchMatch = categoryName.toLowerCase().includes(lowerSearch);
      const categoryFilterMatch =
        !selectedCategory || categoryName.toLowerCase() === selectedCategory.toLowerCase();

      return (!lowerSearch || titleMatch || categorySearchMatch) && categoryFilterMatch;
    });
  }, [posts, search, selectedCategory]);

  const filteredSuggestions = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  const heroPost = filteredCards[0] || posts[0];

  return (
    <>
      <section className="in-bansc">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-7/12">
              <div className="inban-lef">
                <h1 className="cm-hd1">The latest from the GameIgnix blog</h1>
                <p className="para-cnt1">
                  Learn how to work better with new ideas, industry insights and the latest GameIgnix innovations.
                </p>
                <form autoComplete="off" className="mb-12">
                  <div className="form-card">
                    <div className="grid grid-cols-1 search-group1 md:grid-cols-2 gap-6">
                      <div className="search-fd1 float-label-field">
                        <div className="input-icon-wrapper relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                          <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                              setSearch(e.target.value);
                              setShowSuggestions(true);
                            }}
                            placeholder="Search blog posts"
                            className="w-full inp-tx1 focus:outline-none"
                          />
                          <label htmlFor="blog-search" className="floating-label">
                            Search blog posts
                          </label>
                          {showSuggestions && search && filteredSuggestions.length > 0 && (
                            <ul className="absolute z-10 suggestion-list">
                              {filteredSuggestions.map((item) => (
                                <li
                                  key={item}
                                  onClick={() => {
                                    setSearch(item);
                                    setShowSuggestions(false);
                                  }}
                                  className="cursor-pointer suggestion-item"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="search-fd2">
                        <div className="cm-select1">
                          <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="styled-select focus:outline-none"
                          >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-5/12">
              <div className="cm-cardbk1 ms-auto">
                <span className="categ-tag">{heroPost?.category?.name || "Blog"}</span>
                <Image
                  src={heroPost?.imageUrl || "/common/blog/blogim1.webp"}
                  className="blog-im1"
                  alt={heroPost?.imageAlt || heroPost?.title || "Blog"}
                  width={450}
                  height={450}
                />
                <div className="cmcard-rcn1">
                  <h3 className="cm-hd2">{heroPost?.title || "The latest updates from GameIgnix"}</h3>
                  <p className="para-cnt1">
                    {heroPost ? getBlogExcerpt(heroPost, 180) : "Discover new ideas, insights, and practical guidance from the GameIgnix team."}
                  </p>
                  <Link href={heroPost ? toBlogHref(heroPost) : "/blog"} className="link-tx1" aria-label="Read more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ccm-cardsc1">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div id="cards-container" className="flex flex-wrap">
            {loading ? (
              <p className="text-center text-gray-500 text-lg">Loading blog posts...</p>
            ) : filteredCards.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">No blog posts found</p>
            ) : (
              <div id="cards-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCards.map((card, index) => (
                  <div key={card._id || index} className="contents">
                    <div className="cm-cardbk1">
                      <Link href={toBlogHref(card)} className="cm-cardin1">
                        <img
                          src={card.imageUrl || "/common/blog/blogim1.webp"}
                          className="w-full h-48 object-cover blog-im1"
                          alt={card.imageAlt || card.title || card.category?.name || "Blog"}
                        />
                        <div className="p-6">
                          <span className="categ-tag">{card.category?.name || "Blog"}</span>
                          <h3 className="cm-hd2">{card.title}</h3>
                          <p className="para-cnt1">
                            {getBlogExcerpt(card, 120) || "Read more from GameIgnix."}
                          </p>
                          <span className="link-tx1">Read more →</span>
                        </div>
                      </Link>
                    </div>
                    {(index + 1) % 3 === 0 && index !== filteredCards.length - 1 && (
                      <div className="col-span-full">
                        <div className="ad-bk1">
                          <h2 className="cm-hd2">See the latest Zoom innovations you don’t want to miss</h2>
                          <Link href="#" className="cm-btn1">
                            <span>What&apos;s New?</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div id="no-results" className="fw-rw" style={{ display: "none" }}>
            <p>No blog posts found</p>
          </div>
        </div>
      </section>

      <div className="blogfoot">
        <section className="py-[2rem]" id="footer">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
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