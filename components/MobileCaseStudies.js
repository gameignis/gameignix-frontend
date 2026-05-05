"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const MobileCaseStudiesdata = [
  { 
    title: "Deadfront: Last Defense", 
    desc: "Deadfront is an intense survival game where players must defend against waves of zombies using a variety of weapons, traps, and strategic placements. We used Unreal Engine 4 for detailed character models, environments, and dynamic lighting effects.", 
    desc1: "iOS, Android", 
    desc2: "Action/Survival", 
    desc3: "Unreal Engine 4", 
    caseimg: "/common/mobile-game/deadfront-last-defense.webp", 
  }, 
  { 
    title: "City Warfare: Shadow Strike", 
    desc: "“City Warfare: Shadow Strike” is a first-person tactical shooter designed for mobile devices. Using Unity’s physics engine, we implemented Multiplayer functionality and authentic weapon mechanics like bullet drop, recoil, and material penetration.", 
    desc1: "iOS, Android", 
    desc2: "Shooter", 
    desc3: "Unity 3D", 
    caseimg: "/common/mobile-game/city-warfare.webp", 
  }, 
  { 
    title: "Mystical Legacy: Escape Room", 
    desc: "We have developed an interesting escape puzzle game using the Unity 3D engine. The game features interactive rooms filled with hidden objects, challenges, and clues, requiring players to combine logic with exploration to unlock the next level.", 
    desc1: "iOS, Android", 
    desc2: "Puzzle/Adventure", 
    desc3: "Unity 3D", 
    caseimg: "/common/mobile-game/mystical-legacy.webp", 
  }
];

export default function MobileCaseStudies() {
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
            Our Case Studies on Mobile Game Development
          </h2>
          <p className="lead text-gray-400">
            Our case studies provide a glimpse into the diverse range of successful projects we have undertaken, showcasing our expertise 
            across various genres, game engines, and platforms. From survival action games to puzzle games, every project we undertake reflects 
            our ability to transform your creative ideas into compelling mobile games.
          </p>
        </div>

        <div className="case-slider cmslickwrap">
          <Slider {...settings}>
            {MobileCaseStudiesdata.map((item, i) => (
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
                        <Image src="/common/engine-icon.webp" alt="Game Engine" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Game Engine:</span>
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
