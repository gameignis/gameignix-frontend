"use client";
import { useState } from "react";
import Image from "next/image";

const PokerGameTeamsData = [
  {
    question: "Project Manager",
    answer:
      "The main character in any project is the one who orchestrates the entire development process. Project managers take responsibility for planning and scheduling the workforce according to the project's needs and budget.",
  },
  {
    question: "2D/3D Artist",
    answer:
      "Creative professionals who take expert care of visual architects for your poker game, which includes table designs, card art, user interface elements, and environments with realistic 3D renderings or 2D animations.",
  },
  {
    question: "Game Developer",
    answer:
      "The backbone of the game's functionality. This role involves coding the core game logic and developing the secure backend infrastructure to ensure that your poker game is technically sound and also provides a better game experience.",
  },
  {
    question: "Sound Designers",
    answer:
      "Our sound designers craft immersive audio experiences that enhance the poker gaming experience. From card shuffles to chip stacks, every sound is thoughtfully designed. These rich soundscapes create a truly authentic and engaging poker experience for players.",
  },
  {
    question: "Q/A Specialist",
    answer:
      "The Guardians ensure quality and playability by conducting multiple rigorous tests in every aspect of the poker game to identify and document bugs, thereby providing a seamless and enjoyable experience for players.",
  },
];

export default function PokerGameTeams() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = PokerGameTeamsData;

  return (
    <section className="pt-[2rem] pb-[4rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Team Required to Build Your Poker Game
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  Here are the required specialized teams to deliver a successful poker game. Each role is crucial for transforming a concept into a fully 
                  functional and properly polished gaming experience.
                </p>
              </div>
              <div className="my-[1rem] pr-6">
                <Image src="/common/poker-game/poker-game-app-development.webp" alt="Game Development Services Provider" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
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
