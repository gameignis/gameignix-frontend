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
    <section className="cmcontentsc">
      <div className="w-full px-4">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Why Choose Unreal Engine for Game Development?
          </h2>
          <p className="lead text-gray-400">
            Unreal Engine unlocks limitless potential for game development, offering unmatched tools and technologies that empower businesses to build 
  visually stunning, high-performance games. Here's why Unreal Engine stands out as the preferred choice for game development.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseUnrealGamedata.map((item, i) => (
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
