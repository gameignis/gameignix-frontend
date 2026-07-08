"use client";
import Image from "next/image";
import Link from 'next/link';
import CasinoPortfolio from "@/components/CasinoPortfolio";
import CasinoCaseStudies from "@/components/CasinoCaseStudies";
import WhyChooseCasinoGame from "@/components/WhyChooseCasinoGame";
import CasinoTypes from "@/components/CasinoTypes";
import CasinoGameTools from "@/components/CasinoGameTools";
import CasinoTeams from "@/components/CasinoTeams";
import Testimonials from "@/components/Testimonials";
import CasinoFaq from "@/components/CasinoFaq";
import Contact from "@/components/Contact";

export default function CasinoGamePageServer() {

  return (
    <>

    <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
      <div className="relative z-[5] h-full">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
            <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
               Casino Game Development Company
            </h1>
            <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
              Crafting Custom Casino Games for Mobile, Web, and Real-Money Platforms
            </p>
            <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
              GameIgnix is a top-tier Casino Game Development Company providing exceptional, innovative, and high-quality casino gaming 
              solutions. With a passion for crafting immersive experiences, we craft custom casino games that captivate global audiences. 
              Every game we develop is built with a focus on creativity, entertainment, and profitability.
            </p>
            <ul className="flex list-none justify-center gap-4 flex-wrap">
              <li>
                <button aria-label="Talk to Experts" data-scroll="#footer" className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white group">
                  <span className="inline-block w-full bg-[#ff8600] px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#e67c03]">
                    Talk to Experts
                  </span>
                </button>         
              </li>
              <li>
                <Link href="/contact" aria-label="Get Quote" className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group">
                  <span className="inline-block w-full bg-black px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#ff8600]">
                    Get Quote
                  </span>
                </Link>
              </li>
            </ul>
          </div>
         </div>
       </div>        
       <Image src="/common/casino-game/casino-game-development-company.webp" alt="Casino Game Development Company" fill priority className="hidden md:block h-full w-full object-cover" />
      <Image src="/common/casino-game/casino-game-development-company-480.webp" alt="Casino Game Development Company" fill priority className="md:hidden h-[480px] object-cover" />
    </section>

    <main className="relative pt-16 md:pt-0 overflow-x-hidden md:overflow-visible">

      <section className="pt-12 md:pt-0 pb-8 md:pb-16" id="about-us">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[1000px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
               GameIgnix: Your Trusted Partner for Casino Game Development
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6]">
              GameIgnix is a globally recognized company in casino game development, offering futuristic and player-centric casino games known 
              for driving player engagement and revenue. We have collaborated with top gaming companies to produce over 50 casino games from 
              scratch. We pride ourselves on delivering exceptional service to our clients, characterized by unwavering quality, innovation, 
              and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[2rem]">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
               Our Casino Game Development Services
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
              At GameIgnix, we offer comprehensive casino game development services to create scalable and customized casino gaming platforms 
              tailored to your vision. Whether you're looking for traditional table games, slot machines, or a brand-new live dealer 
              experience, our team of experts ensures that your game truly shines amidst the competitive iGaming market.
            </p>
          </div>

          <div className="my-[3rem]">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                       1. Full-Cycle Casino Game Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      From idea to release, we cover all stages of casino game development. Our development process encompasses game design, 
                      programming, art production, testing, and post-release support. Our casino game developers use the latest technologies 
                      to create games that engage players and drive retention.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                       2. Custom Casino Game Design
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      Our team works closely with you to create bespoke casino games that are visually stunning, attracting your audience and 
                      aligning with your brand identity. We develop a wide variety of casino games that provide an easy-to-use and engaging 
                      player experience.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                       3. Real Money Casino Game Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      At GameIgnix, we specialize in the development of real-money casino games, delivering secure and scalable solutions 
                      for both web and mobile platforms. Our services encompass RNG integration, payment setup, and comprehensive platform 
                      development, with a focus on compliance and immersive experiences that enhance player retention and revenue.
                    </p>
                  </div>
                  </div>
                  <div className="md:w-[42%] flex justify-end absolute right-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                      <Image src="/common/casino-game/casino-game-development-services.webp" alt="Casino Game Development Services" width={600} height={600} className="w-full h-full md:h-[560px] object-cover" />
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="my-[3rem]">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch relative rounded-[18px] p-[15px] md:p-[20px_60px_20px_20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)]">
                  <div className="md:w-[42%] flex absolute left-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                      <Image src="/common/casino-game/casino-game-development.webp" alt="Casino Game Development" width={600} height={600} className="w-full h-full md:h-[520px] object-cover" />
                    </div>
                  </div>
                  <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                    <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        4. Slot Game Development
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        With experience in creating interactive slot games, our team develops games featuring exciting features such as 
                        free spins, bonus rounds, and progressive jackpots. We have expertise in designing attractive games with high-quality 
                        animations, symbols, and sound effects that engage players.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        5. Table Game Development
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        Our expert casino game developers provide full-cycle development for classic table games like blackjack, roulette, 
                        baccarat, poker, and more. Every game is developed with immersive gameplay mechanics and high-quality graphics to 
                        provide a whole casino ambiance for players.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        6. Live Casino Games
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        Our live casino games feature professional dealers and high-definition streaming, combined with interactive features, 
                        allowing players to engage in real-time gameplay and experience the thrill of a real-world casino.
                      </p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>  

          <div className="mt-[3rem] md:mb-[1.5rem]">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          7. Mobile Casino Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          We craft casino games specifically designed for the mobile platform, offering a seamless gaming experience to both 
                          Android and iOS users. Providing smooth gameplay, high-quality visuals, and quick loading times, our games are 
                          compatible with smartphones, tablets, and PCs.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          8. Casino Game Testing and QA
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Our testing team conducts thorough bug checks and multiple testing procedures to ensure the game's smooth performance 
                          across various devices. The game releases undergo stability tests, usability of the user interface, security, and 
                          compatibility in various OSs to guarantee a high-quality release.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          9. Game Monetization and Optimization
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Understanding the significance of revenue generation in casino games, our team implements various monetization methods, 
                          including in-app purchases, progressive jackpots, and ad integrations, so that your game is both enjoyable to play and 
                          profitable for you.
                        </p>
                    </div>
                  </div>
                  <div className="md:w-[42%] flex justify-end absolute right-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                      <Image src="/common/casino-game/casino-game-development-agency.webp" alt="Casino Game Development Agency" width={600} height={600} className="w-full h-full md:h-[560px] object-cover" />
                    </div>
                  </div>
              </div>
            </div>
          </div>  
      
        </div>
      </section>

      <section className="pt-[3rem] pb-[7rem]" id="portfolio">
        <div className="text-center md:w-[90%] mx-auto w-full">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Our Game Portfolio
          </h2>
          <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
            Recent Projects We Have Completed
          </p>
         <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] md:mb-[2rem] max-w-[96%] mx-auto">
            Explore the games that define us. Each one is crafted with vision, driven by creativity, and powered by next-gen technology.
          </p>
        </div>
        <CasinoPortfolio />
      </section>

      <CasinoCaseStudies />

      <WhyChooseCasinoGame />

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-0 md:mb-8">
        <Image src="/common/casino-game/game-idea.webp" alt="Got a Game Idea? Let’s Set It on Fire!" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
            <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
             <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Got a Game Idea? Let’s Set It on Fire!
             </h2>
             <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">                Whether it is a smallest spark or a complete concept, we turn ideas into reality. At GameIgnix, imagination transforms into 
                immersive gaming worlds.
             </p>
             <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
             </Link>
          </div>
        </div>
      </section>

      <CasinoTypes />

      <CasinoGameTools />

      <section className="bg-black shadow-[0_0_200px_0_#000] md:pt-8 mb-8 md:mb-4 mt-4 md:mt-8 overflow-hidden">
       <div className="w-full px-4 mx-auto">
         <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
               Our Casino Game Development Process
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-0">
              We follow a structured, agile process to guarantee that every casino gaming product is delivered with precision and quality, 
              emphasizing player engagement and game optimization. Our development process consists of the following phases.
            </p>
          </div>
          <div className="relative flex flex-wrap">
           <div className="afflef">
             <div className="affim">
                <Image src="/common/casino-game/casino-game-developers.webp" alt="Casino Game Developers" width={700} height={1000} className="h-auto max-w-full" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
              <div className="lg:pr-5 md:pr-3 pr-0 relative">
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept and Ideation</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our team collaborates with you to identify and research market trends, creating a game concept that is innovative and 
                    unique. We research player behavior and competition to develop creative ideas that will capture attention.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre-Production and Planning</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Game mechanics design, technical documentation, wireframes, and project roadmaps fall under this step. We finalize the 
                    core gameplay loop, storylines, and any distinguishing features that make the game unique.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Design and Prototyping</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our design team focuses on the visual aspects, including concept art, animations, and 3D models, while the development 
                    team concentrates on creating interactive prototypes to refine gameplay mechanics.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Development and Programming</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our development team builds the game, implementing key features which include payout algorithms, RNG systems, player 
                    progression, and multiplayer features.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Quality Assurance and Testing</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    In our gaming environment, all systems undergo intensive testing to ensure they function correctly, free from bugs and 
                    glitches. We also ensure compliance with gaming regulations and perform thorough audits, especially for RNG-based games.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Launch and Post-Launch Support</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    When your game is launched correctly, we are here to provide all the post-launch support, including updates and feature 
                    enhancements, to keep your game filled with seasonal events and fresh content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CasinoTeams />

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
        <Image src="/common/casino-game/game-build.webp" alt="Hire Expert Game Developers Today" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
            <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
             <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
               Hire Expert Game Developers Today
             </h2>
             <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Power up your game development with skilled professionals who bring speed, creativity, and passion to every project. At GameIgnix, 
              our team becomes your team.
             </p>
             <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Hire Game Experts">
               <span> Hire Game Experts </span>
             </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <CasinoFaq />
      
       <section className="py-[2rem]" id="footer">
         <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Interested in casino game development or need expert guidance to refine your game development strategy? Our team is just a 
              message away. Please fill out the form, and let’s build something extraordinary together.
            </p>
          </div>        
         <Contact />    
        </div>
      </section> 

    </main>

    </>
  );
}