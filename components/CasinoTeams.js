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
  const MidCol = CasinoTeamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex">
             <div className="w-full">
              <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Features of Casino Games
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  We craft reliable and high-performance casino games with premium features that help you attain maximum engagement, retention, 
                  and profitability. Here are the features that make your casino platform engaging and futuristic:
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="Casino Game App Development" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
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
