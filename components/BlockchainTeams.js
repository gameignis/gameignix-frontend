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
  const RigCol = blockchainteamsData;

  return (
    <section className="teamsc">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Team Required to Build an Ideal Blockchain Game
                </h2>
                <p className="lead text-gray-400">
                  Here are the required specialized teams to deliver a successful blockchain game. Each role is crucial for transforming your 
                  blockchain game concept into a fully functional and properly polished gaming experience. 
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/blockchain-game/blockchain-game-developers.webp" alt="Blockchain Game Developers" 
                   width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
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
