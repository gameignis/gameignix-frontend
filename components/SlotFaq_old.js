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
