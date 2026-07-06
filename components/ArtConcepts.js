"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtConceptsdata = [
  { title: "Character Concepts", desc: "We develop narratively and technically grounded characters with strong silhouettes, costume variations, poses, facial expressions, and accessories, tailored to their respective gameplay roles. " },
  { title: "Environment Concepts", desc: "We sketch environment concepts with detailed layout compositions, architectural designs, lighting studies, and mood boards to ensure every setting supports exploration." },
  { title: "Asset Sketches", desc: "We craft functional sketches for props, items, weapons, and vehicles used in games to support efficient modeling and texturing in asset production. " },
  { title: "UI/UX Concepts", desc: "We deliver high-level visual drafts for interfaces, including menu flows, screen layouts, and HUD arrangements, as a visual reference to build the interface around seamless navigation." },
  { title: "Storyboards", desc: "We storyboard critical sequences and in-game interactions with precise timing to ensure visual pacing, narrative flow, and seamless player interactions, particularly in cutscenes and in-game dialogues." }
];

export default function ArtConceptsSlider() {
  const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    useEffect(() => {
      const checkScreen = () => setIsMobile(window.innerWidth <= 768);
      checkScreen(); 
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }, []);
    if (!mounted) return null;
      
    const desktopSettings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  
    const mobileSettings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className="incontent-slider cmslickwrap">
       <Slider
        key={isMobile ? "mobile" : "desktop"}
        {...(isMobile ? mobileSettings : desktopSettings)}
        >
        {ArtConceptsdata.map((item, i) => (
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
