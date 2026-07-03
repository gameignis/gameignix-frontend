"use client";
import { useState } from "react";
import Image from "next/image";

const ArtTeamsData = [
  {
    question: "Art Directors",
    answer:
      "Every project is led by our experienced art directors, who serve as your creative partners from kickoff to delivery, overseeing the visual direction and cross-disciplinary alignment, and providing critical feedback to ensure consistency with the gameplay requirements of your project.",
  },
  {
    question: "Technical Artists",
    answer:
      "With a solid understanding of both art and programming, our technical artists solve challenges related to integrating assets into game engines and handle optimized performance to help scale visuals across platforms without compromise.",
  },
  {
    question: "2D/3D Artists",
    answer:
      "Our 2D/3D artists deliver high-fidelity visual assets, be it vivid characters, realistic settings, or stylized elements tailored to your game style. With proficiency in both high-poly and low-poly modeling, every asset is carefully crafted to strike a balance between form and function, meeting both technical and visual standards.",
  },
  {
    question: "Animators & VFX Specialists",
    answer:
      "Our animation and VFX specialists bring life and energy to game characters and worlds, whether it's lifelike character movements or explosive particle effects. They add an extra layer of dynamic effects to reinforce the game's tone.",
  },
  {
    question: "Concept Artists",
    answer:
      "Our concept artists translate early ideas into detailed sketches and illustrations through character silhouettes and environment mood boards. Laying the visual foundation for game production, they ensure creative alignment from the start.",
  },
  {
    question: "Designers",
    answer:
      "Our designers collaborate with art and gameplay teams to design every asset, ensuring it serves the intended interaction and narrative purpose. They are also responsible for creating wireframes and prototypes to verify that the art effectively supports the player's navigation.",
  },
];

export default function ArtTeams() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = ArtTeamsData;

  return (

    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="w-full">
                <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Meet Our Creative Team
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-6 lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  Talents Powering World-Class Game Visuals
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  At GameIgnix, our team brings together top-tier talent from across the game art spectrum, each with a deep understanding of what it takes 
                  to deliver game assets that align with gameplay, technical constraints, and genre-specific aesthetics.
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/game-art/game-art-team.webp" alt="Game Art Development Team" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
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
