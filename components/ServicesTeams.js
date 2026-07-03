"use client";
import { useState } from "react";
import Image from "next/image";

const serviceteamsData = [
  {
    question: "Game Designers",
    answer:
      "Our team of visionary designers and storytellers brings every character, every plot twist, and every environment to life with an expert balance of creativity and strategic thinking. From concept art to immersive world-building, they craft captivating narratives and worlds that draw players in and make them lose themselves.",
  },
  {
    question: "Game Developers",
    answer:
      "Mastering the latest game engines and coding techniques, our developers build custom systems, integrate complex features, and implement efficient algorithms, ensuring your game is fluid, responsive, and enjoyable to play.",
  },
  {
    question: "Artists & Animators",
    answer:
      "Our artists and animators don’t just make your game look good; they also make it feel real. Whether it is designing characters or animating fluid combat sequences, they blend technical expertise with a deep understanding of visual storytelling to create stunning, lifelike art.",
  },
  {
    question: "Sound Designers & Composers",
    answer:
      "Our sound designers and composers create dynamic soundscapes, from atmospheric background music to jaw-dropping sound effects, ensuring that every moment of the game builds tension, evokes emotion, and feels alive.",
  },
  {
    question: "QA Experts",
    answer:
      "Our quality assurance team is here to ensure that no detail goes unnoticed. They rigorously test every aspect of the game, from mechanics to performance, hunting for bugs and optimizing every feature. Their goal is to refine the game to perfection and prepare it for release.",
  },
  {
    question: "Project Managers & Coordinators",
    answer:
      "The path from concept to launch can be complex, but our project managers are the masterminds, ensuring everything stays on track. From timelines and resources to communication between departments, they are responsible for an organized and efficient development process.",
  },
];

export default function ServicesTeams() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = serviceteamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Who Will Work On Your Project?
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-6 lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  Experts Behind Your Project’s Success
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  From creative artists to tech innovators, our versatile team is the driving force behind every successful game project. We 
                  fuse creativity and technology to deliver outstanding games that challenge conventions and leave a lasting impression. 
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/game-develop/game-development-services-provider.webp" alt="Game Development Services Provider" 
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
