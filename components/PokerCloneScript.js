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
    <section className="pt-[2rem] md:pt-[3rem] pb-[3rem] md:pb-[6rem]">
      <div className="w-full px-4">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
             Custom Poker Game Clone Script for Quick Launch
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            For those seeking a white-label solution to launch a popular poker platform quickly, we also offer highly customizable poker clone scripts 
            tailored to your specific needs.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {PokerCloneScriptdata.map((item, i) => (
              <div key={i}>
                <div className="my-4 flex h-full md:min-h-[350px] flex-col justify-center rounded-[12px] p-[1px] bg-[linear-gradient(150deg,rgba(242,239,236,0.44)_0%,rgba(150,69,0,0.14)_100%)]">
                  <div className="flex h-full flex-1 flex-col justify-center rounded-[12px] p-3 lg:p-5 bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)]">
                    <h3 className="text-[17px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-semibold text-left mt-[6px] mb-[15px] lg:my-[18px] text-white">{item.title}</h3>
                    <p className="text-[13px] leading-[20px] lg:leading-[24px] lg:text-[16px] text-white mb-[1rem]">{item.desc}</p>
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
