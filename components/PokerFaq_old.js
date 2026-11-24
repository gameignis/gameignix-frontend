"use client";
import { useState } from "react";

const PokerFaqData = [
  {
    question: "How long does it take to develop a Poker game?",
    answer:
      "On average, a fully functional Poker game can take around 2 to 6 months to develop. This development timeline is required entirely depending on the game's complexity, features, and functionalities required.",
  },
  {
    question: "Can you develop Poker games for both mobile and web platforms?",
    answer:
      "Yes, we develop fully optimized Poker games that support various platforms, including Android, iOS, and web-based platforms. We follow a cross-platform development approach that enables players across different platforms to enjoy the same high-quality gaming experience.",
  },
  {
    question: "Do you support real-money Poker game development?",
    answer:
      "Yes, we provide real-money poker game development services to create poker games that are integrated with real-money gaming (RMG) features, including wallets, payment gateways, and anti-fraud systems. Depending on your target region and legal requirements, our professionals offer customized poker game solutions tailored to meet your specific needs.",
  },
  {
    question: "What Poker game variations can you develop?",
    answer:
      "We develop various types of Poker variants, including Texas Hold’em, Omaha, 7-Card Stud, and custom rule-based games. If you have any unique game ideas, our experts can help you bring them to life.",
  },
  {
    question: "How do you ensure fair play and security in Poker games?",
    answer:
      "To ensure fair play and security in the game, we utilize advanced Random Number Generator (RNG) systems, a secure backend architecture, and anti-cheating algorithms. Our robust security practices safeguard your game against security breaches and attacks.",
  },
  {
    question: "Can I customize the game features and design?",
    answer:
      "Absolutely! We provide end-to-end customization in terms of UI/UX design, gameplay rules, branding elements, and monetization features. This enables you to launch a robust game that aligns perfectly with your business goals and objectives.",
  }, 
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we provide continuous support, regular updates, and ongoing maintenance to ensure your Poker game remains reliable, secure, and competitive. We continuously monitor market trends and evolving player preferences to ensure your game remains updated with the latest features, technologies, and game trends.",
  },   
  {
    question: "How much does a Poker game development cost?",
    answer:
      "The poker game development costs approximately $10,000 to $50,000. The cost may fluctuate based on the scope, features, and platform. We also provide flexible pricing models according to your budget and requirements.",
  },
  {
    question: "Why should I choose your team for Poker game development?",
    answer:
      "We are known for building next-generation poker games that feature engaging gameplay mechanics and maximize player engagement. Our experienced team brings a powerful blend of expertise, scalability, and creativity to deliver immersive and future-ready gaming experiences.",
  },
];

export default function PokerFaq() {

  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = PokerFaqData;

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
