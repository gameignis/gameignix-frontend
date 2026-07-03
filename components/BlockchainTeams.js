"use client";
import { useState } from "react";
import Image from "next/image";

const blockchainteamsData = [
  {
    question: "Project Coordinator",
    answer:
      "The main character orchestrates the entire blockchain game development process, including plan, schedule, and budget, to make sure that your game project stays on track and within scope.",
  },
  {
    question: "2D/3D Artists & Animators",
    answer:
      "The talented visual creators are assigned to bring your game vision to life, which includes characters, environments, special effects, and animations. To ensure that your gaming visuals meet the highest standards.",
  },
  {
    question: "NFT Asset Artists",
    answer:
      "NFT artists develop the concepts and final artwork for in-game items, characters, collectibles, or land parcels that players will truly own, ensuring each asset is distinct and appealing.",
  },
  {
    question: "Blockchain Game Designer",
    answer:
      "The creative mind that conceptualizes the core gameplay and user experience explicitly designs how blockchain elements, such as NFTs and tokens, enhance the game economy and player incentives.",
  },
  {
    question: "Full-Stack Blockchain Developer",
    answer:
      "Our technical powerhouse is involved in developing both the front-end and the back-end of the game. Also, it has a deep understanding of integrating blockchain components into your game.",
  },
  {
    question: "QA Testers",
    answer:
      "Our guardian angel will be on duty to ensure game quality and blockchain integrity, free from bugs and performance issues, by conducting rigorous smart contract verification and comprehensive security checks.",
  },
];

export default function BlockchainTeams() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = blockchainteamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Team Required to Build an Ideal Blockchain Game
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  Here are the required specialized teams to deliver a successful blockchain game. Each role is crucial for transforming your 
                  blockchain game concept into a fully functional and properly polished gaming experience. 
                </p>
                </div>
              <div className="my-[1rem] pr-6">
                  <Image src="/common/blockchain-game/blockchain-game-developers.webp" alt="Blockchain Game Developers" 
                   width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
           </div>
           <div className="flex">
              <div className="w-full space-y-3">
                {MidCol.map((item, index) => (
                  <div key={index} className="mb-3 border-b border-white bg-transparent rounded-none pt-[10px] pb-[17px]">
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[32px] font-semibold">
                      <button type="button" aria-label={item.question} onClick={() => toggleItem(index)} className="relative w-full pl-[60px] pr-[10px] py-[17px] text-left text-white">
                        <Image src="/common/arrow1.webp" alt="arrow" width={34} height={34} className={`absolute left-[2px] top-[16px] transition-transform duration-300 ease-in-out ${ openIndex === index ? "rotate-180" : "rotate-0" }`} /> 
                        {item.question}
                      </button>
                    </h3>
                    {openIndex === index && (
                      <div className="border-t border-[#ff8600] px-[10px] py-4 text-[15px] md:text-[16px] leading-[24px] text-white" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
