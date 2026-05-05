"use client";
import { useState, useMemo } from "react";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "AI Companion",
  "Meeting and chat",
  "Phone system",
  "Workforce management",
  "App marketplace",
  "Contact center",
];

const cardsData = [
  { category: "App marketplace", image: "/common/blog/blogim2.webp" },
  { category: "Contact center", image: "/common/blog/blogim3.webp" },
  { category: "AI Companion", image: "/common/blog/blogim1.webp" },
  { category: "Phone system", image: "/common/blog/blogim4.webp" },
  { category: "Meeting and chat", image: "/common/blog/blogim5.webp" },
  { category: "Workforce management", image: "/common/blog/blogim6.webp" },
];

export default function BlogPageServer() {

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCards = useMemo(() => {
    return cardsData.filter((card) =>
      card.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredSuggestions = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      <section className="in-bansc">
        <div className="container">
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
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          🔍
                        </span>
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
                        <label htmlFor="blog-search" className="floating-label">Search blog posts</label>
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
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
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
                <span className="categ-tag">AI Companion</span>
                <Image src="/common/blog/blogim1.webp" className="blog-im1" alt="AI Companion" width="450" height="450" />
                <div className="cmcard-rcn1">
                  <h3 className="cm-hd2">Leveraging agentic AI to power the next evolution of GameIgnix</h3>
                  <p className="para-cnt1">
                    Learn more about how we’re bringing our agentic AI vision to life and discover how GameIgnix can help you radically transform your workday for the better.
                  </p>
                  <Link href="#" className="link-tx1" aria-label="Read more">Read more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ccm-cardsc1">
        <div className="container">
          <div id="cards-container" className="flex flex-wrap">
            {filteredCards.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                No blog posts found
              </p>
            ) : (
              <div
                id="cards-container"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCards.map((card, index) => (
                  <div key={index} className="contents">
                    <div className="cm-cardbk1">
                      <Link href="#" className="cm-cardin1">
                        <Image
                          src={card.image}
                          className="w-full h-48 object-cover blog-im1"
                          alt={card.category}
                          width={450}
                          height={250}
                        />
                        <div className="p-6">
                          <span className="categ-tag">{card.category}</span>
                          <h3 className="cm-hd2">
                            Leveraging agentic AI to power the next evolution of GameIgnix
                          </h3>
                          <p className="para-cnt1">
                            Learn how our agentic AI vision transforms workday productivity.
                          </p>
                          <span className="link-tx1">Read more →</span>
                        </div>
                      </Link>
                    </div>
                    {(index + 1) % 3 === 0 &&
                      index !== filteredCards.length - 1 && (
                        <div className="col-span-full">
                          <div className="ad-bk1">
                            <h2 className="cm-hd2">
                              See the latest Zoom innovations you don’t want to miss
                            </h2>
                            <Link href="#" className="cm-btn1">
                              <span>What's New?</span>
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