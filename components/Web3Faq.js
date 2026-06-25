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
