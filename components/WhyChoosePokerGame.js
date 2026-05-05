"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChoosePokerGamedata = [
  { title: "Industry Best Experts Team", desc: "We have a team of highly skilled and experienced professionals, including seasoned game designers, developers, and QA specialists with in-depth experience in the poker industry." },
  { title: "Latest Technologies", desc: "Our expert developers leverage cutting-edge technologies and frameworks to deliver the best poker game for your users. This will lead to high performance and a future-proof platform." },
  { title: "Enhanced Security and Scalability", desc: "Security is paramount in online gaming. We implement robust encryption protocols and secure architecture to protect player data and financial transactions. And our solutions are built with scalability in mind." },
  { title: "Dedicated Support", desc: "We offer a dedicated support team that is available to assist you throughout the poker game development process, ensuring clear communication between both parties from concept to launch." },
  { title: "Timely Delivery", desc: "We follow agile development methodologies to ensure your poker game project is delivered within agreed-upon timelines and budget, without unnecessary delays that hold you back." }, 
  { title: "Post-launch Support and Maintenance", desc: "Our relationship with your project doesn't end after your game is launched. We provide post-launch support tailored to the service you choose, which includes regular updates, bug fixes, and additional features." }
];

export default function WhyChoosePokerGameSlider() {
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
             Why GameIgnix is a Trusted Name in Poker Game Development
          </h2>
          <p className="lead text-gray-400">
            Choosing the proper game development studio is crucial for your game's success. GameIgnix specializes in poker game development, delivering 
            scalable, high-performance poker games tailored to your vision. We build custom poker games from scratch, not templates, with real-money 
            play, secure multiplayer, and cross-platform compatibility. Our agile and transparent process ensures that every gameplay detail is executed 
            with precision.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider
          key={isMobile ? "mobile" : "desktop"}
          {...(isMobile ? mobileSettings : desktopSettings)}
          >
            {WhyChoosePokerGamedata.map((item, i) => (
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
