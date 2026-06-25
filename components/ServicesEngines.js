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
    <section className="enginesc">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
             Game Engines We Use
          </h2>
          <p className="lead text-gray-400">
            At GameIgnix, we assess your game’s requirements and employ the strengths of powerful game engines to bring the best results in terms of 
            performance, scalability, and player experience from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div onClick={() => handleFlip(0)} className={`flip-card cursor-pointer ${ activeIndex === 0 ? "flipped" : "" }`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-lgim relative">
                    <Image src="/common/game-develop/unity-engine.webp" alt="Unity Engine" width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <div className="flip-smim">
                    <Image src="/common/unity-logo.webp" alt="Unity Logo" width={290} height={100} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="linktx1" href="#" aria-label="Read more">Read more <i className="arr"></i></Link>
                </div>
                <div className="flip-card-back">
                  <p className="cm-hd4">Unity</p>
                  <p className="para-cnt1 mb-3">
                    Highly versatile and widely adopted, Unity is our go-to engine for creating everything from 2D/3D games to AR/VR experiences, as well as 
                    multiplayer hits. Our team utilizes Unity’s comprehensive feature set, including its cross-platform capabilities, powerful asset integration, 
                    and physics simulation, to bring an extraordinary impact to the games we work on.
                  </p>
                  <Link href="/services/unity-game-development" className="cm-btn1" target="_blank" aria-label="See more about Unity Game Development">
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
                    <Image src="/common/game-develop/unreal-engine.webp" alt="Unreal Engine" width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <div className="flip-smim">
                    <Image src="/common/unreal-logo.webp" alt="Unreal Logo" width={120} height={50} className="max-w-full h-auto flex-shrink-0" />
                  </div>
                  <Link className="linktx1" href="#" aria-label="Read more">Read more <i className="arr"></i></Link>
                </div>
                <div className="flip-card-back">
                  <p className="cm-hd4">Unreal</p>
                  <p className="para-cnt1 mb-3">
                    We leverage Unreal Engine’s advanced photorealistic rendering, blueprint system, and robust multiplayer framework to create 
                    immersive games for a diverse range of platforms. When it comes to cinematic visuals and complex mechanics, Unreal helps us 
                    raise the bar.
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
