"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlotGameFeaturesdata = [
  { title: "Custom Paylines & Reels", desc: "We create unique reel structures and custom paylines that complement your chosen theme and game mechanics. This allows for creative gameplay variations, making your slot stand out in a competitive market." },
  { title: "Multi-Language Support", desc: "Our slot games include multi-language functionality, enabling players from different regions to enjoy the game in their preferred language. This ensures a more personalized and inclusive gaming experience." },
  { title: "Cross-Platform Compatibility", desc: "Every game we develop is optimized for smooth performance on desktop, mobile, and tablet devices. Players can switch between platforms without losing quality, speed, or progress." },
  { title: "Bonus Rounds & Free Spins", desc: "We design interactive bonus rounds, free spins, and mini-games that keep players engaged for longer. These features enhance excitement and increase replayability, boosting overall retention rates." },
  { title: "Progressive Jackpots", desc: "Our progressive jackpot systems allow prize pools to grow with each spin until a lucky player wins. This feature drives anticipation and attracts a broader audience seeking big wins." }, 
  { title: "Secure Payment Gateway Integration", desc: "We integrate safe and reliable payment gateways for real-money gameplay. All transactions are encrypted and follow strict industry regulations to ensure security and trust." }, 
  { title: "RNG Certification Ready", desc: "Our games are built with certified Random Number Generators, guaranteeing fairness and unpredictability in every spin. This helps maintain player trust and meet licensing requirements." }, 
  { title: "Advanced Analytics for Operators", desc: "We provide built-in analytics tools that give operators valuable insights into player behavior, revenue trends, and game performance. These metrics help in making data-driven improvements and marketing strategies." }, 
];

export default function SlotGameFeaturesSlider() {
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
             Features of Our Slot Games
          </h2>
          <p className="lead text-gray-400">
            Our slot games are designed with advanced features that not only engage and entertain players but also help operators maximize revenue 
            and long-term retention. Every feature is built with precision to enhance gameplay, accessibility, and profitability.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {SlotGameFeaturesdata.map((item, i) => (
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
