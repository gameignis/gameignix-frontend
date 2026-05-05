"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseWhiteLabelCasinodata = [
  { title: "Full Customization", desc: "GameIgnix empowers you to shape your casino exactly how you envision it. From user interface design to game selection and feature sets, every element is tailored to reflect your brand identity and meet your specific business goals." },
  { title: "Enterprise Security", desc: "Your platform is protected by enterprise-grade security systems that safeguard both player data and transactions. We use advanced encryption and fraud-prevention protocols to maintain trust and ensure compliance with international standards." },
  { title: "Collaborative Approach", desc: "We believe in building success together. Our development process is highly collaborative, keeping you involved and informed at every stage. Your feedback is valued and integrated seamlessly, ensuring the final product aligns with your vision." },
  { title: "Full Ownership", desc: "With GameIgnix, you retain full ownership of your brand, player base, and revenue streams. We give you complete operational and creative freedom, helping you build a truly independent and unique online casino." },
  { title: "Regulatory Guidance", desc: "Launching a casino comes with legal responsibilities, and we’re here to guide you. Our compliance experts support you in understanding and fulfilling regulatory requirements across jurisdictions, helping you enter new markets confidently." }, 
  { title: "Scalable Architecture", desc: "Our platform is built for growth. Whether you are starting small or planning for rapid expansion, the architecture supports scaling without performance compromise. Add new features, games, or traffic volume effortlessly as your business evolves." }
];

export default function WhyChooseWhiteLabelCasinoSlider() {
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
             Why Choose GameIgnix as Your White Label Casino Provider
          </h2>
          <p className="lead text-gray-400">
            At GameIgnix, we blend deep industry expertise with cutting-edge technology to help your online casino business stand out. 
            Our white label solutions are crafted to support long-term success, offering you a stable, secure, and scalable foundation. With 
            our team’s full-cycle support and market insight, you can launch your casino confidently and expand your brand with clarity and 
            control.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseWhiteLabelCasinodata.map((item, i) => (
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
