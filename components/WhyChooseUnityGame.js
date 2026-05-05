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
    <section className="cmcontentsc">
      <div className="w-full px-4">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Why Choose Unity for Game Development?
          </h2>
          <p className="lead text-gray-400">
            Unity is among the most agile and user-centric game development engines, providing a broad array of tools and features. Here's why 
            Unity will always dominate the game development culture.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseUnityGamedata.map((item, i) => (
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
