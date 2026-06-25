"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const PokerCaseStudiesdata = [
  { 
    title: "Gauner: The High-Poker Club", 
    desc: "A fast-paced, social poker experience designed for every adult, featuring unique in-game challenges, integrated voice chat, and the best community system.", 
    desc1: "Social Poker", 
    desc2: "iOS App, Android App", 
    desc3: "Unity", 
    caseimg: "/common/poker-game/high-poker-club.webp", 
  }, 
  { 
    title: "Texas Aces Pro: Tournament Mastery", 
    desc: "A high-fidelity simulation of Texas Hold'em, built for competitive players, offering multi-table tournaments, detailed player statistics, and customizable tables as well.", 
    desc1: "Texas Hold'em", 
    desc2: "Web, PC", 
    desc3: "Unreal Engine", 
    caseimg: "/common/poker-game/tournament-mastery.webp", 
  }, 
  { 
    title: "Elite Poker House", 
    desc: "A browser-based poker platform focuses on realistic gameplay, a smooth user experience, and secure real-money gambling options.", 
    desc1: "Social Poker", 
    desc2: "Web, PC", 
    desc3: "Unreal Engine", 
    caseimg: "/common/poker-game/elite-poker-house.webp", 
  },   
  { 
    title: "Stud Stars: Classic Poker", 
    desc: "Modern and classic mixed Seven-Card Stud, featuring enhanced graphics, innovative side bets, and a progression system that rewards strategic play of the users.", 
    desc1: "Seven-Card Stud", 
    desc2: "iOS App, Android App, Web", 
    desc3: "Unity", 
    caseimg: "/common/poker-game/classic-poker.webp", 
  }
];

export default function PokerCaseStudies() {
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
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
             Our Poker Game Case Studies
          </h2>
          <p className="lead text-gray-400">
            A glimpse of our recent poker game projects that showcase our variety of poker development expertise.
          </p>
        </div>

        <div className="case-slider cmslickwrap">
          <Slider {...settings}>
            {PokerCaseStudiesdata.map((item, i) => (
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
