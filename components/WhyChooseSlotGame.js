"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseSlotGamedata = [
  { title: "Proven Expertise", desc: "With years of hands-on experience in slot game development, we have successfully delivered high-performing titles across multiple markets and platforms. Our portfolio reflects consistent quality and innovation tailored to diverse audiences." },
  { title: "Creative Excellence", desc: "We merge unique artistic vision with engaging gameplay mechanics to craft slot games that captivate players. From stunning visuals to immersive themes, our creative approach ensures your game leaves a lasting impression." },
  { title: "Regulatory Compliance", desc: "Our development process adheres to global gaming laws and regulations, ensuring every game meets RNG certification requirements. This commitment guarantees fairness, transparency, and readiness for multiple jurisdictions." },
  { title: "Player-Centric Design", desc: "We design with the player in mind, incorporating features, mechanics, and reward systems that encourage long-term engagement. Every aspect is tested to maximize entertainment value and retention rates." },
  { title: "Cutting-Edge Tech", desc: "Our team leverages the latest game engines, frameworks, and development tools to deliver top-notch performance and scalability. This ensures smooth gameplay across all devices and platforms." }, 
  { title: "Transparent Process", desc: "We maintain open communication throughout development, providing regular progress updates, milestone tracking, and clear timelines. You stay informed at every stage with no hidden surprises." }, 
  { title: "Long-Term Partnership", desc: "Our support extends beyond launch, offering updates, LiveOps, and performance optimizations. This ensures your slot game stays competitive and profitable in an ever-evolving gaming market." }
];

export default function WhyChooseSlotGameSlider() {
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
             Why Choose GameIgnix for Slot Game Development?
          </h2>
          <p className="lead text-gray-400">
            Choosing GameIgnix means partnering with a slot game development studio dedicated to delivering games that excel in creativity, 
            functionality, and market performance. Our expertise ensures your game stands out while meeting industry standards and player 
            expectations.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseSlotGamedata.map((item, i) => (
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
