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
    <section className="pt-[2rem] md:pt-[3rem] pb-[3rem] md:pb-[6rem]">
      <div className="w-full px-4">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
             Why Choose GameIgnix for Slot Game Development?
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Choosing GameIgnix means partnering with a slot game development studio dedicated to delivering games that excel in creativity, 
            functionality, and market performance. Our expertise ensures your game stands out while meeting industry standards and player 
            expectations.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {WhyChooseSlotGamedata.map((item, i) => (
              <div key={i}>
                <div className="my-4 flex h-full md:min-h-[350px] flex-col justify-center rounded-[12px] p-[1px] bg-[linear-gradient(150deg,rgba(242,239,236,0.44)_0%,rgba(150,69,0,0.14)_100%)]">
                  <div className="flex h-full flex-1 flex-col justify-center rounded-[12px] p-3 lg:p-5 bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)]">
                    <h3 className="text-[17px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-semibold text-left mt-[6px] mb-[15px] lg:my-[18px] text-white">{item.title}</h3>
                    <p className="text-[13px] leading-[20px] lg:leading-[24px] lg:text-[16px] text-white mb-[1rem]">{item.desc}</p>
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
