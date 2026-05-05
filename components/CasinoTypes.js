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
    <section className="cmcontentsc">
      <div className="w-full px-4">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Casino Games We Develop
          </h2>
          <p className="lead text-gray-400">
            GameIgnix offers a diverse range of casino games tailored to meet various business needs and market trends. From traditional slot 
            machines to contemporary poker, our team of experts develops customized games that apply the latest technology, game logic, and 
            monetization models. Here's a closer look at the popular casino game types we develop:
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {CasinoTypesdata.map((item, i) => (
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
