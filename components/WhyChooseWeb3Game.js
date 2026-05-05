"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseWeb3Gamedata = [
  { title: "Business Aligned Game Design", desc: "Our game design strategies are planned beyond gameplay; we build games that align with your revenue and engagement goals. Whether your goal is community growth, consistent revenue, or investor appeal, we create games that align with your business objectives." },
  { title: "Domain Focused Game Developers", desc: "Our cross-functional team combines gaming expertise with blockchain fluency. From level designers to smart contract auditors, we understand both the user experience and the technical foundations that underpin it. This results in games that are engaging, technically strong, and native to the Web3 ecosystem. " },
  { title: "Built with Security First", desc: "We take a proactive approach to security, implementing best security practices from smart contract audits to anti-exploit mechanisms for gameplay. Our Web3 game developers follow industry-standard security protocols to mitigate risks. Your game is protected from day one, giving you peace of mind." },
  { title: "Custom-Built Game Ecosystem", desc: "We craft unique gaming ecosystems that may include NFTs, DAOs, staking models, and asset ownership frameworks based on your vision. Each feature is built on purpose to enable a seamless and personalized player experience. Unique games need next-gen powerplay." },
  { title: "Efficient, Scalable Game Builds", desc: "We follow a structured development process that accelerates the time to market without compromising on flexibility or quality. We reduce development time and enable easy future upgrades by using modular architecture and reusable Web3 components." }, 
  { title: "Reliable Post Launch Services", desc: "At GameIgnix, our commitment to your game continues well beyond deployment. We provide ongoing post-launch support to ensure your game evolves in line with player expectations and market dynamics. This includes round-the-clock support, feature rollouts, bug fixing, performance monitoring, and analytics integration." }
];

export default function WhyChooseWeb3GameSlider() {
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
            Why Choose GameIgnix for Web3 Game Development?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix is the leading Web3 gaming development company, specializing in offering decentralized gaming experiences that merge creativity 
with blockchain precision. Our consultative approach ensures your game aligns with the business strategy, player expectations, and market 
trends.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseWeb3Gamedata.map((item, i) => (
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
