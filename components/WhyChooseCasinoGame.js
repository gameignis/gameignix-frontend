"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseCasinoGamedata = [
  { title: "Proven Experience & Market Success", desc: "With over 50+ successful casino game launches and partnerships with global iGaming brands, we have a proven track record of delivering casino projects on time that drive revenue growth and player retention." },
  { title: "Custom-Built Scalable Solutions", desc: "We develop fully customizable and scalable casino games for every client using modern technologies and engines such as Unity and Unreal. Our solutions are highly adaptable and strive to keep pace with evolving player demands and platforms." },
  { title: "Deep Expertise in Casino Gaming", desc: "Years of experience in iGaming and real-money gaming have provided us with a thorough understanding of regulatory requirements and market trends, which we use to produce secure and engaging casino games that deliver maximum ROI." },
  { title: "Security and Fairness First", desc: "Player trust is everything in iGaming. Our games use certified RNGs, end-to-end encryption, anti-fraud systems, and blockchain technologies to provide maximum levels of fairness, transparency, and security at all times." },
  { title: "Comprehensive Post-Launch Support", desc: "Our relationship doesn’t end after the launch. We offer continuous post-launch support, which includes regular game updates, A/B testing, and marketing strategy guidance, to ensure your game's long-term success." }
];

export default function WhyChooseCasinoGameSlider() {
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
             Why Choose GameIgnix for Casino Game Development?
          </h2>
          <p className="lead text-gray-400">
            Partner with GameIgnix, a trusted casino game development studio backed by years of service and innovation, to build 
            high-performance games that engage players and generate revenues. We have partnered with startups, studios, and enterprises to 
            successfully create casino game platforms, ranging from slot-based games to multiplayer poker rooms.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseCasinoGamedata.map((item, i) => (
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
