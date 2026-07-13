"use client";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function BlogdetailPageServer() {

  useEffect(() => {
  const sections = Array.from(document.querySelectorAll("h2[id]")) as HTMLElement[];
  const navLinks = Array.from(document.querySelectorAll(".stic-link")) as HTMLAnchorElement[];
  const threshold = 150;
  const offset = 50;

  const getId = (link: HTMLAnchorElement) =>
    (link.dataset.scroll || link.getAttribute("href") || "").replace(/^.*#/, "");

  const setActive = (id?: string) => {
    navLinks.forEach((l: HTMLAnchorElement) => {
      l.classList.toggle("active", getId(l) === id);
    });
  };

  const onScroll = () => {
    const y = window.scrollY;
    const cur = sections.filter(s => y >= s.offsetTop - threshold).pop();
    setActive(cur?.id);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initialize on load

  navLinks.forEach((link: HTMLAnchorElement) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.dataset.scroll || "") as HTMLElement;
      if (target) {
        window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
        setActive(target.id);
      }
    });
  });

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
  }, []);

  return (

    <>

      <section className="in-bansc">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-6/12">
              <div className="inban-lef">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap gap-2 breadcrumb">
                    <li>
                      <Link href="/" className="text-white hover:text-[#ff8600]">
                        Home
                      </Link>
                    </li>
                    <li className="separator">/</li>
                    <li className="active">
                      Blog
                    </li>
                  </ol>
                </nav>
                <span className="categ-tx">Design</span>
                <h1 className="cm-hd1">Collaborate like you’re in the same room, even when you’re not</h1>
                <p className="para-cnt1">
                  Share Microsoft or Google files with your team directly from your GameIgnix Meeting —
                  no sending links, no version confusion.
                </p>
                <div className="flex justify-between">
                  <span className="dat-tx1">2 min read</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="blog-mnim">
                 <Image src="/common/blog/blogim1.webp" className="blog-im1" alt="AI Companion" width="450" height="450" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pos-mnsc1">
       <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="w-full md:col-span-4">
              <div className="pos-stickycn">
            <div className="sticky-bnav">
              <h5 className="nav-title">In this blog</h5>
              <ul className="stic-lis">
                <li>
                  <Link href="javascript:;" data-scroll="#section-header1" className="stic-link active">
                    <span className="st-num">01</span>
                    <span className="st-name">Bring your files into the flow of your conversation</span>                    
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" data-scroll="#section-header2" className="stic-link">
                    <span className="st-num">02</span>
                    <span className="st-name">Instead of multitasking, bring your work to where you are</span>                    
                  </Link>
                </li>
              </ul>
            </div>
            <div className="soc-bk1">
             <h5 className="nav-title">Share this post</h5>
              <div className="social-icons flex flex-wrap">
                <Link href="https://www.facebook.com/gameignix/" target="_blank" aria-label="facebook" className="flex items-center justify-center">
                  <Image src="/common/facebook.webp" alt="facebook" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
                <Link href="https://www.linkedin.com/company/gameignix" target="_blank" aria-label="linkedin" className="flex items-center justify-center">
                  <Image src="/common/linkedin.webp" alt="linkedin" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
                <Link href="https://www.instagram.com/gameignix/" target="_blank" aria-label="instagram" className="flex items-center justify-center">
                  <Image src="/common/instagram.webp" alt="instagram" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
                <Link href="https://x.com/gameignix/" target="_blank" aria-label="twitter" className="flex items-center justify-center">
                  <Image src="/common/twitter.webp" alt="twitter" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
                <Link href="https://www.pinterest.com/gameignix/" target="_blank" aria-label="pinterest" className="flex items-center justify-center">
                  <Image src="/common/pinterest.webp" alt="pinterest" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
                <Link href="https://www.youtube.com/@gameignix" target="_blank" aria-label="youtube" className="flex items-center justify-center">
                  <Image src="/common/youtube.webp" alt="youtube" className="max-w-full h-auto flex-shrink-0"  width="16" height="16" />
                </Link>
              </div>
              </div>
             </div>
            </div>
            <div className="w-full md:col-span-8">
              <div className="pos-mncnt">
                <p>Your workday might look something like this: you’re in a GameIgnix Meeting... Productivity suites like Microsoft 365 and 
                  Google Workspace are powerful tools... Add in remote, hybrid, and distributed teams...
                </p>

                <h2 id="section-header1">Bring your files into the flow of your conversation</h2>
                <p>Now you can bring your files—whether they live in Microsoft 365 or Google Drive...</p>

                <h3>Microsoft 365 for GameIgnix app</h3>
                <ul>
                  <li>Connect your Microsoft account...</li>
                  <li>Create new Microsoft documents...</li>
                  <li>Share files with participants...</li>
                  <li>Collaborate in real time...</li>
                </ul>

                <h3>Google Drive for GameIgnix app</h3>
                <ul>
                  <li>Connect your Google account...</li>
                  <li>Create and share documents, Sheets, and Slides...</li>
                </ul>

                <h3>Get started with the apps</h3>
                <ul>
                  <li>Install Microsoft 365 for GameIgnix app...</li>
                  <li>Install Google Drive for GameIgnix app...</li>
                </ul>

                <h2 id="section-header2">Instead of multitasking, bring your work to where you are</h2>
                <p>In your next GameIgnix Meeting, instead of pasting a Google Doc link...</p>
                <p>No more “Can you send the link?” or “Which version are we using?”...</p>

                <h3>Microsoft 365 for GameIgnix app</h3>
                <ul>
                  <li>Connect your Microsoft account...</li>
                  <li>Create new Microsoft documents...</li>
                  <li>Share files with participants...</li>
                  <li>Collaborate in real time...</li>
                </ul>

                <h3>Google Drive for GameIgnix app</h3>
                <ul>
                  <li>Connect your Google account...</li>
                  <li>Create and share documents, Sheets, and Slides...</li>
                </ul>

                <h3>Get started with the apps</h3>
                <ul>
                  <li>Install Microsoft 365 for GameIgnix app...</li>
                  <li>Install Google Drive for GameIgnix app...</li>
                </ul>
              </div>
            </div>
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