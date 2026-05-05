"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseBlockchainGamedata = [
  { title: "Affordable Pricing", desc: "We are known for our affordable blockchain game development solutions that don't compromise your budget. Our transparent pricing models and agile development processes ensure you receive the best value." },
  { title: "Industry Best Experts", desc: "Our team of seasoned blockchain architects has 5+ years of hands-on experience in blockchain and Web3. This expertise will ensure your game is technologically sound and also give an immersive gaming experience." },
  { title: "Transparent Solutions", desc: "We offer fully transparent development processes and clear communication of project progress throughout the project lifecycle. This ensures you have complete visibility and confidence in every step of your game's creation." },
  { title: "Customizable End-to-End Services", desc: "From initial game concept planning to deployment and post-launch maintenance, we provide fully customizable, end-to-end development services based on the package you choose for your blockchain game project." },
  { title: "Multi-Device Game Development", desc: "We help you to reach a broader audience by offering your blockchain game across various platforms. Our experts specialize in developing games for multiple devices, including web, PC, and mobile, to reach a broad audience." }, 
  { title: "Post-Launch Support & Maintenance", desc: "Our commitment to your project doesn't end after it's launched; we provide comprehensive post-launch support to ensure that your game is free of bugs & lags, which can affect gameplay." }
];

export default function WhyChooseBlockchainGameSlider() {
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
             Why Choose GameIgnix for Blockchain Game Development?
          </h2>
          <p className="lead text-gray-400">
            As a leading Blockchain gaming development company, we have a talented team of game developers and blockchain experts with 
            expertise in decentralized gaming. Choosing us will give you the distinct advantage of ensuring your project not only launches 
            successfully but thrives in the decentralized gaming landscape.
          </p>
        </div>

        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseBlockchainGamedata.map((item, i) => (
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
