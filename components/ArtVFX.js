"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../app/slick-theme.css";

const ArtVFXdata = [
  { title: "Particle Effects", desc: "We specialize in developing refined particle effects for visual effects such as flash, magic, explosions, and weather effects, optimized to enhance gameplay clarity and deliver a cinematic impact." },
  { title: "Environmental VFX", desc: "At our Game art studio, we create immersive and reactive environmental effects that dynamically respond to player actions and in-game events, enhancing immersion." },
  { title: "Gameplay and Combat VFX", desc: "Our team designs high-impact effects specifically for combat actions such as sword clashes, spell casts, power-ups, and more to elevate responsiveness and gameplay clarity." },
  { title: "Shader-Based VFX", desc: "We leverage node-based and code-driven approaches to create custom shaders that produce stylized and realistic effects optimized for both performance and visual fidelity." }
];

export default function ArtVFXSlider() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="incontent-slider cmslickwrap">
      <Slider {...settings}>
        {ArtVFXdata.map((item, i) => (
          <div key={i} className="px-[15px]">
            <div className="h-full border border-[#FC7400] rounded-[61px_8.71429px] p-[10px] my-4">
              <div className="bg-[rgba(51,51,51,0.5)] rounded-[52.2857px_8.71429px] min-h-[250px] px-5 py-[10px]">
                <h3 className="text-left text-[16px] leading-6 my-[1.2rem] text-[#FC7400] font-bold italic">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-6">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
