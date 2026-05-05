"use client";
import { useState } from "react";
import Image from "next/image";

const SlotGameTeamsData = [
  {
    question: "Slot Game Designers",
    answer:
      "Our slot game designers conceptualize the entire player journey, from core gameplay mechanics to innovative bonus rounds and payout strategies. They balance fun and challenge to keep players engaged while ensuring the game aligns with your business goals.",
  },
  {
    question: "Game Artists",
    answer:
      "Our game artists create visually stunning reels, symbols, and themed backgrounds that immerse players in your chosen concept. They pay meticulous attention to animation details, ensuring every spin is smooth, vibrant, and on-brand.",
  },
  {
    question: "Mathematicians & RNG Experts",
    answer:
      "Our mathematicians develop precise payout structures, RTP (Return to Player) percentages, and volatility settings. Coupled with RNG (Random Number Generator) experts, they guarantee that every spin is fair, unpredictable, and compliant with industry standards.",
  },
  {
    question: "Game Developers",
    answer:
      "Our slot game developers code the game’s engine, build interactive features, and integrate secure back-end systems. They ensure the slot game runs seamlessly on web, mobile, and desktop platforms without compromising on speed or quality.",
  },
  {
    question: "Sound Designers",
    answer:
      "Our sound designers produce immersive audio, from catchy win jingles to thematic background tracks. Their work heightens the thrill of every spin, making players feel more connected to the game.",
  },  
  {
    question: "QA Testers",
    answer:
      "Our QA testers conduct rigorous testing on gameplay, graphics, and platform performance. They identify and resolve bugs, ensuring a smooth, glitch-free experience before the game reaches your audience.",
  },
  {
    question: "Project Managers",
    answer:
      "Our project managers oversee timelines, budgets, and team coordination from start to finish. They act as your primary point of contact, ensuring your vision is realized without delays or compromises.",
  },
];

export default function SlotGameTeams() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const RigCol = SlotGameTeamsData;

  return (
    <section className="teamsc">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Who Will Work On Your Project
                </h2>
                <p className="lead text-gray-400">
                  At GameIgnix, every slot game is crafted by a specialized, cross-functional team dedicated to delivering top-tier gaming experiences. 
                  From creative ideation to technical precision, each expert ensures your project is visually captivating, mathematically sound, and 
                  flawlessly functional.
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="Who Will Work On Your Project" 
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
