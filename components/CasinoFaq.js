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
    <section className="faqsc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
            Frequently Asked Questions
          </h2>
          <p className="font-semibold cm-stit text-orange italic">
            Bringing Clarity To Your Curiosity
          </p>
          <p className="lead text-gray-400">
            Still have questions? Feel free to reach out to our experts for detailed consultation.  
          </p>
        </div>
        <div className="flex justify-center">
         <div className="w-full md:w-10/12 mx-auto">
          <div className="accord-flush">
           {MidCol.map((item, index) => (
            <div key={index} onClick={() => toggleItem(index)} className={`accord-item faq-item mb-3 ${ openIndex === index ? "text-primary" : "" }`}>
              <button onClick={() => toggleItem(index)} type="button" aria-label={item.question}
                className={`accord-btn relative text-left w-full fw-medium text-white ${openIndex === index ? "" : "faqtoggle"}`}>
                {item.question}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
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
