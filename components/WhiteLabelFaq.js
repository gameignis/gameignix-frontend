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
