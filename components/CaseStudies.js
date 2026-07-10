"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Legends of the Lost Horizon", 
    desc: "Features expansive worlds filled with puzzles and mythical creatures. We integrated an immersive progression system, enabling players to team up and explore ancient secrets as they level up their characters.", 
    desc1: "Multi-Player Adventure", 
    desc2: "PC, Steam", 
    desc3: "Unity 3D", 
    caseimg: "/common/legends-of-lost-horizon.webp", 
  }, 
  { 
    title: "Casino Royale 360", 
    desc: "A Social casino game featuring classic games like poker, slots, and roulette in a 360-degree immersive environment. Players can challenge anybody globally in a mobile-optimized setting.", 
    desc1: "Social Casino", 
    desc2: "iOS, Android", 
    desc3: "Unity", 
    caseimg: "/common/casino-royale.webp", 
  }, 
  { 
    title: "E-Soccer Legends", 
    desc: "We focused on realistic ball physics and dynamic stadium atmospheres for this soccer game. Players can compete in real-time PvP matches, experiencing a realistic soccer experience, thanks to detailed animations and adaptable AI.", 
    desc1: "E-Football", 
    desc2: "iOS, Android, and PC", 
    desc3: "Unreal Engine 4", 
    caseimg: "/common/esoccer-legends.webp", 
  }
];

export default function CaseStudies() {
  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CaseStudiesdata.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pb-16" id="case-study">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Our Case Studies
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Behind every great game is a story of challenge, creativity, and collaboration. Discover the journey behind our most iconic creations.
          </p>
        </div>
          <div className="relative overflow-hidden">
           <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)`, }}>
            {CaseStudiesdata.map((item, i) => (
              <div key={i} className="w-full shrink-0">
                <div className="relative p-[20px] lg:p-[50px] m-0 after:content-[''] after:absolute after:left-[5px] after:top-0 after:w-[99%] after:h-[99%] after:bg-white/5 after:border after:border-white/30 after:rounded-[15px] after:pointer-events-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                    <div className="flex flex-col gap-1">
                      <div className="md:mb-4 mb-3">
                        <h3 className="text-[19px] leading-[26px] md:text-[24px] lg:text-[28px] md:leading-[38px] mb-4 font-bold uppercase text-[#ff8600]">{item.title}</h3>
                        <p className="text-[15px] lg:text-[16px] leading-[24px] mb-2 lg:mb-4 text-white">{item.desc}</p>
                      </div>
                      <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                        <span className="icon">
                          <Image src="/common/genre-icon.webp" alt="Genre" loading="lazy" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                        </span>
                        <span className="text-[#ff8600]">Genre:</span>
                        <span className="text-white">{item.desc1}</span>
                      </div>
                      <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                        <span className="icon">
                          <Image src="/common/platform-icon.webp" alt="Platform" loading="lazy" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                        </span>
                        <span className="text-[#ff8600]">Platform:</span>
                        <span className="text-white">{item.desc2}</span>
                      </div>
                      <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                        <span className="icon">
                          <Image src="/common/engine-icon.webp" alt="Engine" loading="lazy" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                        </span>
                        <span className="text-[#ff8600]">Engine:</span>
                        <span className="text-white">{item.desc3}</span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">
                        <Image src={item.caseimg} alt={item.title} width={500} height={350} loading="lazy" className="w-full h-auto rounded-[10px] border border-[#ebdddd78]" />
                      </div>  
                    </div>
                  </div>
                  <div className="col-span-12 my-4 text-center">
                    <Link href="/contact" target="_blank" className="relative z-[10] mt-[15px] inline-block p-[1px] bg-[#ff8600] hover:bg-white text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" aria-label="CONTACT US">
                      <span className="block w-full px-[15px] py-[2px] bg-[#ff8600] text-white font-medium transition-colors group-hover:bg-[#e67c03] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"> Contact Us </span>
                    </Link>
                  </div>                
                </div>
              </div>
            ))}
           </div>
           <div className="flex items-center justify-center gap-3 mt-6">
            {CaseStudiesdata.map((_, index) => (
              <button key={index} aria-label={`Go to slide ${index + 1}`} onClick={() => setCurrent(index)} className="flex h-8 w-8 items-center justify-center">
                <span className={`rounded-full transition-all ${ current === index ? "bg-[#ff8600] w-[30px] h-[3px]" : "bg-[#676E73] w-[10px] h-[3px]" }`} />
              </button>
            ))}
          </div>
          </div>
        </div>
    </section>
  );
}
