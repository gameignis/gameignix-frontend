"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReliableAgencydata = [
  { title: "Proven Industry Expertise", desc: "GameIgnix has demonstrated strong industry experience and technical expertise in game development, with a proven track record of delivering creative and high-quality gaming solutions across various genres and platforms." },
  { title: "Certified Developers", desc: "GameIgnix is home to a team of highly skilled and certified game developers, with recognized industry credentials and specialized expertise to guarantee your project benefits from the latest tools and technologies." },
  { title: "Long-Term Cooperation", desc: "We are committed to developing long-term, trusted relationships with our clients, based on ongoing support and a collaborative approach to ensuring their long-term success and growth." },
  { title: "Assured Quality", desc: "At GameIgnix, we are committed to delivering unwavering quality in every aspect of our game development process. We ensure that all projects meet the highest industry standards through rigorous testing, continuous improvements, and a commitment to excellence at every stage." },
  { title: "Client-Centric Approach", desc: "At GameIgnix, we put our clients at the center of everything we do. Our strong emphasis on personalized service and transparent communication ensures that we understand and meet our clients' exact needs, requirements, and aspirations throughout the development phase." }
];

export default function ReliableAgencySlider() {
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
            What Makes Us a Reliable Game Development Agency?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix is a trusted game development agency that blends creative excellence, industry knowledge, and technical expertise to 
            deliver engaging and scalable games across all platforms.
          </p>
        </div>

        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {ReliableAgencydata.map((item, i) => (
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
