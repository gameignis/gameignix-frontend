"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUnityGamedata = [
  { title: "Developer-Friendly with Robust Tools", desc: "Unity has an intuitive and simple-to-use environment for creating games. Features such as visual scripting tools put even very complex tasks within easy reach of almost every game developer, allowing them to devote more time to creative work and less time to writing code." },
  { title: "Real-Time Rendering and Prototyping", desc: "The real-time rendering option in Unity provides rapid and dynamic visual feedback, making it the preferred choice for prototyping and iterative development. Other incredible features further expand the engine capabilities, including flexibility when it comes to shaders or rendering." },
  { title: "Extensive Asset Store", desc: "Unity comprises the biggest Asset Store with thousands of ready-made assets, tools, and plugins that save time and money while developing your project. New assets span everything, providing access to tools that accelerate development from start to finish." },
  { title: "Scalability for Any Project Size", desc: "Unity's modular setup and scalable tools can efficiently accommodate projects of all levels, from simple to complex, with ease. Its flexible architecture enables teams to start small and ramp up as needed by tailoring the engine to fit the project's specific needs." },
  { title: "Cross-Platform Compatibility", desc: "Unity supports deployment to more than 25 platforms. This cross-platform compatibility enables you to develop the game of your choice, which you can then publish on multiple platforms to maximize your reach and player base." }, 
  { title: "Ideal for AR, VR, and Emerging Technologies8", desc: "Unity is the foremost engine that supplies dedicated XR toolkits and device integrations. Whether Meta Quest, Apple Vision Pro, or HoloLens, Unity ensures the smoothest immersive experience, making it the best pick for AR/VR games." }
];

export default function WhyChooseUnityGameSlider() {
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
             Why Choose Unity for Game Development?
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Unity is among the most agile and user-centric game development engines, providing a broad array of tools and features. Here's why 
            Unity will always dominate the game development culture.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {WhyChooseUnityGamedata.map((item, i) => (
              <div key={i}>
                <div className="my-4 flex h-full md:min-h-[350px] flex-col justify-center rounded-[12px] p-[1px] bg-[linear-gradient(150deg,rgba(242,239,236,0.44)_0%,rgba(150,69,0,0.14)_100%)]">
                  <div className="flex h-full flex-1 flex-col justify-center rounded-[12px] p-3 lg:p-5 bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)]">
                    <h3 className="text-[17px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-semibold text-left mt-[6px] mb-[15px] lg:my-[18px] text-[#ff8600]">{item.title}</h3>
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
