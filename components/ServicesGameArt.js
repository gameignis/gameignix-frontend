"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesGameArtdata = [
  { title: "Concept Art", desc: "We create meticulously crafted concept art, utilizing high-quality sketches that detail colors, poses, gestures, and looks to provide a comprehensive view of all possible game elements." },
  { title: "Game Animation", desc: "We blur the line between reality and imagination through meticulously crafted animations, ranging from smooth character movements to dynamic in-game actions, with a focus on achieving maximum realism and interactivity." },
  { title: "3D Modeling and Texturing", desc: "We create highly realistic 3D models for every asset, from characters and props to environments, utilizing advanced techniques such as photogrammetry, digital sculpting, and NURBS, making games visually rich." },
  { title: "Game Environment", desc: "We possess strong expertise in designing stunning and photorealistic 2D/3D environments in a variety of styles, focusing on aesthetics, architecture, and the game’s lore." },
  { title: "Game Character", desc: "We develop unique and expressive characters with lifelike animations and personalities, utilizing character modeling techniques that emphasize artistic, technical, and narrative elements." }
];

export default function ServicesGameArtSlider() {
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
        {ServicesGameArtdata.map((item, i) => (
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
