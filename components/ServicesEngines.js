"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesEngines() {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFlip = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="pt-6 md:py-10">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full pb-[2rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
             Game Engines We Use
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            At GameIgnix, we assess your game’s requirements and employ the strengths of powerful game engines to bring the best results in terms of 
            performance, scalability, and player experience from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          <div className="flex">
            <div onClick={() => handleFlip(0)} className={`flip-card cursor-pointer ${ activeIndex === 0 ? "flipped" : "" }`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex-1 overflow-hidden w-full h-full relative">
                    <Image src="/common/game-develop/unity-engine.webp" alt="Unity Engine" width={600} height={600} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px]">
                    <Image src="/common/unity-logo.webp" alt="Unity Logo" width={290} height={100} loading="lazy" className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="absolute bottom-8 md:bottom-4 block text-center text-white no-underline" href="#" aria-label="Read more">
                    Read more 
                    <i className="inline-block ml-2 border-r-2 border-b-2 border-current w-[7px] h-[7px] -rotate-45"></i>
                  </Link>
                </div>
                <div className="flip-card-back">
                  <h3 className="text-center text-[19px] lg:text-[20px] leading-[26px] md:leading-[28px] my-[1.8rem] font-semibold text-white">Unity</h3>
                  <p className="text-[15px] lg:text-[16px] leading-[24px] mb-3 text-white text-center">
                    Highly versatile and widely adopted, Unity is our go-to engine for creating everything from 2D/3D games to AR/VR experiences, as well as 
                    multiplayer hits. Our team utilizes Unity’s comprehensive feature set, including its cross-platform capabilities, powerful asset integration, 
                    and physics simulation, to bring an extraordinary impact to the games we work on.
                  </p>
                  <Link href="/services/unity-game-development" className="relative z-[10] mt-[15px] inline-block p-[1px] bg-[#ff8600] hover:bg-white text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" target="_blank" aria-label="Learn more about Unity Game Development">
                    <span className="block w-full px-[15px] py-[2px] bg-[#ff8600] text-white font-medium transition-colors group-hover:bg-[#e67c03] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]">See More 
                      <span className="sr-only"> about Unity Game Development </span>
                    </span>
                  </Link>
                </div>
            </div>
            </div>
          </div>
          <div className="flex">
            <div onClick={() => handleFlip(1)} className={`flip-card cursor-pointer ${ activeIndex === 1 ? "flipped" : "" }`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex-1 overflow-hidden w-full h-full relative">
                    <Image src="/common/game-develop/unreal-engine.webp" alt="Unreal Engine" width={600} height={600} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px]">
                    <Image src="/common/unreal-logo.webp" alt="Unreal Logo" width={120} height={50} loading="lazy" className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="absolute bottom-8 md:bottom-4 block text-center text-white no-underline" href="#" aria-label="Read more">
                    Read more 
                    <i className="inline-block ml-2 border-r-2 border-b-2 border-current w-[7px] h-[7px] -rotate-45"></i>
                  </Link>
                </div>
                <div className="flip-card-back">
                  <h3 className="text-center text-[19px] lg:text-[20px] leading-[26px] md:leading-[28px] my-[1.8rem] font-semibold text-white">Unreal</h3>
                  <p className="text-[15px] lg:text-[16px] leading-[24px] mb-3 text-white text-center">
                    We leverage Unreal Engine’s advanced photorealistic rendering, blueprint system, and robust multiplayer framework to create 
                    immersive games for a diverse range of platforms. When it comes to cinematic visuals and complex mechanics, Unreal helps us 
                    raise the bar.
                  </p>
                  <Link href="services/unreal-engine-game-development" className="relative z-[10] mt-[15px] inline-block p-[1px] bg-[#ff8600] hover:bg-white text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" target="_blank" aria-label="Learn more about Unreal Engine Game Development">
                    <span className="block w-full px-[15px] py-[2px] bg-[#ff8600] text-white font-medium transition-colors group-hover:bg-[#e67c03] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]">See More 
                      <span className="sr-only"> about Unreal Engine Game Development </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
