"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Pixel Fortune Slot", 
    desc: "Pixel Fortune is a fun and engaging slot game designed with a progressive jackpot, exciting bonus rounds, and a certified RNG system for fair gameplay. With smooth reel spins and immersive sound effects, it delivers an enjoyable gaming experience for players.", 
    desc1: "iOS, Android, Web", 
    desc2: "Slot Machine", 
    desc3: "Unity 3D", 
    caseimg: "/common/casino-game/pixel-fortune-slot.webp", 
  }, 
  { 
    title: "Royal Spinhouse", 
    desc: "Royal Spinhouse is a live dealer blackjack game created with Unity, offering players a premium casino experience. It features high-quality video streaming and real-time interaction with professional dealers, making gameplay more immersive and engaging. ", 
    desc1: "iOS, Android, Web", 
    desc2: "Live Casino", 
    desc3: "Unity", 
    caseimg: "/common/casino-game/royal-spinhouse.webp", 
  }, 
  { 
    title: "Casino Royale Poker", 
    desc: "Casino Royale Poker, built using Unreal Engine, delivers a realistic poker experience with Texas Hold’em and Omaha variants. Enhanced with custom chip designs and detailed visual effects, it offers players a truly authentic poker atmosphere.", 
    desc1: "iOS, Android, Web", 
    desc2: "Poker", 
    desc3: "Unreal", 
    caseimg: "/common/casino-game/casino-royale-spoker.webp", 
  }
];

export default function CaseStudies() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="casestudysc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Our Slot Game Case Studies
          </h2>
          <p className="lead text-gray-400">
            These case studies highlight how we’ve helped clients achieve their goals with tailored game development solutions. Each 
            project demonstrates our creativity, technical excellence, and measurable results.
          </p>
        </div>

        <div className="case-slider cmslickwrap">
          <Slider {...settings}>
            {CaseStudiesdata.map((item, i) => (
              <div key={i} className="case-box relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1">
                    <div className="mb-md-4 mb-3">
                      <h3 className="case-tit text-orange font-bold uppercase">{item.title}</h3>
                      <p className="para-cnt1 text-white">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 case-det">
                      <span className="icon">
                        <Image src="/common/platform-icon.webp" alt="Platform" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Platform:</span>
                      <span className="text-white">{item.desc1}</span>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 case-det">
                      <span className="icon">
                        <Image src="/common/genre-icon.webp" alt="Genre" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Genre:</span>
                      <span className="text-white">{item.desc2}</span>
                    </div>                    
                    <div className="flex flex-wrap w-full items-center gap-2 case-det">
                      <span className="icon">
                        <Image src="/common/engine-icon.webp" alt="Engine" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Engine:</span>
                      <span className="text-white">{item.desc3}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="case-img">
                      <Image src={item.caseimg} alt="{item.title}" width={500} height={350} className="max-w-full h-auto flex-shrink-0" />
                    </div>  
                  </div>
                </div>
                <div className="col-span-12 mt-4 text-center">
                  <Link href="/contact" target="_blank" className="cm-btn1" aria-label="CONTACT US">
                  <span> Contact Us </span>
                  </Link>
                </div>                
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
