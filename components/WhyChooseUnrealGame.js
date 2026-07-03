"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUnrealGamedata = [
  { title: "Quality Visuals", desc: "Unreal Engine leads the industry in delivering high-fidelity, photorealistic graphics. With cutting-edge features like Lumen for dynamic global illumination and Nanite for virtualized geometry, this engine ensures lifelike environments, realistic lighting, and smooth performance." },
  { title: "Developer-Friendly Features", desc: "Unreal Engine is packed with features that streamline the development process. From Blueprint visual scripting for faster development without coding to an expansive library of pre-built assets and templates, Unreal significantly reduces the time and complexity involved in building games." },
  { title: "Support for Numerous Projects", desc: "Unreal Engine is highly versatile and supports a broad spectrum of project types and platforms. Whether you are working on 2D games, VR/AR experiences, cinematic simulations, or expansive open-world AAA games, Unreal has the tools and scalability to handle it." },
  { title: "Easy Prototyping", desc: "With real-time rendering and the Blueprint system, Unreal Engine makes prototyping faster and more efficient. Developers can quickly build and test game ideas without diving deep into code, allowing for rapid iteration and concept validation." },
  { title: "Advanced AI", desc: "Unreal Engine comes equipped with robust AI tools that allow developers to build intelligent, responsive, and immersive non-playable characters (NPCs). From navigation meshes (NavMesh) to behavior trees and environmental queries, Unreal enables the creation of complex AI behavior that elevates gameplay realism and interactivity." }
];

export default function WhyChooseUnrealGameSlider() {
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
             Why Choose Unreal Engine for Game Development?
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Unreal Engine unlocks limitless potential for game development, offering unmatched tools and technologies that empower businesses to build 
  visually stunning, high-performance games. Here's why Unreal Engine stands out as the preferred choice for game development.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {WhyChooseUnrealGamedata.map((item, i) => (
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
