"use client";
import Image from "next/image";
import Link from 'next/link';
import ServicesGameDevelop from "@/components/ServicesGameDevelop";
import ServicesGameArt from "@/components/ServicesGameArt";
import ServicesGameInnovation from "@/components/ServicesGameInnovation";
import WhyChooseGamedevServices from "@/components/WhyChooseGamedevServices";
import Portfolio from "@/components/Portfolio";
import ServicesCaseStudies from "@/components/ServicesCaseStudies";
import ServicesTools from "@/components/ServicesTools";
import ServicesEngines from "@/components/ServicesEngines";
import ServicesTeams from "@/components/ServicesTeams";
import Testimonials from "@/components/Testimonials";
import ServicesFaq from "@/components/ServicesFaq";
import Contact from "@/components/Contact";

export default function ServicesPageServer() {

  return (
    <>

      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#F57C00] font-bold">
                  Game Development Services
                </h1>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  GameIgnix offers holistic game development services, combining creativity, technology, and player-centric design. Our experienced 
                  team develops distinguished games across multiple genres, producing the finest games that align with the client's vision and 
                  captivate players worldwide.
                </p>
                <ul className="flex list-none justify-center gap-4 flex-wrap">
                  <li>
                    <button className="inline-block bg-[#F57C00] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white group" data-scroll="#footer" aria-label="Talk to Experts">
                      <span className="inline-block w-full bg-[#F57C00] px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#e67c03]">Talk to Experts</span>
                    </button>            
                  </li>
                  <li>
                    <Link href="/contact" className="inline-block bg-[#F57C00] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" aria-label="Get Quote">
                      <span className="inline-block w-full bg-black px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#F57C00]"> Get Quote </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>        
          <Image src="/common/game-develop/game-development-services.webp" alt="Game Development Services" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/game-develop/game-development-services-480.webp" alt="Game Development Services" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="relative pt-[2rem] md:pt-[0.2rem] overflow-x-hidden md:overflow-visible">

          <section className="pb-2" id="about-us">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  GameIgnix, a premier game development services provider, is trusted by studios and publishers to turn a spark into a fully-realized game. 
                  Our passionate team of developers, with expertise in design, development, and art, is committed to providing you with a comprehensive 
                  solution for game development or specialized support for a specific aspect of development. You can rely on us to continue creating 
                  high-quality and immersive games that not only push boundaries but also deliver results.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-[2rem] pb-[4rem]">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Game Development Services
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                  At GameIgnix, we offer a comprehensive suite of game development services that span every aspect of game development, including art, 
                  design, development, and innovation. Discover our diverse range of services, expertly crafted to bring your envisioned game to life.
                </p>
              </div>
              <div className="pt-[40px] md:pt-[160px] pb-[20px]">
                <div className="p-px rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="relative grid grid-cols-1 md:grid-cols-12 bg-[linear-gradient(263.57deg,#010101_64.29%,#AA07B8_224.98%)] rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px]">                  
                    <div className="md:col-span-7 min-h-[260px] flex items-end md:block">
                      <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                        <h3 className="text-[20px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#F57C00] font-bold italic capitalize">
                          Game Development
                        </h3>
                        <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                          We offer a holistic approach to game development, creating games that
                          appeal to players with diverse preferences across all platforms.
                          From the earliest concept to the final launch, we will be with you
                          every step of the way.
                        </p>
                      </div>
                    </div>
                    <div className="static md:relative md:col-span-5">
                      <div className="absolute right-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                        <div className="w-full h-full">
                          <Image src="/common/game-develop/game-development.webp" alt="Game Development" width={400} height={400} loading="lazy" className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServicesGameDevelop />
              <div className="pt-[70px] md:pt-[220px] pb-[20px]">
                <div className="p-px rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(-260.73deg,#010101_67.5%,#FFF73A_233.73%)]">
                    <div className="static md:relative md:col-span-5">
                      <div className="absolute left-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                        <div className="w-full h-full">
                          <Image src="/common/game-develop/game-services.webp" alt="Game Art" width={400} height={400} loading="lazy" className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7 min-h-[260px] ml-auto flex items-end md:block">
                      <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                        <h3 className="text-[20px] md:text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#F57C00] font-bold italic">
                          Game Art
                        </h3>
                        <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                          Our skilled artists design everything from concept art to highly detailed 3D models and animations, ensuring the game looks as incredible as it plays. We focus on every visual element, blending aesthetic appeal with functional design to create exceptional art.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServicesGameArt />
              <div className="pt-[70px] md:pt-[220px] pb-[20px]">
                <div className="p-px rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(263.57deg,#010101_64.29%,#1168B6_224.98%)]">                  
                    <div className="md:col-span-7 min-h-[260px] flex items-end md:block">
                      <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                        <h3 className="text-[20px] md:text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#F57C00] font-bold italic capitalize">
                          Game Inn͏ovation
                        </h3>
                        <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                          By leveraging the latest coding techniques and implementing groundbreaking technologies 
                          like blockchain, AR, and VR, we adopt an innovation-driven approach to developing games 
                          that meet the evolving demands of modern gaming.
                        </p>
                      </div>
                    </div>
                    <div className="static md:relative md:col-span-5">
                      <div className="absolute right-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                        <div className="w-full h-full">
                          <Image src="/common/game-develop/game-innovation.webp" alt="Game Inn͏ovation" width={400} height={400} loading="lazy" className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServicesGameInnovation />
              </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/game-develop/game-idea.webp" alt="Got a Game Idea? Let’s Set It on Fire!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full box-border font-bold uppercase">
                Got a Game Idea? Let’s Set It on Fire!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Whether it is a fully fleshed-out concept or just the spark of an idea, we’re here to bring it to life. At GameIgnix, we bring imagination to 
                life through immersive games.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#F57C00] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#F57C00] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
              </div>
            </div>
          </section>

          <section className="py-[3rem]">
            <div className="w-full px-4 mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Genres We Specialize In
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  Our expertise spans various genres, from high-speed racing to hyper-casual games and action-packed shooters. We produce high-quality games 
                  tailored to your vision.
                </p>
              </div>
              <div className="comic-panel-wrapper flex flex-wrap justify-center">
                <div className="comic-panel">
                  <div className="comic-panelim relative">
                    <Image src="/common/role-playing.webp" alt="Role-Playing" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold">Role-Playing</h3>
                      <p className="para-cnt1">
                        Immersive role-playing experiences with deep storylines, character customization, and dynamic combat mechanics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel comic-rev">
                  <div className="comic-panelim relative">
                    <Image src="/common/action.webp" alt="action" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold rev-hd">Action</h3>
                      <p className="para-cnt1">
                        Our action games feature high-octane gameplay, intense combat, and cinematic sequences for nonstop excitement and adrenaline-packed 
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel">
                  <div className="comic-panelim relative">
                    <Image src="/common/adventure.webp" alt="Adventure" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold">Adventure</h3>
                      <p className="para-cnt1">
                        Exciting adventure games set within a narrative framework of interesting quests and puzzles transport players to captivating worlds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel comic-rev">
                  <div className="comic-panelim relative">
                    <Image src="/common/racing.webp" alt="Racing" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold rev-hd">Racing</h3>
                      <p className="para-cnt1">
                        Action-packed racing games are expertly designed with fast-paced gameplay, realistic driving mechanics, and dynamic tracks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel">
                  <div className="comic-panelim relative">
                    <Image src="/common/shooter.webp" alt="Shooter" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold">Shooter</h3>
                      <p className="para-cnt1">
                        First-person and third-person shooters combined with tactical gameplay, intense battle mechanics, and an advanced weapon progression system.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel comic-rev">
                  <div className="comic-panelim relative">
                    <Image src="/common/battle-royale.webp" alt="Battle Royale" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold rev-hd">Battle Royale</h3>
                      <p className="para-cnt1">
                        Massive multiplayer battle games combined with last-man-standing gameplay and weapon gathering featuring shrinking playfields and large maps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel">
                  <div className="comic-panelim relative">
                    <Image src="/common/sports.webp" alt="Sports" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold">Sports</h3>
                      <p className="para-cnt1">
                        Whether it's soccer, cricket, or any other sport, our games capture the essence of real-world sports with lifelike mechanics and smooth 
                        controls.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comic-panel comic-rev">
                  <div className="comic-panelim relative">
                    <Image src="/common/puzzle.webp" alt="Puzzle" loading="lazy" width={190} height={360} className="max-w-full h-full" />
                    <div className="comic-sub absolute start-0 bottom-0 w-full">
                      <h3 className="cm-hd4 text-white fw-semibold rev-hd">Puzzle</h3>
                      <p className="para-cnt1">
                        Brain-teasing puzzle games with mind-bending challenges, designed for all ages to test logic, strategy, and creativity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-black shadow-[0_0_200px_0_#000] pt-16 mb-8 md:my-8 overflow-hidden">
            <div className="w-full px-4 mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Game Development Process
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  At GameIgnix, we follow a strategic, agile development methodology that prioritizes transparency, creativity, and collaboration at every 
                  step. Our team is equipped with all the skills necessary to ensure your game's success.
                </p>
              </div>
              <div className="relative flex flex-wrap">
                <div className="afflef">
                  <div className="affim">
                    <Image src="/common/game-develop/video-game-development-services.webp" alt="Video Game Development Services" width={490} height={800} loading="lazy" className="max-w-full h-auto" />
                  </div>
                </div>
                <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                  <div className="lg:pr-5 md:pr-3 pr-0 relative">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Concept and Ideation</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our process starts by understanding the concept behind the game, market trends, project feasibility, and your specific requirements. 
                        We create a Game Design Document (GDD) and assign the necessary resources, ensuring everything is ready from day one.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Prototyping and Design</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        In the Prototyping and Design phase, we establish a concrete development framework with efficient content pipelines for asset creation, 
                        integration, and iteration throughout production. Our team designs a playable prototype to validate ideas and refine core systems before 
                        full-scale development.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Art and Visual Development</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our talented artists create every game asset, from characters and environments to animations and UI elements. We also produce sound effects 
                        and music assets that complement the game's visual design and mechanics.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Game Development and Coding</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our developers handle everything from programming game logic to integrating art assets and animations, as well as building core game systems 
                        and mechanics. Our team consistently works on gameplay, art, and technical implementations to ensure the game aligns perfectly with the 
                        initial concept.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-wrap how-rev">
                <div className="order-2 md:order-1 md:w-2/3 z-[2] px-2">
                  <div className="md:pl-[20px] pl-0 position-relative lg:pr-[20px] pr-0">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Testing and Quality Assurance</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Before your game hits the market, we check its quality and performance. Our extensive multi-level tests cover every aspect of the game across 
                        all intended platforms. Only when the game is free of bugs and technical glitches and meets the highest standards of quality do we prepare it 
                        for release.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">
                        Launch and Deployment
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        When it is time to launch, we manage the entire release process. The game is prepared for submission to target platforms, which may involve 
                        certification processes, rating approvals, and integration with storefronts. Once all necessary approvals are secured, the game is officially 
                        deployed and made available to end users.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">
                        Post-Launch Support and Updates
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our Post-Launch Support services promote the engagement, stability, and profitability of this game. We support regular patch releases and 
                        strategic updates of new content, as well as balance tweaks, to keep player interest alive and ensure long-term revenue.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 afflef">
                  <div className="affim">
                    <Image src="/common/game-develop/online-game-development-services.webp" alt="Online Game Development Services" width={490} height={800} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseGamedevServices />

          <section className="py-12">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  We Develop Games For Diverse Platforms
                </h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  When it comes to game development across mainstream platforms, we cover a broader range of player preferences. We make innovative 
                  and exquisite games that are available to all, regardless of the platform they are on.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/mobile.webp" alt="Mobile" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Mobile
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Our expertise encompasses mobile games compatible with both iOS and Android platforms. From casual games to sophisticated and 
                      action-packed games, our development caters to the unique abilities of mobile platforms.
                    </p>
                </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/pc.webp" alt="PC" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      PC
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      We build PC games that are fully optimized to deliver the smoothest experience on high-end gaming rigs and even the most modest 
                      systems, making them a perfect choice for dedicated PC gamers.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/console.webp" alt="Console" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Console
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Our game development team crafts high-performance games across all the latest generations of consoles. Whether it's PlayStation, Xbox, 
                      or Nintendo Switch, we ensure the games are optimized to meet the specific requirements of each console.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/AR-VR.webp" alt="AR/VR" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      AR/VR
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Our team excels in creating game titles for various AR/VR platforms, including Oculus Rift, HTC Vive, PlayStation VR, ARKit, and ARCore. 
                      We use innovative technologies in our games, which transport players to a whole new world, offering an unparalleled level of 
                      engagement and realism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[3rem] pb-[7rem]" id="portfolio">
              <div className="text-center md:w-[90%] mx-auto w-full">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Portfolio
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#F57C00] italic uppercase">
                  Recent Projects We Have Completed
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
                  Here is a glimpse of some of our standout projects, each showcasing our versatility in crafting exceptional games that captivate players from 
                  start to finish.
                </p>
            </div>
            <Portfolio />
          </section>

          <ServicesCaseStudies />

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/game-develop/game-build.webp" alt="Yours Could Be Our Next Project!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
                <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                  <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full box-border font-bold uppercase">
                    Yours Could Be Our Next Project!
                  </h2>
                  <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                    Got an idea? Our expert team can transform your brilliant idea into a captivating game, just as you imagined.
                  </p>
                  <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#F57C00] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#F57C00] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build Your Game">
                    <span> Let’s Build Your Game </span>
                  </Link>
              </div>
            </div>
          </section>

          <ServicesTools />

          <ServicesEngines />

          <ServicesTeams />

          <section className="pt-8 pb-16 mb-4">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Our Engagement Models</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Our flexible engagement models ensure that you receive precisely what you need, whether it's a complete team, extra support, or a 
                  project-driven approach. With transparency and collaboration at the core, you will always have a clear view of progress.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/project-based-model.webp" alt="Project-Based Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Project-Based Model
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Our talented game developers work with your in-house team as strategic partners, sharing expertise and resources to co-create high-quality 
                      games within the agreed-upon parameters. This model ensures tight coordination, knowledge exchange, and continuous improvement throughout 
                      the development process.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/dedicated-team.webp" alt="Dedicated Development Team" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">  
                      Dedicated Development Team
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Our Dedicated Development Team model gives you a full-time, exclusive team of experts for in-depth collaboration. They work 
                      exclusively on your game, dedicated to meeting your creative vision, timeline, and budget. 
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/game-develop/team-extension.webp" alt="Team Extension" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Team Extension
                    </h3>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Whether you need short-term expertise or long-term support, our Team Extension model lets you expand your development team 
                      with skilled game development professionals who fit your existing workflows and ramp up your project without the overhead of 
                      full-time hires.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

          <ServicesFaq />
          
          <section className="py-[2rem]" id="footer">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Looking for expert game development services or guidance to shape your project strategy? Our team is just a message away. 
                  Fill out the form and let’s create something extraordinary together.
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