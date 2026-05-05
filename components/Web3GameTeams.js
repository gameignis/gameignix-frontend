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
  const RigCol = Web3GameTeamsData;

  return (
    <section className="teamsc affix_sc">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef affix_lef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Who Will Work on Your Project
                </h2>
                <p className="lead text-gray-400">
                  You will be guided by a collective team of experts across blockchain, gaming, and business strategy to build a successful Web3 game. 
At GameIgnix, we assign specialists who bring both technical knowledge and industry perspective, ensuring your game is positioned for 
real-world success. 
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/web3-game/web3-game-developers.webp" alt="Web3 Game Developers" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
           </div>
           <div className="flex">
             <div className="accord-flush w-full">
              {RigCol.map((item, index) => (
                <div key={index} onClick={() => toggleItem(index)} className={`accord-item faq-item mb-3 ${ openIndex === index ? "text-primary" : "" }`}>
                  <h3 className="accordion-header font-semibold">
                  <button onClick={() => toggleItem(index)} type="button" aria-label={item.question}
                    className={`accord-btn relative text-left w-full fw-medium text-white ${openIndex === index ? "" : "toggled"}`}>
                    {item.question}                    
                  </button>
                  </h3>
                  {openIndex === index && (
                    <div className="accord-cn text-white" dangerouslySetInnerHTML={{ __html: item.answer }} />
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
