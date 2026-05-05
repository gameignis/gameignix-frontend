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
