"use client";
import { useState } from "react";
import Image from "next/image";

const WhiteLabelTeamsData = [
  {
    question: "Fully Branded Website",
    answer:
      "Get a professionally designed website that reflects your brand. We customize layout, color scheme, and content to make it uniquely yours.",
  },
  {
    question: "Dashboard for Admin & Users",
    answer:
      "Manage operations and user activities from an innovative, intuitive dashboard. Both admins and players enjoy real-time access and control.",
  },
  {
    question: "Game Provider Integration",
    answer:
      "Seamlessly connect with top gaming providers for diverse, high-quality content. We ensure smooth performance and instant game availability.",
  },
  {
    question: "Payment Gateway Integration",
    answer:
      "Enable secure and flexible payment methods for players worldwide. Our integration supports cards, e-wallets, and bank transfers.",
  },
  {
    question: "Crypto Wallet Integration",
    answer:
      "Allow players to deposit and withdraw using popular cryptocurrencies. The wallet system is fast, secure, and easy to manage.",
  },
  {
    question: "Player KYC/AML Tools",
    answer:
      "Keep your platform compliant with built-in identity and verification tools. Prevent fraud and meet global regulatory standards.",
  },   
  {
    question: "Live Dealer Games",
    answer:
      "Offer real-time casino action with high-quality streaming. Players can enjoy interactive experiences with professional dealers.",
  },
  {
    question: "Sportsbook Integration",
    answer:
      "Add a sports betting feature to expand your platform’s appeal. Cover major leagues, live events, and multiple betting options.",
  },
  {
    question: "Bonus & Loyalty System",
    answer:
      "Reward players with automated bonus programs and loyalty rewards. Keep users engaged and boost long-term retention.",
  },   
  {
    question: "Real-time Analytics & Report",
    answer:
      "Track performance with in-depth analytics and reporting tools. Monitor player activity, revenue, and game popularity in real time.",
  }, 
  {
    question: "Dedicated Account Manager",
    answer:
      "Receive personalized guidance from an expert who understands your goals. They assist with operations, growth, and strategy.",
  }, 
  {
    question: "24/7 Technical Support",
    answer:
      "Our support team is available at all times to handle any issues. We ensure your platform runs smoothly, day and night.",
  },
  {
    question: "Multi-lingual Support",
    answer:
      "Cater to a global audience with language options built into the system. Players can enjoy the experience in their preferred language.",
  }, 
  {
    question: "Multi-currency Support (Crypto & Fiat)",
    answer:
      "Support both cryptocurrency and traditional currency transactions. Players enjoy convenience while you reach broader markets.",
  }, 
  {
    question: "Anti-Fraud & Risk Management Tools",
    answer:
      "Protect your platform with automated fraud detection and risk controls. Stay secure with real-time monitoring and prevention systems.",
  },
];

export default function WhiteLabelTeams() {
  
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const MidCol = WhiteLabelTeamsData;

  return (
    <section className="py-[1rem] md:py-[3rem]">
      <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-6">
              <div className="sticky top-[20px]">
                <div className="w-full">
                <h2 className="uppercase text-left mt-4 mb-5 text-[24px] leading-[32px] md:text-[30px] lg:text-[32px] md:leading-[40px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                   Our White Label Casino Solution Covers Everything
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  From front-end design to back-end operations, we deliver a complete, turnkey casino platform. Every tool and feature is 
                  tailored to meet your business needs.
                </p>
                </div>
                <div className="my-[1rem] pr-6">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="White Label Casino Solution" width={640} height={350} loading="lazy" className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
           </div>
           <div className="md:col-span-6">
             <div className="w-full space-y-3">
                {MidCol.map((item, index) => (
                  <div key={index} className="mb-3 border-b border-white bg-transparent rounded-none pt-[10px] pb-[17px]">
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[32px] font-semibold">
                      <button type="button" aria-label={item.question} onClick={() => toggleItem(index)} className="relative w-full pl-[60px] pr-[10px] py-[17px] text-left text-white">
                        <Image src="/common/arrow1.webp" alt="arrow" width={34} height={34} loading="lazy" className={`absolute left-[2px] top-[16px] transition-transform duration-300 ease-in-out ${ openIndex === index ? "rotate-180" : "rotate-0" }`} /> 
                        {item.question}
                      </button>
                    </h3>
                    {openIndex === index && (
                      <div className="border-t border-[#ff8600] px-[10px] py-4 text-[15px] md:text-[16px] leading-[24px] text-white" dangerouslySetInnerHTML={{ __html: item.answer }} />
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
