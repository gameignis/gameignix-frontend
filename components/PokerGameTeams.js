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
  const RigCol = PokerGameTeamsData;

  return (
    <section className="teamsc">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Team Required to Build Your Poker Game
                </h2>
                <p className="lead text-gray-400">
                  Here are the required specialized teams to deliver a successful poker game. Each role is crucial for transforming a concept into a fully 
                  functional and properly polished gaming experience.
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/poker-game/poker-game-app-development.webp" alt="Game Development Services Provider" 
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
