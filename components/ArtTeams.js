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

export default function Teams() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const RigCol = ArtTeamsData;

  return (
    <section className="teamsc">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Meet Our Creative Team
                </h2>
                <p className="font-semibold cm-stit text-orange italic">
                  Talents Powering World-Class Game Visuals
                </p>
                <p className="lead text-gray-400">
                  At GameIgnix, our team brings together top-tier talent from across the game art spectrum, each with a deep understanding of what it takes 
                  to deliver game assets that align with gameplay, technical constraints, and genre-specific aesthetics.
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/game-art/game-art-team.webp" alt="Game Art Development Team" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
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
