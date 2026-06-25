"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const BlockchainCaseStudiesdata = [
  { 
    title: "CoinQuest: Rise of Guilds", 
    desc: "A strategic play-to-earn game where players play the game and earn rewards, craft NFT items, and trade them on a global marketplace.", 
    desc1: "Strategy, P2E", 
    desc2: "Mobile (iOS, Android)", 
    desc3: "Solana", 
    caseimg: "/common/blockchain-game/coinquest-rise-of-guilds.webp", 
  }, 
  { 
    title: "Aetheria Ascent", 
    desc: "A fantasy RPG where players breed and battle NFT creatures, and earn in-game cryptocurrency (Breed) and rare digital artifacts.", 
    desc1: "Action Adventure", 
    desc2: "PC, Mobile (iOS, Android)", 
    desc3: "BNB Chain", 
    caseimg: "/common/blockchain-game/aetheria-ascent.webp", 
  }, 
  { 
    title: "Neo SpeedDrift", 
    desc: "A fast-paced, multiplayer racing game where each car is a unique NFT, and players compete in seasonal tournaments for crypto rewards.", 
    desc1: "Multiplayer Racing Game", 
    desc2: "Web, PC", 
    desc3: "Ethereum (Layer 2)", 
    caseimg: "/common/blockchain-game/neo-speeddrift.webp", 
  }
];

export default function BlockchainCaseStudies() {
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
            Our Blockchain Game Case Studies
          </h2>
          <p className="lead text-gray-400">
            A glimpse of our recent blockchain game projects that showcase our expertise in blockchain game development.
          </p>
        </div>

        <div className="case-slider cmslickwrap">
          <Slider {...settings}>
            {BlockchainCaseStudiesdata.map((item, i) => (
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
                        <Image src="/common/engine-icon.webp" alt="Blockchain" width={28} height={28} className="max-w-full h-auto flex-shrink-0" />
                      </span>
                      <span className="text-orange">Blockchain:</span>
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
