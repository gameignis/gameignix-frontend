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
  const RigCol = WhiteLabelTeamsData;

  return (
    <section className="teamsc affix_sc">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-6">
              <div className="teamlef affix_lef">
                <div className="cm-head2">
                <h2 className="cm-title font-bold uppercase">
                   Our White Label Casino Solution Covers Everything
                </h2>
                <p className="lead text-gray-400">
                  From front-end design to back-end operations, we deliver a complete, turnkey casino platform. Every tool and feature is 
                  tailored to meet your business needs.
                </p>
                </div>
                <div className="teamim">
                  <Image src="/common/casino-game/casino-game-app.webp" alt="White Label Casino Solution" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
           </div>
           <div className="md:col-span-6">
             <div className="accord-flush w-full">
              {RigCol.map((item, index) => (
                <div key={index} onClick={() => toggleItem(index)} className={`accord-item faq-item mb-3 ${ openIndex === index ? "text-primary" : "" }`}>
                  <h3 className="accordion-header font-semibold">
                  <button onClick={() => toggleItem(index)} type="button" aria-label={item.question}
                    className={`accord-btn relative text-left w-full fw-medium text-white ${openIndex === index ? "" : "toggled"}`}>
                    {item.question}                    
                  </button>
                  </h3>
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
