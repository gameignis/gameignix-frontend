"use client";
import { useState } from "react";
import Image from "next/image";

const CasinoTeamsData = [
  {
    question: "Multiple Game Integration",
    answer:
      "Players should have easy access to multiple games, from classic slots to blackjack, under a unified platform. Having a diverse collection ensures a consistent and enjoyable gaming experience while increasing user retention.",
  },
  {
    question: "Secure Transactions",
    answer:
      "Our casino platforms make payments easy with automated deposits, real-time wallet updates, and rapid withdrawal processing. This frictionless transaction flow enhances the overall user experience while minimizing support queries and operational delays.",
  },
  {
    question: "Bonuses and Promotions",
    answer:
      "We offer integrated modules for bonuses, cashback, free spins, and tiered loyalty programs to boost player retention. These systems help reduce abandonment and increase user acquisition via real-time engagement.",
  },
  {
    question: "Live Dealer Games",
    answer:
      "Live dealer games bring a real-world gambling experience through high-quality video streaming and real-time interactions. This includes features like interactive chat, multi-camera views, and multiplayer tables.",
  },
  {
    question: "Responsible Gaming Tools",
    answer:
      "We promote healthy gambling habits with our built-in controls like betting limits, voluntary exclusion, and session reminders. These tools promote social responsibility and help meet global compliance standards.",
  },
  {
    question: "Scalable Backend Architecture",
    answer:
      "Our robust backend supports growing user bases and peak traffic with flexible, cloud-based infrastructure. This scalability ensures uninterrupted performance and platform compatibility as user demand evolves.",
  },
];

export default function CasinoTeams() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const RigCol = CasinoTeamsData;

  return (
    <section className="teamsc">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
              <div className="teamlef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Features of Casino Games
                </h2>
                <p className="lead text-gray-400">
                  We craft reliable and high-performance casino games with premium features that help you attain maximum engagement, retention, 
                  and profitability. Here are the features that make your casino platform engaging and futuristic:
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="Casino Game App Development" width={640} height={350} 
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
