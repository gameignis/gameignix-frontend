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
  const MidCol = SlotGameTeamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Who Will Work On Your Project
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  At GameIgnix, every slot game is crafted by a specialized, cross-functional team dedicated to delivering top-tier gaming experiences. 
                  From creative ideation to technical precision, each expert ensures your project is visually captivating, mathematically sound, and 
                  flawlessly functional.
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="Who Will Work On Your Project" width={640} height={350} className="max-w-full h-auto flex-shrink-0" loading="lazy" />
                </div>
              </div>
           </div>
           <div className="flex">
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
