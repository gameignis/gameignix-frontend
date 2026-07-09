"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Web3GameTools() {
  
  const techData = [
    { src: "/common/photoshop.webp", alt: "Adobe Photoshop", width: 132 },
    { src: "/common/illustrator.webp", alt: "Illustrator", width: 132 },
    { src: "/common/GIMP.webp", alt: "GIMP", width: 132 },
    { src: "/common/figma.webp", alt: "Figma", width: 132 },
    { src: "/common/blender.webp", alt: "B͏lender", width: 132 },
    { src: "/common/Maya.webp", alt: "Maya", width: 132 },
    { src: "/common/Zbrush.webp", alt: "Zbrush", width: 132 },
    { src: "/common/substance-painter-designer.webp", alt: "Substance Painter Designer", width: 108 },
    { src: "/common/marvelous-designer.webp", alt: "Marvelous Designer", width: 108 },
    { src: "/common/c-sharp.webp", alt: "C#", width: 169 },
    { src: "/common/python.webp", alt: "Python", width: 126 },
    { src: "/common/hlsl-glsl.webp", alt: "HLSL/GLSL", width: 126 },
    { src: "/common/unity-tool.webp", alt: "Unity", width: 130 },
    { src: "/common/unreal-tool.webp", alt: "Unreal Engine", width: 206 },
  ];
  
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
    <section className="pt-[2rem] pb-[4rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-4 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Tools & Technologies We Use for Web3 Game Development
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Our Web3 game development stack combines advanced game engines with powerful blockchain frameworks and scalable backend tools to 
deliver high-performance games that are both engaging and future-ready.
          </p>
        </div>
        <div className="tech-progress-wrapper">
          <div className="flex justify-center tech-categlis flex-wrap border-b border-white/10">
            {["Art and Design Tools", "2D/3D Creation Tools", "Programming Languages", "Game Engines"].map((item, i) => (
              <p key={i} className="tech-category bg-transparent font-medium mx-[20px] cursor-pointer py-[6px] md:py-4 text-[18px] md:text-[20px] text-white/60 transition-colors duration-300 ease-in-out" data-index={i}> {item} </p>
            ))}
          </div>
          <div className="progress-line h-[2px] relative mb-[1rem]"></div>
          <div className="flex overflow-hidden pb-4 mt-8 md:mt-16">
            <div className="flex shrink-0 items-center gap-4 lg:gap-11 whitespace-nowrap scrollimgs">
              {techData.map((item, i) => (
                <div key={i} className="flex flex-[0_1_auto] items-center justify-center mt-[2px] rounded-lg border border-[#ffffff73] bg-white/5 hover:bg-white/15 transition-all duration-300 min-h-[80px] px-[1.2rem] py-[1.1rem] md:max-lg:w-[100px] md:max-lg:p-[5px] max-md:min-h-[50px] max-md:px-[5px] max-md:py-[6px]">
                  <Image src={item.src} alt={item.alt} width={item.width} height={40} loading="lazy" className="max-w-full max-h-[40px] h-auto object-contain shrink-0 max-md:max-w-[120px] max-md:h-[25px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
