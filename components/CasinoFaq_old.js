"use client";
import { useState } from "react";

const CasinoFaqData = [
  {
    question: "How long does it take to develop a casino game?",
    answer:
      "It depends on the type of game, features required, and level of difficulty. Generally, simple casino games take between 4 and 8 weeks, while those with numerous special features and multiplayer capabilities take anywhere from 3 to 6 months. Following the initial scoping of the project, we provide concrete milestones and timelines.",
  },
  {
    question: "Do you develop casino games for both Android and iOS?",
    answer:
      "Yes. Using robust engines such as Unity and Unreal, we develop cross-platform Casino Games to deliver the best gameplay experience across Android, iOS, Web, and Desktop platforms.",
  },
  {
    question: "Can you create custom casino games from scratch?",
    answer:
      "Yes, GameIgnix specializes in creating casino games that reflect your unique ideas, branding, game mechanics, and monetization goals.",
  },
  {
    question: "Is it possible to integrate cryptocurrency or blockchain into the game?",
    answer:
      "Yes. Regarding Web3 casino game development, we integrate crypto wallets, NFT assets, and blockchain-supported systems on Solana, Ethereum, or any custom chain.",
  },
  {
    question: "Are your games RNG-certified and fair?",
    answer:
      "We follow best practices for RNG algorithms and fairness. If so requested, we can assist in integrating certified RNG engines and preparing games ready for compliance.",
  },
  {
    question: "Do you offer white-label casino solutions?",
    answer:
      "Yes. We provide white-label casino solutions that are ready for launch with customizable admin panels, payment gateways, and design.",
  },
  {
    question: "Will you help with game deployment and post-launch support?",
    answer:
      "Yes, we provide full-cycle development support, including production support, server setup, app store publishing, implementation of additional features, and maintenance.",
  },   
  {
    question: "How do you ensure security in real-money casino games?",
    answer:
      "We secure your game with safe authentication, encrypted payment, fraud prevention, and backend audits to ensure the casino is legal and essentially cheat-proof.",
  }, 
  {
    question: "What is the cost of developing a casino game?",
    answer:
      "The prices vary according to the type of casino, its features, and the platform it operates on. Simple casino games start at about $3,500-$8,000, whereas complex multiplayer platforms can go much higher.",
  },
];

export default function CasinoFaq() {

  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = CasinoFaqData;

  return (
    <section className="py-8">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Frequently Asked Questions
          </h2>
          <p className="font-semibold tracking-[1px] text-[18px] md:text-[24px] mt-[.2rem] mb-[1.2rem] text-[#ff8600] italic">
            Bringing Clarity To Your Curiosity
          </p>
          <p className="text-[15px] md:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
            Still have questions? Feel free to reach out to our experts for detailed consultation.  
          </p>
        </div>
        <div className="flex justify-center">
         <div className="w-full md:w-10/12 mx-auto space-y-3">
           {MidCol.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-[#fc740080] bg-white/[0.03] px-5 py-[10px]">
              <button onClick={() => toggleItem(index)} type="button" aria-label={item.question} className={`font-orbitron relative w-full border-0 bg-transparent pl-[10px] pr-[50px] py-[10px] md:py-[17px] text-left text-[17px] md:text-[20px] leading-[26px] md:leading-[32px] text-white font-medium shadow-none focus:outline-none focus:ring-0 transition-opacity ${openIndex === index ? "opacity-100" : "opacity-60"}`}>
                {item.question}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className={`h-6 w-6 stroke-[1.5] transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor"  viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-[#ff8600] px-[10px] py-4 text-[15px] md:text-[16px] leading-[24px] text-white" dangerouslySetInnerHTML={{ __html: item.answer }} />
               )}
            </div>
            ))}
         </div>
        </div>
      </div>
    </section>
  );
}
