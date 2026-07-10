"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "../app/slick-theme.css";

const CasinoPortfolioData = [
  { portimg: "/common/royal-spinhouse.webp", title: "Royal Spinhouse", desc: "Social Casino" },
  { portimg: "/common/zero-circle.webp", title: "Zero Circle", desc: "Battle Royale Game" },
  { portimg: "/common/pixel-fortune.webp", title: "Pixel Fortune", desc: "Slot" },
  { portimg: "/common/lost-horizon.webp", title: "Legends of the Lost Horizon", desc: "Multiplayer Adventure" },
  { portimg: "/common/casino-royale-poker.webp", title: "Casino Royale Poker", desc: "Poker" },
  { portimg: "/common/car-racing.webp", title: "SpeedDrift: Overdrive", desc: "Intensive Car Racing" },
  { portimg: "/common/Neokick.webp", title: "Neokick", desc: "eFootball" },
  { portimg: "/common/chronicles-of-ather.webp", title: "Chronicles of Aether", desc: "RPG" },
  { portimg: "/common/iron-vow.webp", title: "Iron Vow", desc: "Fighting Game" },
  { portimg: "/common/Wicketcraft.webp", title: "Wicketcraft", desc: "Fantasy Cricket" },
  { portimg: "/common/coinquest-rise.webp", title: "CoinQuest: Rise of Guilds", desc: "Play to Earn" },
  { portimg: "/common/cinder-clash.webp", title: "Cinder Clash", desc: "Action Combat" },
];

export default function CasinoPortfolio() {

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
    centerMode: true,
    centerPadding: "45px",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (    
    <div className="slickwrapper cmslickwrap">
      <Slider className="portfolioin-slider" key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
        {CasinoPortfolioData.map((item, i) => (
          <div key={i} className="portfolio-card px-3 relative h-[420px] rounded-[20px] overflow-hidden">
            <div className="relative h-full rounded-[20px] overflow-hidden">
              <Image src={item.portimg} alt={item.title} width={320} height={420} loading="lazy" className="w-full h-full object-cover rounded-[20px]" />
              <div className="absolute inset-0 bg-black/40 z-[1] rounded-[20px]" />
              <div className="absolute left-0 z-10 flex flex-col bottom-0 right-0 p-[10px_60px_20px_25px]">
                <p className="text-white font-semibold text-[15px] leading-[24px] font-orbitron my-[4px] text-left">
                  {item.title}
                </p>
                <p className="text-white text-[13px] leading-[16px] m-0">
                  {item.desc}
                </p>
                <span className="arrow2 cursor-pointer"></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
