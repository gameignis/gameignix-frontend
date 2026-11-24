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
