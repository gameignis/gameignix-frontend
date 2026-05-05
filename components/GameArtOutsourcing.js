"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GameArtOutsourcingdata = [
  { title: "Creative Vision With Technical Mastery", desc: "We blend creative vision with technical mastery to produce game art that is both visually impressive and technically sound. Every asset is designed using emerging technologies to maximize performance and integration across platforms." },
  { title: "Comprehensive Art Services", desc: "We offer a full spectrum of game art services under one roof, which in turn prevents clients from having to approach multiple vendors and expedites the production cycle as a result. Our company manages the pipeline from concept art to implementation, ensuring that every phase of work meets the quality standards." },
  { title: "Specialized Game Art Team", desc: "We have a specialized team of art directors, designers, technical artists, animators, and 2D/3D artists, providing your project with the exact expertise it demands. At GameIgnix, clients get access to top-tier talents in multiple disciplines." },
  { title: "Tailored Art Styles", desc: "Having mostly tested and experimented with various game projects of different genres and platforms has allowed our artists to work in diverse art styles, tailored to the needs of each game." },
  { title: "High-Quality Visuals", desc: "Whether your game is built on any genre or platform, we specialize in creating high-quality visuals using various advanced techniques, ranging from realistic 3D modeling to animation and VFX. We ensure the quality remains the same across all devices." }, 
  { title: "Collaboration At Every Stage", desc: "We act as an extension of your production team, including you in the process from the very beginning. Through structured feedback loops and recurring check-ins, we will consistently provide you with updates to maintain complete transparency from day one." }
];

export default function GameArtOutsourcingSlider() {
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
            Why Choose GameIgnix As Your Game Art Outsourcing Studio?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix is an industry-leading game art outsourcing studio known for delivering best-in-class game art that drives a game’s success. 
            Our game art services are tailored to our client’s requirements and expectations, making us a strategic partner to forward-thinking game 
            publishers in the industry.
          </p>
        </div>

        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {GameArtOutsourcingdata.map((item, i) => (
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
