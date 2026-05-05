"use client";
import { useState } from "react";

const SlotFaqData = [
  {
    question: "What is slot game development?",
    answer:
      "Slot game development is the process of designing and building digital slot machines that combine engaging themes, graphics, sound, and game mechanics to provide an entertaining and fair gaming experience.",
  },
  {
    question: "How long does it take to develop a slot game?",
    answer:
      "The timeline typically ranges from 3 to 6 months, depending on factors like game complexity, features, design requirements, and platform compatibility.",
  },
  {
    question: "What is the cost of developing a slot game?",
    answer:
      "The cost varies based on design, features, and technology used, but generally ranges from mid-level budgets for simple slots to higher investments for advanced, feature-rich titles.",
  },
  {
    question: "Will the slot game work across different devices and platforms?",
    answer:
      "Yes, modern slot games are developed to run seamlessly on desktops, mobile devices, and tablets, ensuring a smooth experience across multiple platforms.",
  },
  {
    question: "What are the stages involved in the slot game development?",
    answer:
      "The stages include concept creation, game design, art and animation, coding and development, testing for fairness and functionality, and final deployment across platforms.",
  },
  {
    question: "What are the security measures implemented in slot games?",
    answer:
      "We implement advanced encryption, secure payment gateways, and RNG certification to protect player data and ensure safe, transparent gameplay.",
  }, 
  {
    question: "Do you offer slot games with cryptocurrency support?",
    answer:
      "Yes, we integrate cryptocurrency support, allowing players to use popular digital currencies for seamless transactions and enhanced flexibility.",
  },   
  {
    question: "How do you ensure fairness in a slot game?",
    answer:
      "Fairness is ensured through certified Random Number Generators (RNGs), regular audits, and compliance with international gaming regulations.",
  },
  {
    question: "What kind of post-launch support is provided after slot game development?",
    answer:
      "We offer continuous support, including updates, bug fixes, performance optimization, LiveOps, and feature enhancements to keep your game competitive.",
  },
  {
    question: "Can my existing slot game be upgraded with new features?",
    answer:
      "Yes, we can enhance your existing slot game with updated graphics, new mechanics, bonus rounds, or multi-platform compatibility based on your needs.",
  },
];

export default function SlotFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = SlotFaqData;

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
