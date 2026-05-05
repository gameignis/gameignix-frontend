"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesdata = [
  { 
    title: "CoinQuest: Rise of Guilds", 
    desc: "We built a token-governed strategy game with NFT ownership, DeFi staking, and wallet integration. The game operates based on Play-to-Earn mechanics, featuring a strong utility token and robust economic design.", 
    desc1: "P2E, Strategy Game", 
    desc2: "Mobile", 
    desc3: "Unity", 
    caseimg: "/common/web3-game/coinquest-rise-of-guilds.webp", 
  }, 
  { 
    title: "Neo SpeedDrift", 
    desc: "We built a multiplayer racing game where users own NFT cars, build garages, and earn on-chain rewards. Leveraging Solana’s speed, it enabled real-time gameplay and monetized seasonal assets and branded tournaments.", 
    desc1: "Multiplayer Racing Game", 
    desc2: "Web, PC", 
    desc3: "Unreal Engine", 
    caseimg: "/common/web3-game/neo-speeddrift.webp", 
  }, 
  { 
    title: "Aetheria Ascent", 
    desc: "Aetheria Ascent is a fantasy RPG game where players breed and battle creatures, and these creatures are the NFTs or in-game assets. Smart contracts enabled secure, transparent trades, boosting user retention and community-led growth.", 
    desc1: "Action Adventure", 
    desc2: "PC, Mobile (Android, iOS)", 
    desc3: "Unity 3D", 
    caseimg: "/common/web3-game/aetheria-ascent.webp", 
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
             Our Web3 Game Case Studies
          </h2>
          <p className="lead text-gray-400">
            We build Web3 games that are secure, scalable, and aligned with our clients’ business goals. Below are real-world examples of how we’ve 
transformed concepts into high-performing game platforms.
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
