"use client";
import { useState } from "react";

const ServicesFaqData = [
  {
    question: "How much does it cost to develop a game?",
    answer:
      "Payment for game development varies according to the scope, complexity, and platform of the individual project. For its transparency and fairness, we prepare a quote for you after the initial consultation and analysis of the project.",
  },
  {
    question: "Do you support NFT, blockchain, and metaverse game development?",
    answer:
      "Yes. We specialize in NFT integration, blockchain-based ownership systems, and metaverse world-building to help you capitalize on the next wave and create truly immersive gameplay experiences.",
  },
  {
    question: "Can you help with art and animation even if we already have a game concept?",
    answer:
      "Absolutely! Our team of artists, modelers, and animators can assist you with concept art, 3D modeling, animation, and environment creation, all tailored to suit your technical and artistic needs.",
  },
  {
    question: "How long does it take to develop the game with GameIgnix?",
    answer:
      "Depending on the project's complexity, timelines vary. Developing a small mobile game typically takes 2 to 4 months, whereas developing complex PC/console or metaverse games can take 6 to 12 months or longer. You would be given a clear roadmap in the planning phase.",
  },
  {
    question: "Do you offer end-to-end game development or just specific components of it?",
    answer:
      "Both. We provide full-cycle game development from conception to post-launch support. We offer full-cycle game development, from concept to post-launch support. However, if you need help with programming, art, animation, or QA, we can seamlessly integrate into your existing pipeline.",
  },
  {
    question: "Can you help integrate monetization features, such as ads or in-app purchases?",
    answer:
      "We employ various monetization systems, including in-app purchases, ads, subscription models, and reward-based systems. We can tailor the integration to suit your needs and ensure it is naturally integrated without disrupting gameplay.",
  }, 
  {
    question: "Can you work with an existing game or codebase?",
    answer:
      "Yes, we can step in at any stage of development, whether it's improving an existing game, fixing bugs in the code, optimizing performance, or even adding features to an existing codebase. Our team is skilled at making the process smooth and delivering high-quality results.",
  },
];

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = ServicesFaqData;

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
