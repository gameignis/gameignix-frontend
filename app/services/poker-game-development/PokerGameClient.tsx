"use client";
import Image from "next/image";
import Link from 'next/link';
import PokerPortfolio from "@/components/PokerPortfolio";
import PokerCaseStudies from "@/components/PokerCaseStudies";
import WhyChoosePokerGame from "@/components/WhyChoosePokerGame";
import PokerCloneScript from "@/components/PokerCloneScript";
import PokerGameTools from "@/components/PokerGameTools";
import PokerGameTeams from "@/components/PokerGameTeams";
import Testimonials from "@/components/Testimonials";
import PokerFaq from "@/components/PokerFaq";
import Contact from "@/components/Contact";

export default function PokerGamePageServer() {

  return (
    <>

    <main>

      <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
        <div className="relative z-[5] h-full">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[150px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
              <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                Poker Game Development Company
              </h1>     
              <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
                Build World-Class Poker Games with GameIgnix
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                With our extensive experience and knowledge in Poker app development, our skilled poker game developers deliver robust and 
                high-performance poker games tailored to your business needs. We specialize in custom-built poker games, enriched with stunning 
                visuals and advanced gameplay mechanics, that provide an immersive experience for players.
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
          <Image src="/common/poker-game/poker-game-development-company.webp" alt="Poker Game Development Company" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/poker-game/poker-game-development-company-480.webp" alt="Poker Game Development Company" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
      </section>

      <div className="pt-[100px] md:pt-2 relative overflow-x-hidden md:overflow-visible">

        <section className="pt-0 pb-8" id="about-us">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                GameIgnix - Your Trusted Partner for Poker Game Development
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem]">
                GameIgnix, a leading Poker Game Development Company, is committed to offering feature-rich, secure, and scalable poker game 
                solutions for web and mobile platforms. Our commitment to quality and a client-centered approach has led to a strong success rate, consistently 
                exceeding client expectations and ensuring high satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-[2rem]">
         <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
           <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Poker Game Development Services By GameIgnix
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                We offer custom poker game development services to bring your game vision to life across all platforms, including iOS, Android, 
                web, PC, and consoles. We combine this with an advanced tech stack and unparalleled gaming experience for your users.
              </p>
            </div>

            <div className="mt-[2rem] mb-[3rem]">
             <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      1. Custom Poker Game Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      If you have a unique poker game concept, our bespoke game development services can help you create a custom poker game 
                      that perfectly aligns with your vision.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      2. Turnkey Poker Game Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      We help you to launch your poker platform quickly and efficiently with our end-to-end turnkey solutions. We handle all 
                      the processes from conceptualization to launch.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      3. Poker App Development for Android and iOS
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      We develop custom poker applications for both Android and iOS devices, helping you reach a massive audience with a 
                      performance-rich and engaging poker game app.
                    </p>
                  </div>
                </div>
                <div className="md:w-[42%] flex justify-end absolute right-0 h-full opacity-20 md:relative md:opacity-100">
                  <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                   <Image src="/common/poker-game/poker-game-development-services.webp" alt="Poker Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[470px] object-cover" />
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="my-[1rem] md:mb-[3rem]">
              <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                <div className="flex items-stretch relative rounded-[18px] p-[15px] md:p-[20px_60px_20px_20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)]">
                  <div className="md:w-[42%] flex absolute left-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                      <Image src="/common/poker-game/poker-game-development.webp" alt="Poker Game Development" width={600} height={600} loading="lazy" className="w-full h-full md:h-[480px] object-cover" />
                    </div>
                  </div>
                  <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                    <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        4. RNG-certified Poker Game
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        We help you develop Random Number Generators (RNG) - certified poker games for absolute fairness and unpredictability, 
                        ensuring a trustworthy gaming experience.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        5. Existing Poker Game Add-ons
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        Suppose you are looking forward to enhancing your current poker platform with new features and functionalities. We help 
                        you integrate those features with the industry's best standards.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        6. Secure Payment Gateway Integration
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        We integrate robust payment gateways to support various payment methods, including credit cards, e-wallets, and 
                        cryptocurrencies, ensuring player confidence with features like encryption and fraud detection.
                      </p>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>    
          </div>
        </section>

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
          <Image src="/common/poker-game/game-idea.webp" alt="Got a Game Idea? Let’s Ignite It!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
             <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">              
                Got a Game Idea? Let’s Ignite It!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                From a spark of inspiration to a complete concept, we’ll turn your vision into an immersive game. At GameIgnix, 
                imagination becomes reality.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
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
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
              We turn game ideas into reality. Our portfolio highlights diverse projects across genres, showcasing our versatility and expertise in 
              crafting unique, immersive gaming experiences.  
            </p>
          </div>
          <PokerPortfolio />
        </section>      
      
        <PokerCaseStudies />

        <WhyChoosePokerGame />

        <section className="pb-[4rem]">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Popular Poker Game Variants We Develop
              </h2>
              <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6]">
                Poker games are rich in diverse variants, each offering a unique set of rules and strategic depth. Our game developers specialize 
                in developing over 15 popular poker game variants to cater to different player preferences, ensuring an engaging experience for 
                all types of users.
              </p>
            </div>          
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-[#ff8600a1] rounded-[14px] my-[1rem]">
                <div className="md:col-span-8 min-h-[260px] flex items-end md:block">
                  <div className="p-[20px_30px] relative z-[5]">
                    <h3 className="text-[24px] md:text-[30px] mt-[12px] mb-[26px] text-[#ff8600] font-bold italic">
                      Texas Hold'em
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white mb-[1rem] md:mb-[2rem]">
                    The most popular poker game offers intense strategic play with two-hole cards and five community cards. We provide robust 
                    development for Texas Hold'em, including various table selections, real-money features, and more.
                  </p>
                </div>
                </div>
                <div className="w-full md:col-span-4 flex">
                  <div className="w-full h-full">
                    <Image src="/common/poker-game/texas-holdem.webp" alt="Texas Hold'em" width={300} height={300} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
            </div>              
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] mt-[20px]">
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                      Omaha Poker
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Omaha Poker is also one of the most popular poker variants played by players worldwide. We offer Omaha Hi, Omaha Hi/Lo, and 
                    even 5-Card Omaha variants, providing diverse options to suit our clients' preferences.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                      Seven-Card Stud
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    In this type, players are dealt seven cards throughout the hand, three face down and four face up. Our experts offer a 
                    custom seven-card stud game to ensure timeless appeal and strategic depth.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                      Five-Card Draw
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Our expert poker game developers will provide updated solutions for Five-Card Draw, focusing primarily on its simplicity 
                    and strategic nuances to enhance the engaging gameplay experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] mt-[20px]">
              <div className="w-full md:col-span-6 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                      Razz
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Our experts also specialize in developing Razz poker games, which adhere to the A-to-5 lowball hand rankings, providing a 
                    unique challenge for those who enjoy chasing the lowest hand.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-6 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    Chinese Poker
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    This is the distinctive variant played with 13 cards, where players arrange their cards into three separate poker hands. 
                    We offer Chinese Poker games that attract a large number of players due to their distinctive features.
                  </p>
                </div>
              </div>
            </div>        
          </div>
        </section>

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
          <Image src="/common/poker-game/game-build.webp" alt="Yours Could Be Our Next Big Game!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">              
                Yours Could Be Our Next Big Game!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Got an idea? Our expert team brings your vision to life as a game, exactly as you imagined.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build Your Game">
                <span> Let’s Build Your Game </span>
              </Link>
            </div>
          </div>
        </section> 

        <PokerCloneScript />     

        <PokerGameTools />

        <section className="bg-black shadow-[0_0_200px_0_#000] pt-8 mb-8 md:my-8 overflow-hidden">
          <div className="w-full px-4 mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Proven Process for Poker Game Development Success
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6]">
                Building a successful poker game demands a clear roadmap and proper execution. Our proven process is designed to navigate the complexities 
                of game development efficiently, delivering a high-quality and engaging player experience. Here is a proven methodology that we follow to 
                create the poker game for triumph.
              </p>
            </div>
            <div className="relative flex flex-wrap">
              <div className="afflef">
                <div className="affim">
                  <Image src="/common/poker-game/poker-game-developers.webp" alt="Poker Game Developers" width={700} height={1000} loading="lazy" className="h-auto max-w-full" />
                </div>
              </div>
              <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                <div className="lg:pr-5 md:pr-3 pr-0 relative">
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Requirement Analysis</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      We begin with a solid foundation that involves an in-depth exploration of your vision, target audience, and competitive 
                      landscape. We collaborate closely to define the game mechanics, monetization, and other key aspects.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Art and Design Prototyping</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Our UI/UX designers create wireframes, mockups, and prototypes that define the visual interface and user flow. Alongside 
                      our artists, develop concept art for characters, tables, and environments tailored to your vision.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Development</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      In this part, our coders bring your game to life by building the game's core logic, implementing all features, and 
                      engineering a robust and secure backend. We employ agile methodologies to ensure flexibility and continuous progress.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Quality Assurance</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      After the coding part, our QA experts conduct extensive testing for functionality, performance, security, and compatibility 
                      across various devices and platforms to deliver the best gaming experience.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Launch</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Once the game passes all the tests done by our experts, we handle the deployment to your chosen platforms, whether it's the App Store, 
                      Google Play, web servers, or a custom distribution channel.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Support & Maintenance</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Our commitment extends well beyond the launch. We provide ongoing support, including continuous monitoring and regular updates, to keep 
                      your poker game platform running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PokerGameTeams />

        <Testimonials />

        <PokerFaq />
        
        <section className="py-[2rem]" id="footer">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
              <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Interested in poker game development or need expert support for your game project? Please fill out the form, and let’s start 
                building something extraordinary together.
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