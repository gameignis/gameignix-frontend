"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUnity3Ddata = [
  { title: "Skilled Unity Team", desc: "GameIgnix boasts a team of over 100 expert-level game developers, designers, artists, and animators, all of whom are explicitly focused on Unity game development. Our team stays ahead of the curve, continually upgrading their skill sets and methodologies to remain aligned with the latest features the games have to offer." },
  { title: "Agile Development Methodology", desc: "At GameIgnix, an agile development approach is followed, tailored to the specific needs of each project. Whatever your project goals may be, we ensure that deadlines are strictly adhered to and high-quality work is consistently delivered." },
  { title: "Diverse Portfolio Across Multiple Platforms", desc: "With over 100 projects developed and delivered across iOS, Android, Web, PC, consoles, and AR/VR platforms, GameIgnix boasts a diverse portfolio that demonstrates its ability to create games for multiple platforms across various industries and audiences." },
  { title: "Innovative-Driven Solutions", desc: "We continuously push the possibilities within Unity, focusing on building games with mechanics, visuals, and features that deliver fresh and compelling experiences to exceed our clients’ expectations." },
  { title: "High Quality and Immersive 2D/3D Games", desc: "With a robust knowledge of the Unity engine, GameIgnix is the partner to rely on for 2D and 3D games. Our Unity experts possess a diverse range of skills, enabling them to deliver projects that consistently meet client expectations." }, 
  { title: "Focus on Quality and Performance", desc: "Our development and QA teams conduct rigorous performance tests at every stage of development to ensure each game is fully optimized. We pay attention to every detail, ensuring that games perform well on various platforms and leave a lasting impression on players' minds." }
];

export default function WhyChooseUnity3DSlider() {
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
             Why Choose GameIgnix As Your Unity 3D Game Development Company?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix stands out as a leading Unity 3D game development company, offering unmatched experience in creating high-performance, visually 
            engaging, and futuristic games that harness the power of Unity.  From conception to final execution, every game we make in Unity sticks to 
            the grounds of precision, performance, and innovation across all genres and platforms.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseUnity3Ddata.map((item, i) => (
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
