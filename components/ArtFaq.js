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
    <section className="faqsc">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
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
