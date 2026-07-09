"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ServicesTools() {
  
  const techData = [
      { src: "/common/photoshop.webp", alt: "Adobe Photoshop", width: 132 },
      { src: "/common/illustrator.webp", alt: "Illustrator", width: 132 },
      { src: "/common/figma.webp", alt: "Figma", width: 132 },
      { src: "/common/blender.webp", alt: "Blender", width: 132 },
      { src: "/common/Maya.webp", alt: "Maya", width: 132 },
      { src: "/common/GIMP.webp", alt: "GIMP", width: 132 },
      { src: "/common/Zbrush.webp", alt: "Zbrush", width: 132 },
      { src: "/common/c-plus.webp", alt: "C++", width: 108 },
      { src: "/common/c-sharp.webp", alt: "C#", width: 108 },
      { src: "/common/javascript.webp", alt: "JavaScript", width: 169 },
      { src: "/common/python.webp", alt: "Python", width: 126 },
      { src: "/common/rust.webp", alt: "Rust", width: 83 },
      { src: "/common/swift.webp", alt: "Swift", width: 103 },
      { src: "/common/appium.webp", alt: "Appium", width: 132 },
      { src: "/common/testcomplete.webp", alt: "TestComplete", width: 163 },
      { src: "/common/selenium.webp", alt: "Selenium", width: 150 }, 
      { src: "/common/unity-test-framework.webp", alt: "Unity Test Framework", width: 222 },
      { src: "/common/bugsplat.webp", alt: "BugSpla͏t", width: 132 },
      { src: "/common/game-bench.webp", alt: "GameBench", width: 132 },
      { src: "/common/nodejs.webp", alt: "Node.js", width: 132 },
      { src: "/common/python.webp", alt: "Python", width: 126 },
      { src: "/common/firebase.webp", alt: "Firebase", width: 150 },
      { src: "/common/aws.webp", alt: "AWS", width: 132 },
      { src: "/common/azure.webp", alt: "Azure", width: 132 },
      { src: "/common/mongodb.webp", alt: "MongoDB", width: 132 },
      { src: "/common/postgresql.webp", alt: "PostgreSQL", width: 132 },
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
            Tools and Techno͏lo͏gie͏s We Use
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            At GameIgnix, we combine industry-standard tools with the latest technologies to stay ahead of emerging trends, building games that are not 
            just for today but also for the future.
          </p>
        </div>
        <div className="tech-progress-wrapper">
          <div className="flex justify-center tech-categlis flex-wrap border-b border-white/10">
            {["Art and Design Tools", "Programming Languages", "Testing and Debugging Tools", "Backend and Server Technologies"].map((item, i) => (
              <p key={i} className="tech-category bg-transparent font-medium mx-[20px] cursor-pointer py-[6px] md:py-4 text-[18px] md:text-[20px] text-white/60 transition-colors duration-300 ease-in-out" data-index={i}> {item} </p>
            ))}
          </div>
          <div className="progress-line h-[2px] relative mb-[1rem]"></div>
          <div className="flex overflow-hidden mt-8 md:mt-16">
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
