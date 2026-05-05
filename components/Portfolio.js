"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolioData = [
  { portimg: "/common/zero-circle.webp", title: "Zero Circle", desc: "Battle Royale Game" },
  { portimg: "/common/car-racing.webp", title: "SpeedDrift: Overdrive", desc: "Intensive Car Racing" },
  { portimg: "/common/lost-horizon.webp", title: "Legends of the Lost Horizon", desc: "Multiplayer Adventure" },
  { portimg: "/common/Neokick.webp", title: "Neokick", desc: "eFootball" },
  { portimg: "/common/iron-vow.webp", title: "Iron Vow", desc: "Fighting Game" },
  { portimg: "/common/chronicles-of-ather.webp", title: "Chronicles of Aether", desc: "RPG" },
  { portimg: "/common/wicketcraft.webp", title: "Wicketcraft", desc: "Fantasy Cricket" },
  { portimg: "/common/coinquest-rise.webp", title: "CoinQuest: Rise of Guilds", desc: "Play to Earn" },
  { portimg: "/common/street-rage.webp", title: "Street Rage", desc: "Street Fighter" },
  { portimg: "/common/cinder-clash.webp", title: "Cinder Clash", desc: "Action Combat" },
  { portimg: "/common/royal-spinhouse.webp", title: "Royal Spinhouse", desc: "Social Casino" },
  { portimg: "/common/eclipsia.webp", title: "Eclipsia: Realms Unbound", desc: "MMORPG" },
];
export default function Portfolio() {
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
    centerMode: true,
    variableWidth: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const mobileSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (    
      <div className="slickwrapper cmslickwrap">
        <Slider
        key={isMobile ? "mobile" : "desktop"}
        {...(isMobile ? mobileSettings : desktopSettings)}
        >
          {portfolioData.map((item, i) => (
            <div key={i} style={{ width: 320 }} className="px-3">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={item.portimg}
                  alt={item.title}
                  width={320}
                  height={180}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70">
                  <p className="text-white font-bold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
}
