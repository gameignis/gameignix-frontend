"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseMobileGamedata = [
  { title: "Expert Team of Game Developers", desc: "At GameIgnix, we assemble a diverse and visionary team of developers, artists, and designers, each bringing a wealth of experience in mobile game development, art direction, and design. With a perfect blend of expertise and creativity, we create groundbreaking mobile games that push the boundaries of creativity and set new standards in a competitive market." },
  { title: "Innovative Game Concepts", desc: "Our team excels at brainstorming and creating unique game concepts that will captivate your intended audience from the first interaction. We generate fresh, original ideas through thorough market trend research and user preferences to distinguish your game from the rest and increase player retention." },
  { title: "Agile Frameworks", desc: "Our project managers, designers, and engineers practice agile methodologies, collaborating in sprints that continually iterate to achieve project milestones. We hold regular Scrum events to constantly improve our game development processes, resulting in faster delivery and refined results." },
  { title: "State-of-the-art Technology and Tools", desc: "Our team stays up to date with the latest trends, technological advancements, approaches, and creative ideas to remain one step ahead. We utilize progressive development frameworks and tools to create mobile games, delivering groundbreaking features, optimal performance, and seamless cross-platform integration." },
  { title: "Transparency and Reliable Partnership", desc: "At GameIgnix, we develop personalized solutions closely matching client specifications and establish strong, trust-based relationships with them. We keep clients informed and transparent about the current phase of the project, the timelines involved, and any possible challenges that may be encountered." }
];

export default function WhyChooseMobileGameSlider() {
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
             Why Choose GameIgnix for Mobile Game Development?
          </h2>
          <p className="lead text-gray-400">
            GameIgnix is a top-rated mobile game development company that consistently delivers exceptional mobile games that exceed client 
            expectations. Focusing on quality, transparency, and collaboration, we handle each project with perfection and expertise.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChooseMobileGamedata.map((item, i) => (
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
