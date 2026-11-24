"use client";
import { useState } from "react";

const ArtFaqData = [
  {
    question: "What Is The Pricing Structure For Game Art Services?",
    answer:
      "Pricing depends on the difficulty of the work, the quantity of required assets, the project scope, and other factors. A custom quote will be prepared for you according to your specific needs. We can also provide detailed estimates tailored to your specifications and various engagement models. ",
  },
  {
    question: "Can You Handle Both 2d And 3d Art For Games?",
    answer:
      "Absolutely! We have specialized teams in 2D and 3D art that create everything from 2D sprites and backgrounds to fully textured 3D models and rigs, catering to any art style or platform requirement.",
  },
  {
    question: "What Is The Typical Timeline For A Game Art Project?",
    answer:
      "The timeline depends on the number of assets, their complexity, and review cycles. For example, a single-character model may take several days to assemble, while creating several complex assets or a whole pack would take weeks. We provide you with a clear production schedule upfront and deliver according to the milestones agreed upon.",
  },
  {
    question: "Can You Create Art In Different Visual Styles?",
    answer:
      "Yes, indeed. Our artists are proficient and have extensive experience with a wide variety of styles, ranging from hyper-realistic and stylized 3D to pixel art, anime-inspired 2D, low-poly, and more. After all, we adapt to your game's visual identity or create one from scratch with you.",
  },
  {
    question: "Do You Offer Full-Cycle Game Art Production?",
    answer:
      "Yes, we provide the entire spectrum of art production, from initial ideation to final delivery and asset support post-launch. You can rely on our team for end-to-end asset creation, as they can intervene at any stage of project evolution to provide specialized support.",
  },
  {
    question: "Can You Work With Our Existing Game?",
    answer:
      "Yes. We also work on projects that need to improve or extend existing games. Whether that means reworking artwork, updating visual assets, or adding new content, our team will seamlessly integrate into your current pipeline.",
  },
];

export default function ArtFaq() {
  
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = ArtFaqData;

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
