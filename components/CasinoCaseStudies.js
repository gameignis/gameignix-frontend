"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "Pixel Fortune Slot", 
    desc: "Pixel Fortune is an exciting slot game featuring a progressive jackpot, multiple bonus rounds, and an RNG system to ensure fairness in every spin. The game features smooth reel spins accompanied by sound effects that draw players in.", 
    desc1: "iOS, Android, Web", 
    desc2: "Slot Machine", 
    desc3: "Unity 3D", 
    caseimg: "/common/casino-game/pixel-fortune-slot.webp", 
  }, 
  { 
    title: "Royal Spinhouse", 
    desc: "Royal Spinhouse is a live dealer blackjack game, built with Unity, that provides your players with a premium casino gaming experience featuring high-definition video streaming, allowing them to engage in real-time gameplay with professional dealers.", 
    desc1: "iOS, Android, Web", 
    desc2: "Live Casino", 
    desc3: "Unity", 
    caseimg: "/common/casino-game/royal-spinhouse.webp", 
  }, 
  { 
    title: "Casino Royale Poker", 
    desc: "Casino Royale Poker, developed in Unreal Engine, aims at real-world mechanics with Texas Hold'em and Omaha variants. The game features a set of custom poker chip designs and fine visual effects, providing an immersive poker experience.", 
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
    <section className="pb-16">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Our Casino Game Case Studies
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Here’s a glimpse into some exciting casino game projects we’ve delivered to our clients. These showcase our creativity, technical 
            expertise, and deep understanding of player engagement.
          </p>
        </div>

        <div className="case-slider cmslickwrap">
          <Slider {...settings}>
            {CaseStudiesdata.map((item, i) => (
              <div key={i} className="relative p-[20px] lg:p-[50px] m-0 after:content-[''] after:absolute after:left-[5px] after:top-0 after:w-[99%] after:h-[99%] after:bg-white/5 after:border after:border-white/30 after:rounded-[15px] after:pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="flex flex-col gap-1">
                    <div className="md:mb-4 mb-3">
                      <h3 className="text-[19px] leading-[26px] md:text-[24px] lg:text-[28px] md:leading-[38px] mb-4 font-bold uppercase text-[#ff8600]">{item.title}</h3>
                      <p className="text-[15px] lg:text-[16px] leading-[24px] mb-2 lg:mb-4 text-white">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                      <span className="icon">
                        <Image src="/common/genre-icon.webp" alt="Genre" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-[#ff8600]">Genre:</span>
                      <span className="text-white">{item.desc1}</span>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                      <span className="icon">
                        <Image src="/common/platform-icon.webp" alt="Platform" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-[#ff8600]">Platform:</span>
                      <span className="text-white">{item.desc2}</span>
                    </div>
                    <div className="flex flex-wrap w-full items-center gap-2 mb-[3px] lg:mb-[5px] [&_span]:text-[15px] [&_span]:lg:text-[16px] [&_span]:leading-[24px]">
                      <span className="icon">
                        <Image src="/common/engine-icon.webp" alt="Engine" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-[#ff8600]">Engine:</span>
                      <span className="text-white">{item.desc3}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <Image src={item.caseimg} alt="{item.title}" width={500} height={350} loading="lazy" className="w-full h-auto rounded-[10px] border border-[#ebdddd78]" />
                    </div>  
                  </div>
                </div>
                <div className="col-span-12 mt-4 text-center">
                  <Link href="/contact" target="_blank" className="relative z-[10] mt-[15px] inline-block p-[1px] bg-[#ff8600] hover:bg-white text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" aria-label="CONTACT US">
                    <span className="block w-full px-[15px] py-[2px] bg-[#ff8600] text-white font-medium transition-colors group-hover:bg-[#e67c03] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"> Contact Us </span>
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
