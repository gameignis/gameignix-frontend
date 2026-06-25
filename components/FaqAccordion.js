"use client";
import { useState } from "react";

const faqData = [
  {
    question: "1. What types of games do you develop?",
    answer:
      "We specialize in various genres, including action RPGs, strategy games, puzzle adventures, and futuristic racing titles. We develop for mobile, PC, consoles, and VR platforms.",
  },
  {
    question: "2. Can you help with game design if I only have a concept?",
    answer:
      "Absolutely! We offer complete game design and prototyping services to help shape your ideas into playable and engaging experiences.",
  },
  {
    question: "3. Do you work with indie developers or only big studios?",
    answer:
      "We’re happy to collaborate with developers and companies of all sizes, from indie creators to established publishers.",
  },
  {
    question: "4. What platforms do you develop games for?",
    answer:
      "We build games for multiple platforms, including iOS, Android, Windows, macOS, PlayStation, Xbox, Nintendo Switch, and VR devices.",
  },
  {
    question: "5. How do you ensure quality and timely delivery?",
    answer:
      "We utilize an agile development process, incorporating regular updates and client involvement, to ensure we stay on track and maintain high-quality standards.",
  },
  {
    question: "6. Can you provide post-launch support and updates?",
    answer:
      "Yes, we offer maintenance, updates, and live operations support to keep your game running smoothly after launch.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = faqData;

  return (
    <section className="faqsc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
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
