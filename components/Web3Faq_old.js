"use client";
import { useState } from "react";

const Web3FaqData = [
  {
    question: "How much does it cost to develop a Web3 Game?",
    answer:
      "The cost of developing a Web3 game depends on its features, complexity, blockchain integration, and level of customisation. It usually costs between $20,000 and $150,000. We offer flexible pricing models tailored to your project's needs and goals.",
  },
  {
    question: "What’s the timeframe for developing a basic Web3 game?",
    answer:
      "The timeframe for a basic variant is around 3 to 4 months, whereas a full-scale web3 game typically takes 6 to 12 months. It depends on the complexity of your project.  We follow an agile development approach, with predefined outcomes.  ",
  },
  {
    question: "How do you ensure the fairness and security of Web3 games?",
    answer:
      "We build Web3 games with security at the core. From secure wallet connections and audited smart contracts to encrypted APIs and anti-cheat tools, everything is designed to protect players and their data. We also conduct regular tests and code checks to ensure the game remains secure and fair.",
  },
  {
    question: "Can you integrate NFT marketplaces and crypto wallets into the game?",
    answer:
      "We set up NFT minting and in-game marketplaces that connect your game with popular cryptocurrency wallets, including MetaMask, WalletConnect, and Phantom. We also provide expert guidance to ensure everything aligns with your business objectives.",
  },
  {
    question: "What are the most preferred blockchains for web3 game development?",
    answer:
      "We work with blockchains such as Ethereum, Polygon, Solana, and Immutable X. We will help you choose the most suitable one based on speed, cost, and community support.",
  },
  {
    question: "Can I start with a small MVP and scale later?",
    answer:
      "We build MVPs to test basic gameplay, NFT features, and player engagement. This helps you to decide before investing in full development.",
  }, 
  {
    question: "Do you provide cost estimation before project kickoff?",
    answer:
      "We will share a clear breakdown of the cost, timeline, and resources needed after the initial discussion and analysis. We’ll also include the additional fees or third-party costs, if any.",
  },   
  {
    question: "Do you offer cross-platform Web3 game development?",
    answer:
      "We build Web3 games that work smoothly on mobile, desktop, and web browsers. Our team ensures that the experience remains consistent everywhere, with blockchain features seamlessly integrated.",
  },
  {
    question: "What type of post-launch support do you offer?",
    answer:
      "We provide ongoing support to ensure your game runs smoothly and efficiently. This includes server control, bug fixing, adding new features, version upgrades, and managing your player community. Our goal is to keep your game secure, fun, and adaptable.",
  },
];

export default function Web3Faq() {
  
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = Web3FaqData;

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
