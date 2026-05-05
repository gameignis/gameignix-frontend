"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtTexturingdata = [
  { title: "UV Mapping and Baking", desc: "Our team utilizes the most effective UV layout methods and precisely manages normal, ambient occlusion, and curvature baking to ensure optimal texture usage and surface detailing." },
  { title: "High-Poly and Low-Poly Modeling", desc: "Specializing in both high-poly sculpts and optimized low-poly versions, we deliver assets with clean topology tailored for sculpting, animation, and integration." },
  { title: "PBR Texturing", desc: "Using Physically Based Rendering (PBR) texturing, we craft lifelike surface textures that behave realistically under various lighting conditions." },
  { title: "Hard Surface Modeling", desc: "We specialize in hard-surface modeling, crafting a wide variety of game assets with precision, durability, and clean edge flow to match the functional design of the game." }, 
  { title: "Retopology and LODs", desc: "We perform efficient retopology to convert high-poly meshes into animation-friendly models suitable for production. We also create a Level of Detail (LOD) to ensure consistent performance across hardware tiers." }
];

export default function ArtTexturingSlider() {
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
        {ArtTexturingdata.map((item, i) => (
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
