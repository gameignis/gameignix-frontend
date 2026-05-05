"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Legends of the Lost Horizon", 
    desc: "Legends of Lost Horizon is an adventure game with huge worlds filled with puzzles and mythical creatures. We have integrated an immersive progression system that allows players to unite, level up their characters, and uncover ancient secrets.", 
    desc1: "Multi-Player Adventure", 
    desc2: "PC, Steam", 
    desc3: "Unity 3D", 
    caseimg: "/common/unity-game/legends-of-lost-horizon.webp", 
  }, 
  { 
    title: "Arcade Blitz: Street Rage", 
    desc: "Street Rage is a frantic 2D action game channeling classic arcade styles. Players select one of the distinctive characters, each having special moves of their own, and wage war against enemy hordes in various urban settings.", 
    desc1: "Action/Beat ‘Em Up", 
    desc2: "iOS, Android, Web", 
    desc3: "Unity 2D", 
    caseimg: "/common/unity-game/street-rage.webp", 
  }, 
  { 
    title: "Escape: The Abyss", 
    desc: "The Abyss is an adventure game that takes players on an ill-fated deep-sea expedition. Powered by Unity tools, the game requires players to solve puzzles and escape a submerged research facility before losing the facility's oxygen supply.", 
    desc1: "Survival Adventure", 
    desc2: "PC, Web", 
    desc3: "Unity 3D", 
    caseimg: "/common/unity-game/vr-escape-abyss.webp", 
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
             Our Case Studies on Unity Game Development
          </h2>
          <p className="lead text-gray-400">
            Our case studies demonstrate our expertise in delivering numerous successful projects utilizing Unity across various genres, 
            platforms, and technologies. Let's now take a look at some of the more significant projects.
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
