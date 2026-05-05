"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtAnimationdata = [
  { title: "Character Animation", desc: "From stylized movements to realistic motion capture, we animate characters through expressive body language and fluid transitions, focusing on their personality and responsiveness." },
  { title: "Environment Animation", desc: "We create dynamic environmental animations with ambient scene activity to serve the game’s atmosphere and respond to player input." },
  { title: "Cinematic and Motion Graphics", desc: "Our skilled animators produce high-quality motion graphics and cinematic sequences for trailers, story cutscenes, and in-game cinematics, featuring stunning visuals." },
  { title: "Rigging", desc: "Our rigging specialists design robust skeletal systems for characters, creatures, and other complex mechanical structures, featuring smooth deformation, clean skin weights, and precise control rigs." }, 
  { title: "Procedural Animation", desc: "We implement procedural animation techniques, such as inverse kinematics, blend trees, and runtime animation logic, to support interactive gameplay systems with dynamic responses and natural movement patterns." }
];

export default function ArtAnimationSlider() {
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
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  
    const mobileSettings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className="incontent-slider cmslickwrap">
      <Slider
      key={isMobile ? "mobile" : "desktop"}
      {...(isMobile ? mobileSettings : desktopSettings)}
      >
        {ArtAnimationdata.map((item, i) => (
          <div key={i} className="px-2 incont-bk">
            <div className="serv-rbx h-full">
              <div className="serv-rinbx">
                <h3 className="cm-hd4 text-orange font-bold italic">{item.title}</h3>
                <p className="para-cnt1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
