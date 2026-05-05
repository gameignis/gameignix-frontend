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
  const RigCol = MobileTeamsData;

  return (
    <section className="teamsc">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Who Will Work On Your Project?
                </h2>
                <p className="font-semibold cm-stit text-orange italic">
                  Meet the Igniters of Your Mobile Game
                </p>
                <p className="lead text-gray-400">
                  As a leading Game App Development Company, we bring together creative artists and skilled game developers to offer 
                  exceptional gaming experiences. Our versatile team of professionals combines passion, creativity, and expertise to bring 
                  every project to life.
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/mobile-game/mobile-game-team.webp" alt="Mobile Game Development Team" width={640} height={350} 
                   className="max-w-full h-auto flex-shrink-0" />
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
