"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Viper Strike", 
    desc: "Viper Strike offers an adrenaline-pumping strategic shooter experience, featuring single-player storylines and competitive multiplayer modes, along with detailed weapon systems and multiple combat scenarios.", 
    desc1: "Tactical Shooter", 
    desc2: "PC, Console", 
    desc3: "Unreal Engine", 
    caseimg: "/common/game-develop/viper-strike.webp", 
  }, 
  { 
    title: "Royal Spinhouse", 
    desc: "Royal Spinhouse is a fast-paced, multiplayer casino game featuring a diverse range of gambling games, customizable avatars, and a real-time leaderboard that adds a social aspect and an electrifying casino atmosphere.", 
    desc1: "Casino", 
    desc2: "PC, Mobile", 
    desc3: "Unity", 
    caseimg: "/common/game-develop/royal-spinhouse.webp", 
  }, 
  { 
    title: "Chronicles of Aether", 
    desc: "Chronicles of Aether offers unlimited replayability with an ever-changing array of quests, rich lore, character customizations, and branching storylines that take players to discover the enchanted world of Aether.", 
    desc1: "Role-Playing Game (RPG)", 
    desc2: "PC, Console", 
    desc3: "Unity", 
    caseimg: "/common/game-develop/chronicles-of-ather.webp", 
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
            Our Case Studies
          </h2>
          <p className="lead text-gray-400">
            At GameIgnix, each project tells a unique story of innovation, challenge, and success. Below are some of our recent projects that 
            showcase our expertise in game development across various genres.
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
                        <Image src="/common/genre-icon.webp" alt="Genre" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Genre:</span>
                      <span className="text-white">{item.desc1}</span>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 case-det">
                      <span className="icon">
                        <Image src="/common/platform-icon.webp" alt="Platform" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Platform:</span>
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
