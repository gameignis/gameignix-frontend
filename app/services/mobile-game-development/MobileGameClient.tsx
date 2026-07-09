"use client";
import Image from "next/image";
import Link from 'next/link';
import Portfolio from "@/components/Portfolio";
import MobileCaseStudies from "@/components/MobileCaseStudies";
import WhyChooseMobileGame from "@/components/WhyChooseMobileGame";
import MobileGameTools from "@/components/MobileGameTools";
import MobileTeams from "@/components/MobileTeams";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function MobileGamePageServer() {

  return (
    <>

      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                  Mobile Game Development Company
                </h1>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  As your trusted mobile game development company, we are committed to delivering custom mobile gaming solutions across multiple 
                  platforms. Every mobile game we craft is a testament to our dedication to creativity, innovation, and exceptional quality, designed 
                  to resonate with players and stand out in the competitive mobile gaming market.
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
            <Image src="/common/mobile-game/mobile-game-development-company.webp" alt="Mobile Game Development Company" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
            <Image src="/common/mobile-game/mobile-game-development-company-480.webp" alt="Mobile Game Development Company" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="relative pt-8 md:pt-2 overflow-x-hidden md:overflow-visible">

          <section className="pt-0 pb-8" id="about-us">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Your Trusted Partner for Mobile Game Development
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem]">
                  GameIgnix is a dynamic and creative mobile game development studio with extensive experience in creating premium mobile games 
                  that engage global players. Our commitment to innovation, quality, and customer satisfaction has led us to establish long-term 
                  partnerships within the gaming market, ensuring you're in good hands.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-[2rem] pb-[4rem]">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Mobile Game Development Services
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                  We specialize in delivering end-to-end mobile game development services infused with creativity, innovation, and player-focused 
                  design, ensuring every game is the next big success. Here is a glimpse of our suite of game development solutions.
                </p>
              </div>
              <div className="my-8 py-4">
                <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[58%] w-full relative z-[10]">
                      <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          1. Full-cycle Mobile Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our full-cycle mobile game development service covers every phase of game development, from initial conceptualization and 
                          prototyping to coding and post-launch updates. Our skilled experts combine innovative technologies with customer-centric 
                          design and creativity to craft high-quality games that embody your vision.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          2. Mobile Game Art and Animation
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our team specializes in creating technically and visually impressive game art, including 2D/3D assets, characters, 
                          environments, and other elements, with high-resolution quality textures and graphics. We incorporate realism into mobile 
                          games by creating an engaging illusion of movement for game assets, coupled with smoothness and fluidity.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          3. Mobile Game UI/UX Design
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our mobile game UI/UX design service is crucial in creating intuitive interfaces and layouts that naturally guide players 
                          through the game. By concentrating on designing user-friendly input controls and navigation elements, we ensure smooth 
                          transitions and interactions, ultimately enhancing the player's overall experience.
                        </p>
                      </div>
                      </div>
                      <div className="md:w-[42%] flex absolute right-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                        <div className="flex flex-col w-full h-full flex flex-column">
                          <Image src="/common/mobile-game/mobile-game-development-services.webp" alt="Mobile Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pb-8">
               <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[42%] flex absolute left-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                      <div className="flex flex-col w-full h-full flex flex-column">
                        <Image src="/common/mobile-game/game-app-development-company.webp" alt="Game App Development Company" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                      </div>
                    </div>
                    <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                      <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          4. Mobile Game Porting
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our mobile game porting service helps you maximize your game's reach and audience. Be it porting your game from iOS to 
                          Android or from one gaming console to another, our experts will handle all the technical complexities while ensuring 
                          consistent performance and playability across various platforms.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          5. LiveOps Services
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our LiveOps services, which include dynamic in-game events, real-time updates, and customized content, are designed to 
                          keep your game fresh and engaging long after its launch. By regularly monitoring player behavior and in-game data, we can 
                          maintain long-term player retention and monetization, ensuring your game remains a player favorite.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                          6. Mobile Game Testing
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          Our QA teams conduct meticulous tests on mobile games to identify and resolve bugs, glitches, and performance issues 
                          across multiple devices and platforms. From manual to automated testing, we cover every aspect, including functionality, 
                          compatibility, and user interface, ensuring a bug-free release.
                        </p>
                        </div>
                    </div>                  
                  </div>
                </div>
              </div>    
            </div>
          </section>

          <section className="pt-0 pb-16" id="about-us">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  We Develop Mobile Games For Diverse Platforms
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  Our talented mobile game developers utilize advanced technologies and programming techniques to create high-resolution, 
                  interactive mobile games across various platforms, engaging millions of players. 
                </p>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                 <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        iOS
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        We excel in creating exceptional iOS games with responsive user interfaces, high-end graphics, visually stunning designs, 
                        and fluid animations, utilizing Swift to meet Apple's quality benchmarks and optimize for iPhone and iPad devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">              
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        Android
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        Our team of highly skilled Android game developers is experienced in developing games that are fully compatible with a 
                        wide range of Android devices, supporting all resolutions and screen sizes. We optimize all game elements, including 
                        graphics, gameplay, code, and resource utilization, exclusively for the Android ecosystem. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        Cross-Platform
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        With our cross-platform solutions, you can reach a wider audience by offering a cohesive and unified gaming experience 
                        across various operating systems and devices. We utilize the most advanced tools and frameworks to deliver a consistent, 
                        superior experience across all devices and platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/mobile-game/game-idea.webp" alt="Fuel Your Game Idea With Fire!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Fuel Your Game Idea With Fire!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                No matter where you are in your journey, from sketch to prototype to a complete vision, we’re here to power it up. At GameIgnix, 
                we build futuristic games that inspire and engage.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
              </div>
            </div>
          </section>

          <WhyChooseMobileGame />

          <section className="pt-[3rem] pb-[7rem]" id="portfolio">
            <div className="text-center md:w-[90%] mx-auto w-full">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Game Portfolio
              </h2>
              <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
                Discover Our Recent Projects
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
                From casual to complex, our portfolio showcases games built with innovation and precision. Every project tells a story of 
                creativity and passion.
              </p>
            </div>
            <Portfolio />
          </section>

          <MobileCaseStudies />

          <MobileGameTools />

          <section className="bg-black shadow-[0_0_200px_0_#000] pt-16 mb-8 md:my-8 overflow-hidden">
            <div className="w-full px-4 mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Mobile Game Development Process We Follow
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  At GameIgnix, we follow a structured approach to creating exceptional mobile games, ensuring each phase is executed flawlessly. 
                  Whether you're looking to make a simple game or a massive, complex project, our team is here to provide full-cycle development 
                  and ongoing support.
                </p>
              </div>
              <div className="relative flex flex-wrap">
                <div className="afflef">
                  <div className="affim">
                    <Image src="/common/mobile-game/mobile-game-developers.webp" alt="Mobile Game Developers" width={700} height={1000} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
                <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                  <div className="lg:pr-5 md:pr-3 pr-0 relative">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept and Ideation</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We conduct group discussions and detailed analyses of market trends and competition to establish the basis for a 
                        captivating game idea. We explore various genres, themes, and game mechanics to create the one that stands out and appeals 
                        to your target audience. 
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre-Production Analysis</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        During the pre-production analysis phase, our team conducts a detailed evaluation of the game’s requirements to ensure the 
                        efficient execution of creative ideas. We prepare storyboards, technical documents, wireframes, UX flows, and other 
                        resources to ensure everything is planned. The game’s main storyline, core design, and rules are also finalized in this 
                        stage.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Design and Prototyping</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our skilled designers and developers develop an extensive Game Design Document (GDD), mapping out all the significant 
                        elements of the game. Our team develops clickable prototypes to playtest and optimize gameplay mechanics, level 
                        architecture, characters, and interface elements.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept Art</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We then move on to Concept Art, wherein our artists create concepts of in-game objects, environments, and characters. 
                        It is an essential step as it clarifies the following stages of the process, particularly in 3D visualization. Concept art 
                        sets the game’s visual style, laying out the guide for the overall creative direction.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Art and Asset Creation</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        In this phase, our skilled artists and animators craft high-quality graphics and animations to capture the essence of your 
                        game. Our artists then design characters, environments, visual effects, and interfaces to suit the game's aesthetic and 
                        thematic ideals. All these assets are meticulously designed to ensure consistency and cohesion within the game.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Designing Levels</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        As we move into designing levels, the focus is shifted to creating engaging and challenging game levels, obstacles, 
                        mechanisms, and objects. Each level provides entertainment and a rewarding experience while raising the bar of challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-wrap how-rev">
                <div className="order-2 md:order-1 md:w-2/3 z-[2] px-2">
                  <div className="md:pl-[20px] pl-0 position-relative lg:pr-[20px] pr-0">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Development and Programming</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Once the design and assets are ready, our talented developers employ the best possible game engines, technologies, and 
                        frameworks to write clean, structured code for the game. We focus on incorporating various functionalities and adjusting 
                        the game for different platforms and devices to achieve improved accessibility.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                        Testing
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our testing phase involves rigorous quality assurance procedures, where our QA teams work diligently to identify bugs, 
                        glitches, and performance issues. We perform intensive testing on multiple devices and operating systems, then gather 
                        input from our beta testers for additional game improvements.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                        Final Deployment
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        With all the testing complete, we prepare the game for launch across the desired platforms, including Google Play and the 
                        App Store. Our team assists you with the final preparation, including the submission process and any last-minute 
                        optimizations.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre and Post-Launch Services</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We offer comprehensive pre- and post-launch Services to ensure your game’s success. Before launch, we assist with app 
                        store optimization, marketing, and user acquisition to increase visibility and downloads. We ensure your game’s long-term 
                        success by continually improving the game post-launch and maintaining strong player relationships.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 afflef">
                  <div className="affim">
                    <Image src="/common/mobile-game/mobile-game-studio.webp" alt="Mobile Game Development Studio" width={490} height={800} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <MobileTeams />

          <section className="py-12">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Our Engagement Models</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  At GameIgnix, we offer flexible engagement models that enable clients to work with us in a manner that best suits their goals, 
                  timelines, and budgets. If you require full ownership of a project or experienced professionals to augment your current team, 
                  our models are planned to provide maximum value.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/mobile-game/dedicated-development-team.webp" alt="Dedicated Development Team" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Dedicated Development Team
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Suitable for companies in search of a long-term development partner, our dedicated team model offers you a team of game 
                      developers, designers, and testers exclusively working on your project. You have complete control, clear communication, and 
                      regular output as per your vision.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/mobile-game/team-extension.webp" alt="Team Extension" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Team Extension
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Already have an in-house team but need a boost? With our team extension model, you can add skilled game developers and designers 
                      to your existing setup. It’s the perfect way to scale quickly, tap into niche expertise, and deliver faster, without the cost of 
                      permanent hires.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/mobile-game/project-based-model.webp" alt="Project-Based Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Project-Based Model
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Ideally suited for customers with well-defined needs, the project-based approach provides full-cycle mobile game development 
                      within a set timeline and budget. We take care of the entire process from ideation to launch, providing guaranteed outcomes and 
                      high-quality deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/mobile-game/game-build.webp" alt="Need Extra Hands or a Full Development Team?" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Need Extra Hands or a Full Development Team?
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                From design to deployment, our expert team works alongside you to accelerate progress and deliver world-class games. Hire with 
                confidence, hire with GameIgnix.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Hire Game Experts">
                <span> Hire Game Experts </span>
              </Link>
              </div>
            </div>
          </section>

          <Testimonials />
          
          <section className="py-[2rem]" id="footer">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Interested in mobile game development or need expert guidance to refine your game development strategy? Our team is just a 
                  message away. Please fill out the form, and let’s build something extraordinary together.
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