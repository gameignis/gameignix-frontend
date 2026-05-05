"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtAssetsdata = [
  { title: "Characters", desc: "We design game-ready characters with distinct silhouettes, strong personality traits, and optimized geometry that considers rigging and animation constraints from the outset." },
  { title: "Environments", desc: "We produce modular environments, interactive world elements, and detailed background scenery with accurate scale and integration capabilities." },
  { title: "Props and Items", desc: "We create a wide variety of in-game items ranging from decorative props to interactable items with clean meshes, efficient UVs, and PBR texturing suited to your game’s specs." },
  { title: "Weapons", desc: "We create highly detailed, animation-friendly weapon assets, including swords, rifles, guns, and other melee equipment, suitable for use in a wide range of games." }
];

export default function ArtAssetsSlider() {
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
        {ArtAssetsdata.map((item, i) => (
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
