"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtVFXdata = [
  { title: "Particle Effects", desc: "We specialize in developing refined particle effects for visual effects such as flash, magic, explosions, and weather effects, optimized to enhance gameplay clarity and deliver a cinematic impact." },
  { title: "Environmental VFX", desc: "At our Game art studio, we create immersive and reactive environmental effects that dynamically respond to player actions and in-game events, enhancing immersion." },
  { title: "Gameplay and Combat VFX", desc: "Our team designs high-impact effects specifically for combat actions such as sword clashes, spell casts, power-ups, and more to elevate responsiveness and gameplay clarity." },
  { title: "Shader-Based VFX", desc: "We leverage node-based and code-driven approaches to create custom shaders that produce stylized and realistic effects optimized for both performance and visual fidelity." }
];

export default function ArtVFXSlider() {
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
        {ArtVFXdata.map((item, i) => (
          <div key={i} className="px-2 incont-bk">
            <div className="serv-rbx h-full">
              <div className="serv-rinbx">
                <h3 className="cm-hd4 text-orange font-bold italic">{item.title}</h3>
                <p className="para-cnt1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
