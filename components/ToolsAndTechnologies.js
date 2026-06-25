"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ToolsAndTechnologies() {
  
  useEffect(() => {
    const progressLine = document.querySelector(".progress-line");
    const headings = document.querySelectorAll(".tech-category");
    const scrollImgs = document.querySelector(".scrollimgs");
    if (!progressLine || !scrollImgs || headings.length === 0) return;
    const stepDuration = 25000;
    const stepCount = headings.length;
    const stepInterval = stepDuration / stepCount;
    let currentIndex = 0;
    let startTime = Date.now();
    let rafId;
    const updateCategory = () => {
      const elapsed = (Date.now() - startTime) % stepDuration;
      const index = Math.floor(elapsed / stepInterval);
      if (index !== currentIndex) {
        headings.forEach(h => h.classList.remove("active"));
        headings[index].classList.add("active");
        currentIndex = index;
      }
      rafId = requestAnimationFrame(updateCategory);
    };
    headings[0].classList.add("active");
    updateCategory();
    scrollImgs.addEventListener("mouseenter", () => {
      progressLine.style.animationPlayState = "paused";
      scrollImgs.style.animationPlayState = "paused";
      cancelAnimationFrame(rafId);
    });
    scrollImgs.addEventListener("mouseleave", () => {
      progressLine.style.animationPlayState = "running";
      scrollImgs.style.animationPlayState = "running";
      startTime = Date.now() - currentIndex * stepInterval;
      updateCategory();
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="toolsc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Tools and Techno͏lo͏gie͏s We Use
          </h2>
          <p className="fw-semibold cm-stit text-orange fst-italic">
            From Code to Creativity: Powered by the Best Tech
          </p>
          <p className="lead text-gray-400">
            Our games are backed by advanced technologies and tools, along with innovation and creativity, ensuring they are not only
            entertaining but also technically solid and scalable.
          </p>
        </div>
        <div className="tech-progress-wrapper">
          <div className="flex justify-center tech-categlis flex-wrap border-b border-white/10">
            {["Programming Languages", "Testing Tools", "Graphics Software"].map((item, i) => (
              <p key={i} className="tech-category cursor-pointer py-4 text-lg text-white/60" data-index={i}> {item} </p>
            ))}
          </div>
          <div className="progress-line"></div>
          <div className="tech-card-row">
            <div className="scrollimgs">
              <div className="tech-card">
                <Image src="/common/java.webp" alt="Java" width={108} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/javascript.webp" alt="JavaScript" width={169} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/python.webp" alt="Python" width={126} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/swift.webp" alt="Swift" width={103} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/rust.webp" alt="Rust" width={83} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/appium.webp" alt="Appium" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/testcomplete.webp" alt="TestComplete" width={163} height={23} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/selenium.webp" alt="Selenium" width={150} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/jmeter.webp" alt="JMeter" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/postman.webp" alt="Postman" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/cypress.webp" alt="Cypress" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/photoshop.webp" alt="Photoshop" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/illustrator.webp" alt="Illustrator" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/figma.webp" alt="Figma" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/adobe-xd.webp" alt="Adobe XD" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/sketch.webp" alt="Sketch" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
