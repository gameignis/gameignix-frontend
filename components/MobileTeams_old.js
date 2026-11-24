"use client";
import { useState } from "react";
import Image from "next/image";

const MobileTeamsData = [
  {
    question: "Game Artists",
    answer:
      "Our game artists craft visually appealing characters, game environments, and assets that attract players while ensuring every detail aligns with your game’s theme and story. They always focus on delivering high-quality visuals with smooth performance on every mobile device.",
  },
  {
    question: "Game Designers",
    answer:
      "Our game designers envision immersive gameplay mechanics and user experiences, bringing ideas to life as interactive and well-balanced game worlds. They also ensure player engagement by creating level plans, challenges, and reward systems that keep users engaged.",
  },
  {
    question: "Mobile Game Developers",
    answer:
      "Our mobile game developers turn ideas into life as fully functional, high-performing game apps across iOS and Android platforms. Leveraging cutting-edge technologies and tools, they maintain cross-platform compatibility, scalability, and seamless performance.",
  },
  {
    question: "Sound Designers",
    answer:
      "Our sound designers create engaging audio effects and music that immerse players in every scene, enriching the overall gameplay experience. Every audio element is carefully tuned to align perfectly with actions, moods, and environments.",
  },
  {
    question: "Game Testers",
    answer:
      "Our QA testers thoroughly test every game for bugs, glitches, and performance issues to ensure seamless gameplay before release. They also perform device-specific testing to provide a flawless gaming experience across various mobile models.",
  },
  {
    question: "Project Managers",
    answer:
      "Our project managers coordinate workflows and communication to ensure projects are completed on time, without compromising quality. Serving as a middleman between the client and the team, they ensure that your vision is flawlessly transformed into the final product.",
  },
];

export default function MobileTeams() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = MobileTeamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full md:w-[95%]">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Who Will Work On Your Project?
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-6 lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  Meet the Igniters of Your Mobile Game
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  As a leading Game App Development Company, we bring together creative artists and skilled game developers to offer 
                  exceptional gaming experiences. Our versatile team of professionals combines passion, creativity, and expertise to bring 
                  every project to life.
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/mobile-game/mobile-game-team.webp" alt="Mobile Game Development Team" width={640} height={350} loading="lazy" className="max-w-full md:w-[88%] h-auto md:max-h-[300px] flex-shrink-0" />
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
