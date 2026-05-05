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
  const RigCol = serviceteamsData;

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
                  Experts Behind Your Project’s Success
                </p>
                <p className="lead text-gray-400">
                  From creative artists to tech innovators, our versatile team is the driving force behind every successful game project. We 
                  fuse creativity and technology to deliver outstanding games that challenge conventions and leave a lasting impression. 
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/game-develop/game-development-services-provider.webp" alt="Game Development Services Provider" 
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
