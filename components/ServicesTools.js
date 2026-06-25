"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ServicesTools() {
  
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
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Tools and Techno͏lo͏gie͏s We Use
          </h2>
          <p className="lead text-gray-400">
            At GameIgnix, we combine industry-standard tools with the latest technologies to stay ahead of emerging trends, building games that are not 
            just for today but also for the future.
          </p>
        </div>
        <div className="tech-progress-wrapper">
          <div className="flex flex-wrap justify-center tech-categlis border-b border-white/10">
            {["Art and Design Tools", "Programming Languages", "Testing and Debugging Tools", "Backend and Server Technologies"].map((item, i) => (
              <p key={i} className="tech-category cursor-pointer py-4 text-lg text-white/60" data-index={i}> {item} </p>
            ))}
          </div>
          <div className="progress-line"></div>
          <div className="tech-card-row">
            <div className="scrollimgs">
              <div className="tech-card">
                <Image src="/common/photoshop.webp" alt="Adobe Photoshop" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/illustrator.webp" alt="Illustrator" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/figma.webp" alt="Figma" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/blender.webp" alt="B͏lender" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/Maya.webp" alt="Maya" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/GIMP.webp" alt="GIMP" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/Zbrush.webp" alt="Zbrush" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/c-plus.webp" alt="C++" width={108} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/c-sharp.webp" alt="C#" width={108} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/javascript.webp" alt="JavaScript" width={169} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/python.webp" alt="Python" width={126} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/rust.webp" alt="Rust" width={83} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/swift.webp" alt="Swift" width={103} height={40} className="max-w-full h-auto flex-shrink-0" />
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
                <Image src="/common/unity-test-framework.webp" alt="U͏nity T͏est Framewor͏k͏" width={222} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/bugsplat.webp" alt="BugSpla͏t" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/game-bench.webp" alt="GameBench" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/nodejs.webp" alt="Node js" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/python.webp" alt="Python" width={126} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/firebase.webp" alt="Firebase" width={150} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/aws.webp" alt="AWS" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/azure.webp" alt="Azure" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/mongodb.webp" alt="MongoDB" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/postgresql.webp" alt="PostgreSQL" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
