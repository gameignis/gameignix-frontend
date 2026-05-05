"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseGamedevServicesdata = [
  { title: "Skilled, Cross-Functional Team", desc: "At GameIgnix, game development is a true collaboration of cross-functional specialists. Our developers bring a specialized skill set fused with creativity and technical mastery to make the game excel in every dimension." },
  { title: "Comprehensive Game Development Services", desc: "We assemble a dedicated team relevant to the project’s genre, art style, and target platform. The utmost importance is given to maintaining quality and ensuring on-time delivery, guiding the project from ideation through production to launch." },
  { title: "Tech-Driven Innovation", desc: "We develop games using the latest game engines and tools, along with emerging technologies, ensuring that the game is visually impressive while also being ready for future updates and expansions." },
  { title: "Cross-Platform Game Development", desc: "Our development pipeline includes platform-specific optimizations and testing strategies to make the game deliver consistent performance across various platforms, ensuring it feels native everywhere." },
  { title: "Milestone-Based Delivery", desc: "We structure each project around defined milestones with clear deliverables and timelines. Defining the development in unambiguous and manageable milestones grants ample points for your feedback and corrections." }, 
  { title: "Long-Term Collaboration", desc: "We stand beside you with long-term support, timely updates, content expansion, and live maintenance. We can be your strategic partner, invested in your game’s sustained success and growth well beyond its debut." }
];

export default function WhyChooseGamedevServicesSlider() {
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
             Why Choose GameIgnix for Game Development Services?
          </h2>
          <p className="lead text-gray-400">
            Driven by innovation and powered by experience, GameIgnix is a reliable provider of game development solutions, bringing technical 
            mastery, creative insight, and long-term value to every game we build. 
          </p>
        </div>

        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseGamedevServicesdata.map((item, i) => (
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
