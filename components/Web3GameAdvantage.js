"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Web3GameAdvantagedata = [
  { title: "True Ownership", desc: "Web3 allows players to own in-game assets as NFTs, giving them complete control over their digital assets. Businesses can benefit from increased user retention and create a secondary market for trading and monetization." },
  { title: "Interoperable", desc: "Web3 assets can be used across multiple games, which is not possible in standard gaming startups. This enables brands to develop platform interactions while also opening up opportunities for collaborations and cross-promotion." },
  { title: "Built for ROI", desc: "Web3 offers multiple monetization channels, including token staking, NFT rentals, and royalty-based sales. It enables developers and businesses to generate continuous revenue and shift from one-time sales to sustained value creation." },
  { title: "Independent", desc: "Developers can publish Web3 games directly, skipping app store costs and limitations. This allows direct monetization through crypto wallets and marketplaces. It also fastens launch and revenue optimization." },
  { title: "Transparency", desc: "Smart contracts help automate core game functions, such as rewards, staking, and governance. This increases player trust in the competitive and financial aspects of gaming. Transparency also helps simplify auditing and compliance. " }, 
  { title: "User Retention", desc: "Unlike traditional games, where assets often lose relevance with updates, blockchain assets can retain their value and evolve. This sustainability draws in collectors and gamers while helping businesses drive long-term engagement." }
];

export default function Web3GameAdvantageSlider() {
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
             Advantages of Web3 Game Development
          </h2>
          <p className="lead text-gray-400">
            Web3 is transforming gaming by turning players into investors and assets into tradable commodities. This shift unlocks powerful benefits for 
both developers and brands. Here are some strategic advantages for forward-looking businesses.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {Web3GameAdvantagedata.map((item, i) => (
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
