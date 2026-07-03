"use client";
import Image from "next/image";
import Link from 'next/link';
import SlotPortfolio from "@/components/SlotPortfolio";
import SlotCaseStudies from "@/components/SlotCaseStudies";
import WhyChooseSlotGame from "@/components/WhyChooseSlotGame";
import SlotGameFeatures from "@/components/SlotGameFeatures";
import SlotGameTools from "@/components/SlotGameTools";
import SlotGameTeams from "@/components/SlotGameTeams";
import Testimonials from "@/components/Testimonials";
import SlotFaq from "@/components/SlotFaq";
import Contact from "@/components/Contact";

export default function SlotGamePageServer() {

  return (
    <>

      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[150px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                  Slot Game Development
                </h1>     
                <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  GameIgnix Crafting Engaging, High-Performance Slot Games for the Global Market
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  At GameIgnix, we transform the excitement of slot machines into visually captivating and technically flawless digital experiences. 
                  Whether you envision a nostalgic 3-reel slot or a feature-rich multi-line video slot, our team ensures every spin delivers 
                  entertainment, fairness, and profitability.
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
          <Image src="/common/slot-game/slot-game-development-company.webp" alt="Slot Game Development Company" fill priority className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/slot-game/slot-game-development-company-480.webp" alt="Slot Game Development Company" fill priority className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="pt-16 md:pt-4">

            <section className="pt-0 pb-8" id="about-us">
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
                <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                    GameIgnix: Top-Rated Slot Game Development Company
                  </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                    GameIgnix is a premier Slot Game Development Company committed to creating titles that combine engaging gameplay, attractive visuals, and 
                    balanced reward systems. Our expertise spans both online and mobile slot development, ensuring our games are optimized for performance, 
                    compliance, and long-term player engagement.
                  </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                    By blending creativity with mathematical precision, we deliver slot games that meet market demands and captivate audiences globally. 
                    We work closely with clients to translate their ideas into market-ready titles that stand out in the competitive slot gaming industry.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-[2rem]">
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
                <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                  <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                    Our Slot Game Development Services
                  </h2>
                  <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                    At GameIgnix, we provide end-to-end slot game development services that bring your ideas to life with precision and 
                    creativity, covering everything from classic slot experiences to modern, feature-rich titles.
                  </p>
                </div>
                
                <div className="my-[3rem]">
                  <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                    <div className="flex items-stretch rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                      <div className="md:w-[58%] w-full relative z-[10]">
                        <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                          <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                            1. Full-Cycle Slot Game Development
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                            We manage the complete development journey from initial concept and math modeling to coding, testing, 
                            and launch. This ensures your slot game is built with a strong creative foundation and delivered with 
                            technical excellence.
                          </p>
                          <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                            2. Slot Game Art & Animation
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                            Our artists design high-quality symbols, reels, backgrounds, and animations that visually enhance 
                            gameplay. Every asset is crafted to align with your chosen theme and create an immersive visual experience 
                            for players.
                          </p>
                          <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                            3. Math & RNG Development
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                            We create precise payout structures and integrate certified RNG systems to ensure fairness. This keeps 
                            gameplay engaging while complying with industry regulations in multiple jurisdictions.
                          </p>
                        </div>
                        </div>
                        <div className="md:w-[42%] flex justify-end absolute right-0 h-full opacity-20 md:relative md:opacity-100">
                           <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                             <Image src="/common/slot-game/slot-game-development-services.webp" alt="Slot Game Development Services" width={600} height={400} className="w-full h-full md:h-[480px] object-cover" />
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
                          <Image src="/common/slot-game/slot-game-development.webp" alt="Slot Game Development" width={600} height={600} className="w-full h-full object-cover" />
                        </div>
                        </div>
                        <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                          <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                            <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                              4. UI/UX Design for Slot Games
                            </h3>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                              Our designers create interfaces that are visually appealing yet highly intuitive. Players enjoy seamless 
                              navigation, simple controls, and clear prompts that make every spin satisfying.
                            </p>
                            <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                              5. Slot Game Porting
                            </h3>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                              We adapt your existing slot games to new devices, platforms, or operating systems. Our team ensures 
                              performance, graphics, and features remain consistent across all versions.
                            </p>
                            <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                              6. Slot Game Testing & QA
                            </h3>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                              Our QA specialists run exhaustive tests for functionality, compatibility, and compliance. This guarantees 
                              a bug-free, smooth, and enjoyable player experience.
                            </p>
                            <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                              7. Post-Launch LiveOps
                            </h3>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                              We keep your game relevant with content updates, seasonal events, and new bonus features. This helps retain 
                              players and maintain steady revenue after the initial launch.
                            </p>                          
                        </div>
                      </div>                  
                    </div>
                  </div>
                </div>    
              </div>
            </section>

            <section className="pt-[1rem] pb-[7rem]">
              <div className="text-center md:w-[90%] mx-auto w-full">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Game Portfolio
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
                  Recent Projects We Have Completed
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
                  Here are the recent projects we have completed, showcasing our creativity, innovation, and expertise in delivering high-quality 
                  gaming solutions across multiple platforms.
                </p>
              </div>
              <SlotPortfolio />
            </section> 

            <SlotCaseStudies />

            <WhyChooseSlotGame />

            <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
              <Image src="/common/slot-game/game-idea.webp" alt="Build Winning Slot Games with GameIgnix" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 z-[1] bg-black/40" />
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                  Build Winning Slot Games with GameIgnix
                </h2>
                <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Turn your ideas into high-performing slot games crafted by a trusted slot game development studio. From concept to launch, we 
                  deliver creativity, fairness, and technology that players love.
                </p>
                <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build">
                  <span> Let’s Build </span>
                </Link>
                </div>
              </div>
            </section>

            <section className="pb-[4rem]">
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
                <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                  <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                    Types of Slot Games We Develop
                  </h2>
                  <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6]">
                    We develop a variety of slot game types to cater to different markets, themes, and player preferences. Each type is designed to 
                    deliver unique gameplay experiences.
                  </p>
                </div>          
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-[#ff8600a1] rounded-[14px] my-[1rem]">
                  <div className="md:col-span-8 md:min-h-[260px] flex items-end md:block">
                    <div className="p-[20px_30px] relative z-[5]">
                      <h3 className="text-[24px] md:text-[30px] mt-[12px] mb-[26px] text-[#ff8600] font-bold italic">
                          Classic 3-Reel Slots
                      </h3>
                      <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white mb-[1rem] md:mb-[2rem]">
                        Traditional slots with simple gameplay and nostalgic appeal are perfect for players who enjoy straightforward spinning action.
                      </p>
                    </div>
                    </div>
                    <div className="w-full md:col-span-4 flex">
                      <div className="w-full h-full">
                        <Image src="/common/poker-game/texas-holdem.webp" alt="Classic 3-Reel Slots" width={300} height={300} className="w-full h-full object-cover" />
                      </div>
                    </div>
                </div>
                  
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] mt-[20px]">
                  <div className="w-full md:col-span-4 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                          Video Slots with Multiple Paylines
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Modern slots feature multiple winning lines, rich animations, and interactive bonus features for more dynamic gameplay.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:col-span-4 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                          Progressive Jackpot Slots
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Games where the jackpot value grows with every spin, creating high anticipation and attracting players seeking big wins.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:col-span-4 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                          3D Animated Slots
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Visually stunning slots with lifelike 3D graphics and smooth animations that create an immersive gaming environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 subgrids">
                  <div className="w-full md:col-span-6 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                          Branded & Licensed Theme Slots
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Custom slots featuring popular brands, movies, or characters, designed to tap into existing fan bases.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:col-span-6 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                        Mobile-First Slots
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Optimized for smartphones and tablets, offering seamless gameplay on smaller screens without compromising quality.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:col-span-6 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                        Social Casino Slot Games
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Free-to-play slot games are built for entertainment and social engagement, with virtual rewards and leaderboards.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:col-span-6 flex">
                    <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                      <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                        VR Slot Experiences
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                        Cutting-edge slots using virtual reality to immerse players in a fully interactive casino environment.
                      </p>
                    </div>
                  </div>
                </div>        
              </div>
            </section>

            <SlotGameFeatures />

            <SlotGameTools />

            <section className="bg-black shadow-[0_0_200px_0_#000] pt-4 my-8 overflow-hidden">
              <div className="w-full px-4 mx-auto">
                <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
                  <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                    Our Result-Driven Slot Game Development Process
                  </h2>
                  <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                    At GameIgnix, our slot game development process is designed to be transparent, efficient, and creative. We follow a structured, 
                    step-by-step approach that ensures every game meets both player expectations and business goals.
                  </p>
                </div>
                <div className="relative flex flex-wrap">
                  <div className="absolute left-0 top-0 z-[1] w-full lg:w-auto flex-none h-full lg:h-auto opacity-20 md:opacity-100">
                    <div className="relative -top-[120px] -ml-[15px] h-full lg:h-auto">
                      <Image src="/common/slot-game/slot-game-developers.webp" alt="Slot Game Developers" width={700} height={1000} className="block object-cover w-full h-full md:h-auto md:max-w-full" />
                    </div>
                  </div>
                  <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                    <div className="lg:pr-5 md:pr-3 pr-0 relative">
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept & Ideation</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          We start by understanding your target audience, market trends, and brand goals. This helps us conceptualize a unique 
                          slot game idea that stands out and appeals to your players.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre-Production</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          Our team creates a Game Design Document (GDD), a payout table, wireframes, and early prototypes. This ensures the game’s 
                          mechanics, features, and visuals are well-planned before development begins.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Art & Asset Creation</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          Our artists design reels, symbols, backgrounds, and animations, aligning them perfectly with the game’s theme. Every asset 
                          is optimized for smooth, high-quality performance across devices.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Programming & Integration</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          Developers implement the game’s logic, RNG systems, and special features. We also integrate payment systems and back-end 
                          tools for real-money and social slot experiences.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Testing & Compliance</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          Our QA team tests across devices, browsers, and operating systems to ensure smooth performance. We also check compliance 
                          with gaming regulations and RNG fairness standards.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Deployment</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          We publish your slot game to online casinos, mobile stores, or proprietary platforms. The process includes performance 
                          optimization for quick loading and maximum visibility.
                        </p>
                      </div>
                      <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] px-[20px] py-[2px]">
                        <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Post-Launch Support</h3>
                        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                          Our LiveOps and update services add fresh content, seasonal events, and bonuses to keep players engaged long after launch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <SlotGameTeams />

            <section className="py-12">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Our Engagement Models</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                    We offer flexible collaboration models so clients can choose the best way to work with our team. Each model is tailored to suit different 
                    budgets, timelines, and project complexities.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                     <Image src="/common/mobile-game/dedicated-development-team.webp" alt="Dedicated Development Team" width={640} height={350} className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Dedicated Development Team
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      A team of designers, developers, and testers works exclusively on your project. This ensures complete focus, consistent communication, 
                      and a long-term collaborative approach. 
                    </p>
                  </div>
                  </div>
                  <div className="flex">
                   <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/mobile-game/team-extension.webp" alt="Team Extension" width={640} height={350} className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Team Extension
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      We provide skilled slot game experts to strengthen your existing development team. This model is ideal for accelerating timelines without 
                      the overhead of full-time hiring.
                    </p>
                  </div>
                  </div>
                  <div className="flex">
                    <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                     <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                        <Image src="/common/mobile-game/project-based-model.webp" alt="Project-Based Model" width={640} height={350} className="h-full w-full object-cover" />
                      </div>
                      <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                        Project-Based Model
                      </p>
                      <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                        We handle your slot game as a complete, self-contained project with a fixed scope, budget, and delivery date. This approach 
                        is best suited for clients with precise requirements and timelines. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
              <Image src="/common/slot-game/game-build.webp" alt="Hire the Experts You Need" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 z-[1] bg-black/40" />
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                   Hire the Experts You Need
                </h2>
                <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Scale your slot game project with the right talent, from designers to developers, and hire exactly the resources 
                  you need without the hassle of full-time hiring.
                </p>
                <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build Your Game">
                  <span> Let’s Build Your Game </span>
                </Link>
                </div>
              </div>
            </section> 

            <Testimonials />

            <SlotFaq />
            
            <section className="py-[2rem]" id="footer">
             <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Need slot game development expertise or strategic guidance for your project? Connect with GameIgnix today, 
                  and we’ll help you shape your next success story.
                  </p>
                </div>        
              <Contact />    
              </div>
            </section> 

          </div>
        

      </main>

        
    

    </>
  );
}