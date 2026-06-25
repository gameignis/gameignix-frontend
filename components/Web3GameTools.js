"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Web3GameTools() {
  
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
            Tools & Technologies We Use for Web3 Game Development
          </h2>
          <p className="lead text-gray-400">
            Our Web3 game development stack combines advanced game engines with powerful blockchain frameworks and scalable backend tools to 
deliver high-performance games that are both engaging and future-ready.
          </p>
        </div>
        <div className="tech-progress-wrapper">
          <div className="flex justify-center tech-categlis flex-wrap border-b border-white/10">
            {["Art and Design Tools", "2D/3D Creation Tools", "Programming Languages", "Game Engines"].map((item, i) => (
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
                <Image src="/common/GIMP.webp" alt="GIMP" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
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
                <Image src="/common/Zbrush.webp" alt="Zbrush" width={132} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/substance-painter-designer.webp" alt="Substance Painter & Designer" width={345} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/marvelous-designer.webp" alt="Marvelous Designer" width={230} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/c-sharp.webp" alt="C#" width={108} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/python.webp" alt="Python" width={126} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/hlsl-glsl.webp" alt="HLSL/GLSL" width={126} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/unity-tool.webp" alt="Unity" width={130} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <div className="tech-card">
                <Image src="/common/unreal-tool.webp" alt="Unreal Engine" width={206} height={40} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
