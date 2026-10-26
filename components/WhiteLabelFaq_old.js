"use client";
import { useState } from "react";

const WhiteLabelFaqData = [
  {
    question: "What is a white label casino?",
    answer:
      "A white label casino is a ready-made online gaming platform that businesses can brand and operate as their own. It includes games, payment systems, and licensing support.",
  },
  {
    question: "How much does a white label casino cost?",
    answer:
      "The cost varies depending on features, games, and customization, typically ranging from a few thousand to tens of thousands of dollars for setup and licensing.",
  },
  {
    question: "What is white label software?",
    answer:
      "White label software is a fully developed solution provided by a third party, which you can rebrand and sell or use as your own product or service.",
  },
  {
    question: "Is white label profitable?",
    answer:
      "Yes, it can be profitable due to lower setup costs, faster launch time, and reduced technical burden, allowing more focus on marketing and growth.",
  },
  {
    question: "How does a White Label Casino solution work?",
    answer:
      "You get a complete casino platform with games, payment systems, and support, while you manage branding, user acquisition, and operations.",
  },
  {
    question: "Do White Label Casinos support cryptocurrency payments?",
    answer:
      "Yes, most white label casinos now support both fiat and popular cryptocurrencies for deposits, withdrawals, and gameplay.",
  }, 
  {
    question: "How long does it take to launch a Casino platform?",
    answer:
      "With a pre-built white label solution, launch time typically ranges from 10 to 15 days, depending on branding and integration needs.",
  },   
  {
    question: "What types of games are included in the Casino platform?",
    answer:
      "You get access to slots, poker, blackjack, roulette, baccarat, bingo, and other popular games from top-tier providers.",
  }, 
  {
    question: "What are the main benefits of opting for a White Label Online Casino?",
    answer:
      "It saves time and cost, offers fast market entry, includes essential features, and requires minimal technical expertise to operate.",
  },
  {
    question: "Is technical support included with the White Label Casino?",
    answer:
      "Yes, providers usually include technical support, regular updates, and maintenance to ensure smooth platform performance.",
  },
];

export default function WhiteLabelFaq() {

  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = WhiteLabelFaqData;

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
