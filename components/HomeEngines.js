"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeEngines() {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFlip = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="enginesc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Engines We Are Experts In
          </h2>
          <p className="lead text-gray-400">
            Our team at GameIgnix possesses hands-on mastery of industry-leading engines, including Unity and Unreal, utilizing
            each to its full potential in our games. We select the right tool and maximize its capabilities to meet the creative
            and technical requirements of every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div onClick={() => handleFlip(0)} className={`flip-card cursor-pointer ${ activeIndex === 0 ? "flipped" : "" }`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-lgim relative">
                    <Image src="/common/unity-engine.webp" alt="Unity Engine" width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <div className="flip-smim">
                    <Image src="/common/unity-logo.webp" alt="Unity Logo" width={290} height={100} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="linktx1" href="#" aria-label="Read more">Read more <i className="arr"></i></Link>
                </div>
                <div className="flip-card-back">
                  <p className="cm-hd4">Unity</p>
                  <p className="para-cnt1 mb-3">
                    With extensive knowledge of the Unity Engine, our team's experts have successfully employed it,
                    demonstrating its beneficial impact on our diverse game projects, which span various genres, styles,
                    and platforms, yielding truly dynamic results.
                  </p>
                  <Link href="services/unity-game-development" className="cm-btn1" target="_blank" aria-label="See more about Unity Game Development">
                    <span>See More</span>
                  </Link>
                </div>
            </div>
            </div>
          </div>
          <div className="flex">
            <div onClick={() => handleFlip(1)} className={`flip-card cursor-pointer ${ activeIndex === 1 ? "flipped" : "" }`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-lgim relative">
                    <Image src="/common/unreal-engine.webp" alt="Unreal Engine" width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <div className="flip-smim">
                    <Image src="/common/unreal-logo.webp" alt="Unreal Logo" width={120} height={50} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="linktx1" href="#" aria-label="Read more">Read more <i className="arr"></i></Link>
                </div>
                <div className="flip-card-back">
                  <p className="cm-hd4">Unreal Engine</p>
                  <p className="para-cnt1 mb-3">
                    Having mastered everything Unreal Engine has to offer, from cinematic-quality graphics to advanced
                    physics, our team delivers incredibly versatile games, ranging from 2D mobile hits to 3D VR experiences.
                  </p>
                  <Link href="services/unreal-engine-game-development" className="cm-btn1" target="_blank" aria-label="See more about Unreal Engine Game Development">
                    <span>See More</span>
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
