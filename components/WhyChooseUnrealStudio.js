"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUnrealStudiodata = [
  { title: "Skilled Unreal Team", desc: "At GameIgnix, we have assembled a team of over 300+ expert developers, designers, artists, and animators, all united by a shared passion for game development. Constantly updating our skills, we leverage the latest technological trends and Unreal Engine’s newest features, ensuring your game is on the cutting edge of innovation." },
  { title: "Agile Methodology", desc: "We follow a tailored Agile methodology for every project, breaking down the development process into manageable sprints. This approach allows us to remain flexible and responsive to evolving requirements while ensuring continuous progress and timely delivery." },
  { title: "Diverse Portfolio", desc: "With over 500+ successful game projects under our belt, GameIgnix has built a diverse portfolio that spans across iOS, Android, Web, AR/VR, and more. Our success is proven by the critical acclaim and positive reception many of our Unreal Engine game development projects have received." },
  { title: "Innovative-Driven Solutions", desc: "At GameIgnix, innovation is at the core of everything we do. Our team is focused on developing innovative game development solutions that push the boundaries of what is possible while ensuring your game’s accessibility and performance remain top-notch." },
  { title: "Focus on Quality", desc: "Our developers and QA teams work in tandem, conducting rigorous testing at every stage of development. From gameplay mechanics to art assets, we scrutinize every aspect of the game to ensure it meets our stringent quality criteria." }
];

export default function WhyChooseUnrealStudioSlider() {
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
             Why Choose GameIgnix As Your Unreal Game Development Studio?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix stands out as a top choice for Unreal Engine game development with a commitment to quality, performance, and innovation. Our team 
            comprises seasoned professionals who combine expert knowledge of Unreal Engine’s powerful features with a creative approach to game 
            development. We follow a collaborative process, prioritizing the unique needs of each client to develop high-quality, as well as 
            technically advanced games.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseUnrealStudiodata.map((item, i) => (
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
