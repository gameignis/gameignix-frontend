"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PokerCloneScriptdata = [
  { title: "WSOP Poker", desc: "We help you replicate the thrill and prestige of the World Series of Poker with a feature-rich clone script, which includes leaderboards, integrated social features, and more." },
  { title: "PokerStars", desc: "Our PokerStars clone script offers a comprehensive solution for cash games and multi-table tournaments, ensuring a broad appeal to a diverse player community." },
  { title: "Zynga Poker", desc: "This is one of the most downloaded poker games in both Android & iOS. We offer you the Zynga Poker Clone, which focuses on engaging gameplay, daily bonuses, and more." },
  { title: "Pocket52 Poker", desc: "We offer a modern and user-friendly Pocket52 Poker Clone, featuring smooth gameplay and enhanced visuals, along with popular variants such as Texas Hold'em, Omaha, and over 15 other game options." },
  { title: "World Poker Club", desc: "We offer a World Poker Club clone featuring dynamic 3D graphics, expressive avatars, and in-game chat to provide a more engaging experience for players." }
];

export default function PokerCloneScriptSlider() {
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
    variableWidth: false,
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
    <section className="cmcontentsc">
      <div className="w-full px-4">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Custom Poker Game Clone Script for Quick Launch
          </h2>
          <p className="lead text-gray-400">
            For those seeking a white-label solution to launch a popular poker platform quickly, we also offer highly customizable poker clone scripts 
            tailored to your specific needs.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {PokerCloneScriptdata.map((item, i) => (
              <div key={i} className="px-2 content-bk">
                <div className="cm-gbx h-full">
                  <div className="cm-gbxin">
                    <h3 className="cm-hd4">{item.title}</h3>
                    <p className="para-cnt1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
