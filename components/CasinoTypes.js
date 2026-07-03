"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CasinoTypesdata = [
  { title: "Poker", desc: "From Texas Hold'em to Omaha, we create multiplayer and tournament-style poker games with real-time gameplay, secure algorithms, and customizable features. All the visuals, tables, and lobby designs are customizable to match your brand." },
  { title: "Roulette", desc: "Our roulette games create the excitement of the wheel spinning with realistic physics, visually engaging interfaces, and support for American, European, and French variants. Adaptive game UI and rich analytics drive maximum player retention." },
  { title: "Blackjack", desc: "We create visually stunning blackjack games that mimic live betting experiences, offering fast-paced rounds with hit, stand, split, and double-down options. Our games incorporate features such as live dealers, AI-powered assistants, and multi-platform compatibility." },
  { title: "Craps", desc: "GameIgnix brings the thrill of the craps table to digital platforms with realistic dice mechanics, multiplayer features, and smooth gameplay. Adjustable RTP settings, multiplayer voice, and emoji reactions simulate the energy of a live table." },
  { title: "Baccarat", desc: "Experience the elegance of Baccarat with our feature-rich games offering banker/player bets, side bets, quick reads, and taps. Tie and side-bet features are configurable, and low-latency networking supports both single-player and community tables." }, 
  { title: "Bingo", desc: "We create both classic and trendy modern games with interactive themes, live chat features, and reward programs. Strong back-office products monitor cohorts, prize pools, power-ups, collectibles, and daily missions, boosting player engagement." }, 
  { title: "Keno", desc: "Our Keno games offer rapid gameplay, flexible number selection, and animated draws, making them ideal for both casual and high-frequency gaming audiences. Players view live feeds or skip to results for instant feedback. Variable pay tables let you fine‑tune payout curves." }, 
  { title: "Slot", desc: "We design graphically rich slot games with new themes, new math models, bonus games, progressive jackpots, and smooth animations. Various betting modes and modular reel engines feature classic, cluster, and megaways mechanics." }, 
  { title: "Rummy", desc: "GameIgnix offers both traditional and modern rummy game variants, featuring seamless multiplayer integration, secure gameplay, and real-time matchmaking. Anti‑fraud systems and wallet integrations ensure secure, scalable, and seamless operations." }, 
];

export default function CasinoTypesSlider() {
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
             Casino Games We Develop
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            GameIgnix offers a diverse range of casino games tailored to meet various business needs and market trends. From traditional slot 
            machines to contemporary poker, our team of experts develops customized games that apply the latest technology, game logic, and 
            monetization models. Here's a closer look at the popular casino game types we develop:
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>        
            {CasinoTypesdata.map((item, i) => (
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
