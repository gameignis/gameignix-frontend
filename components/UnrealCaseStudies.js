"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Deadfront: Last Defense", 
    desc: "Deadfront: Last Defence is an intense survival game where players must defend against zombies. We have used Unreal Engine 4 to build a combat system and multiplayer co-op mode, allowing players to team up and fight against enemies.", 
    desc1: "iOS, Android", 
    desc2: "Action/Survival", 
    desc3: "Unreal Engine 4", 
    caseimg: "/common/unreal-game/deadfront-last-defense.webp", 
  }, 
  { 
    title: "City Warfare: Shadow Strike", 
    desc: "It is a mobile-app-based first-person tactical shooter built using Unity’s physics engine. Forged with authentic weapon mechanics, and a multiplayer functionality is supported through Photon Unity Networking (PUN) that enables smooth matchmaking.", 
    desc1: "iOS, Android", 
    desc2: "Shooter", 
    desc3: "Unity 3D", 
    caseimg: "/common/unreal-game/city-warfare.webp", 
  }, 
  { 
    title: "Mystical Legacy: Escape Room", 
    desc: "Mystical Legacy is an escape puzzle game focusing on exploration and logic puzzles. Using Unity 3D’s physics engine, we implemented object manipulation, and the puzzles are randomized for each session to provide a fresh experience every time. ", 
    desc1: "iOS, Android", 
    desc2: "Puzzle/Adventure", 
    desc3: "Unity 3D", 
    caseimg: "/common/unreal-game/mystical-legacy.webp", 
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
             Our Case Studies on Unreal Game Development
          </h2>
          <p className="lead text-gray-400">
            Our case study showcases a track record of delivering high-quality games across multiple genres and platforms. From action-packed titles to 
  strategic board games, every case study demonstrates our ability to align creativity with business objectives, helping clients achieve 
  growth and long-term success.
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
