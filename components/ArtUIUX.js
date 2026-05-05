"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtUIUXdata = [
  { title: "Game Interface Design", desc: "We create visually coherent and highly functional interfaces for in-game elements, such as mini-maps, inventory panels, and dialogue windows, to facilitate gameplay without overpowering players." },
  { title: "HUDs", desc: "We design functional and straightforward Heads-Up Displays by carefully placing timers, maps, and health so that they remain accessible without distracting the player." },
  { title: "Iconography and Menu Art", desc: "We craft custom icons, buttons, and other menu elements that are aesthetically cohesive with the game’s visual style and highly functional across all device resolutions." },
  { title: "Interactive UI Mockups", desc: "We specialize in creating interactive UI mockups and prototypes that simulate real games’ interactions to validate functionality and visual flow." }
];

export default function ArtUIUXSlider() {
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
        {ArtUIUXdata.map((item, i) => (
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
