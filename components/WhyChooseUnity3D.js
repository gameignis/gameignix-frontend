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
    <section className="pt-[2rem] md:pt-[3rem] pb-[3rem] md:pb-[6rem]">
      <div className="w-full px-4">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
             Why Choose GameIgnix As Your Unity 3D Game Development Company?
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            GameIgnix stands out as a leading Unity 3D game development company, offering unmatched experience in creating high-performance, visually 
            engaging, and futuristic games that harness the power of Unity.  From conception to final execution, every game we make in Unity sticks to 
            the grounds of precision, performance, and innovation across all genres and platforms.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {WhyChooseUnity3Ddata.map((item, i) => (
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
