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
    <section className="pt-[2rem] md:pt-[3rem] pb-[3rem] md:pb-[6rem]">
      <div className="w-full px-4">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
             Why GameIgnix is a Trusted Name in Poker Game Development
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Choosing the proper game development studio is crucial for your game's success. GameIgnix specializes in poker game development, delivering 
            scalable, high-performance poker games tailored to your vision. We build custom poker games from scratch, not templates, with real-money 
            play, secure multiplayer, and cross-platform compatibility. Our agile and transparent process ensures that every gameplay detail is executed 
            with precision.
          </p>
        </div>
        <div className="content-slider cmslickwrap">
          <Slider key={isMobile ? "mobile" : "desktop"} {...(isMobile ? mobileSettings : desktopSettings)}>
            {WhyChoosePokerGamedata.map((item, i) => (
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
