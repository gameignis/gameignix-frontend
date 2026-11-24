"use client";
import { useState } from "react";
import Image from "next/image";

const Web3GameTeamsData = [
  {
    question: "Blockchain Engineers",
    answer:
      "Our blockchain developers design and deploy smart contracts and token frameworks that power your game’s economy, asset ownership, and NFT on-chain interactions. They ensure that all blockchain components are secure, gas-optimised, and audit-ready, aligning with your platform's regulatory and operational needs.",
  },
  {
    question: "Project Managers",
    answer:
      "You get a dedicated project manager who will bridge strategy with execution, ensure your project stays on track, and in sync with your business goals. They provide smooth and clear communication across teams, manage sprint cycles, monitor delivery KPIs, and ensure milestone alignment through agile methodologies.",
  },
  {
    question: "Game Designers",
    answer:
      "Our game designers create intuitive, easy-to-follow gameplay and progression systems that drive user retention and support features like play-to-earn and NFT staking. They align core mechanics with your target audience and business objectives to ensure the right balance between entertainment, utility, and revenue generation.",
  },
  {
    question: "Backend Engineers",
    answer:
      "Our backend developers create a scalable infrastructure that powers real-time multiplayer experiences, transaction tracking, and game state logic. They integrate blockchain services with traditional game servers while ensuring minimal latency, smooth performance across devices, and future-ready system scalability.",
  },
  {
    question: "Tokenomics Consultants",
    answer:
      "These specialists build the in-game economy, designing token flows, burn/mint logic, staking models, and reward systems. They help balance utility with sustainability, ensuring that both early adoption and long-term engagement are financially and structurally viable for your platform’s continued growth. ",
  },
  {
    question: "QA Engineers",
    answer:
      "Our QA specialists do thorough testing of blockchain logic, gaming dynamics, wallet flows, and performance metrics. They must ensure that the game runs well across a variety of network conditions and platforms, reducing post-launch risks, user friction, technological debt, and usability difficulties.",
  },
];

export default function Web3GameTeams() {
  
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = Web3GameTeamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-6">
              <div className="sticky top-[20px]">
                <div className="w-full">
                  <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                    Who Will Work on Your Project
                  </h2>
                  <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                    You will be guided by a collective team of experts across blockchain, gaming, and business strategy to build a successful Web3 game. 
  At GameIgnix, we assign specialists who bring both technical knowledge and industry perspective, ensuring your game is positioned for 
  real-world success. 
                  </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/web3-game/web3-game-developers.webp" alt="Web3 Game Developers" width={640} height={350} loading="lazy" className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
           </div>
           <div className="md:col-span-6">
              <div className="w-full space-y-3">
                {MidCol.map((item, index) => (
                  <div key={index} className="mb-3 border-b border-white bg-transparent rounded-none pt-[10px] pb-[17px]">
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[32px] font-semibold">
                      <button type="button" aria-label={item.question} onClick={() => toggleItem(index)} className="relative w-full pl-[60px] pr-[10px] py-[17px] text-left text-white">
                        <Image src="/common/arrow1.webp" alt="arrow" width={34} height={34} loading="lazy" className={`absolute left-[2px] top-[16px] transition-transform duration-300 ease-in-out ${ openIndex === index ? "rotate-180" : "rotate-0" }`} /> 
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
