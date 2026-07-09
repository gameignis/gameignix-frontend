"use client";
import Image from "next/image";
import Link from 'next/link';
import Portfolio from "@/components/Portfolio";
import UnrealCaseStudies from "@/components/UnrealCaseStudies";
import WhyChooseUnrealGame from "@/components/WhyChooseUnrealGame";
import WhyChooseUnrealStudio from "@/components/WhyChooseUnrealStudio";
import UnrealTools from "@/components/UnrealTools";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function UnrealGamePageServer() {

  return (
    <>

      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                  Unreal Engine Game Development Company
                </h1>    
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  As a trusted Unreal Game Development Company, we are the preferred choice for global game publishers delivering high-quality 
            UE-powered games. With Unreal Engine’s latest versions at our fingertips, our skilled developers transform your creative vision into 
            hyper-realistic games that set new visual fidelity and gameplay performance standards.
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
          <Image src="/common/unreal-game/unreal-engine-game-development-company.webp" alt="Unreal Engine Game Development Company" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/unreal-game/unreal-engine-game-development-company-480.webp" alt="Unreal Engine Game Development Company" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="pt-12 md:pt-0 relative overflow-x-hidden md:overflow-visible">

          <section className="pt-0 pb-4" id="about-us">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  GameIgnix is a best-in-class Unreal Engine game development company fueled by an unwavering passion for innovation and creativity in 
                  building high-performance games. We harness Unreal Engine to deliver next-level experiences. With over 10 years of expertise, we have 
                  earned the trust of top-tier gaming companies worldwide.
                </p>
              </div>
            </div>
          </section>

          <section className="py-[2rem]">
           <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">

             <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Unreal Engine Game Development Services 
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] md:mb-[1rem]">
                  Powered by the latest advancements in Unreal Engine, we offer a dynamic suite of game development services to develop visually stunning and 
      high-performance games that push the bar of visual fidelity and gameplay, setting new standards in the industry.
                </p>
              </div>
              <div className="mt-8 md:mb-8 mb-4">
                <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[58%] w-full relative z-[10]">
                      <div className="p-[0.5rem_1rem_1rem_1.6rem]">
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          1. Full-cycle Unreal Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          As a top-tier Unreal Engine game development studio, we provide full-cycle development services tailored to games of all genres and 
          complexity levels. Our 360-degree support spans from concept creation to testing and release, utilizing agile sprints to deliver 
          self-contained, high-quality games that meet the industry's highest standards.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          2. AR/VR/MR-Based Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          With extensive experience in leveraging Unreal Engine’s advanced rendering and physics engines, our experts provide gaming solutions 
          within augmented and virtual spaces. Whether you want a VR game for Oculus Rift or an MR gaming solution for HTC Vive, we create 
          hyper-realistic games and simulations with unparalleled graphics and standout interactions. 
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          3. Game Porting to Unreal Engine
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Want to switch game engines to improve underperformed graphics or reach a wider game community? We offer comprehensive porting 
          services, facilitating the smooth migration of your existing projects to the new engine, including UE4 to UE5, with no compromise on 
          compatibility.
                        </p>
                      </div>
                      </div>
                      <div className="md:w-[42%] flex absolute right-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                        <div className="flex flex-col w-full h-full flex flex-column">
                          <Image src="/common/unreal-game/unreal-engine-game-development-services.webp" alt="Unreal Engine Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="py-4">
                <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[42%] flex absolute left-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                        <div className="flex flex-col w-full h-full flex flex-column">
                          <Image src="/common/unreal-game/unreal-engine-game-development-studio.webp" alt="Unreal Engine Game Development Studio" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                        </div>
                       </div>
                      <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                       <div className="p-[0.5rem_1rem_1rem_1.6rem]">
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          4. Game Art and Animation
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Whether it is 3D modeling, texturing, or animation, we use Unreal Engine’s motion capture technology and animation tools to produce 
          high-fidelity visual assets. Our team of 2D/3D game artists and animators specializes in character modeling, environmental design, 
          and motion capture integration with meticulous attention to every detail.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          5. Game Design and Prototyping
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          We build functional prototypes with basic mechanics to validate the core gameplay loop and assess the game’s concept before development 
          begins. Our team develops compelling game mechanics, defining core elements to engage players from the first moment.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          6. Unreal Game Testing
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Employing Unreal Engine’s testing tools, we perform extensive testing procedures to detect and eliminate bugs or glitches. Our testing 
          team closely examines every aspect of game load times, frame rates, and system compatibility to ensure the game provides the best service.
                        </p>
                      </div>
                    </div>                  
                  </div>
                </div>
              </div> 

            </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/unreal-game/game-idea.webp" alt="Your Idea, Our Next Big Game!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
             <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Your Idea, Our Next Big Game!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                From casual games to epic adventures, we turn imagination into reality. With creativity, passion, and technical mastery, GameIgnix crafts 
      games that shine across every genre.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
              </div>
            </div>
          </section>

          <WhyChooseUnrealGame />

          <section className="pt-[3rem] pb-[7rem]" id="portfolio">
            <div className="text-center md:w-[90%] mx-auto w-full">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Game Portfolio
              </h2>
              <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
                Discover Our Recent Projects
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] md:mb-[2rem] max-w-[96%] mx-auto">
                Our portfolio highlights a spectrum of genres and styles, blending art and technology. Each game is proof of our dedication to excellence.
              </p>
            </div>
            <Portfolio />
          </section> 

          <UnrealCaseStudies />

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 md:mb-4">
            <Image src="/common/unreal-game/game-build.webp" alt="Power Up Your Game Development" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Power Up Your Game Development
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Supercharge your studio with our experienced developers. We provide the skill, flexibility, and technical expertise you need to 
                bring your vision to life on time and on point.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Hire Game Experts">
                <span> Hire Game Experts </span>
              </Link>
              </div>
            </div>
          </section>

          <WhyChooseUnrealStudio />

          <UnrealTools />

          <section className="bg-black shadow-[0_0_200px_0_#000] pt-16 mb-8 md:my-8 overflow-hidden">
            <div className="w-full px-4 mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Unreal Game Development Process
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  At GameIgnix, every great game begins with a strong foundation built through meticulous planning, collaboration, and innovation. From 
      understanding your specific requirements in the initial stages to offering post-launch support, our structured approach ensures that 
      each phase of the project is executed with precision and excellence.
                </p>
              </div>
              <div className="relative flex flex-wrap">
                <div className="afflef">
                  <div className="affim">
                    <Image src="/common/unreal-game/unreal-engine-game-developers.webp" alt="Unreal Engine Game Developers" width={700} height={1000} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
                <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                  <div className="lg:pr-5 md:pr-3 pr-0 relative">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Requirement Gathering</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        At GameIgnix, we initiate game development projects by understanding the specific requirements of our clients, both technical and creative. 
      Through collaborative discussions, we gather all relevant details, including game concepts, target audiences, and platform preferences, 
      ensuring all functional and business needs are defined.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept and Ideation</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Next, we proceed with the concept phase to give your idea a strong base. Based on the shared ideas, our team conducts a thorough market 
      analysis and further brainstorms to define the game mechanics, plot, and aesthetic, ensuring they align with the clients' vision and meet 
      expectations.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre-Production Analysis</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        During this pre-production analysis phase, we finalize everything, including the game narrative, structure, and gameplay, and document it 
      in the GDD. We also evaluate the best strategies, tools, and technologies to keep the development process on track. By dividing the project 
      into sprints and modules, we create a solid game development roadmap, ensuring everything is aligned before moving into full production.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Design and Prototyping</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our game designers blend their design skills with creativity to craft interactive elements and user interfaces that ensure seamless 
      interaction with game assets as they are developed further. Using Unreal Engine's Blueprint visual scripting system, we create functional 
      prototypes to evaluate the fundamentals and get a glimpse of the game.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept Art</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        To further solidify the game’s art style, we generate concept art for the assets. Based on GDD, our concept artists begin sketching the 
      initial concepts and creating art illustrations of key assets, characters, and environments to bring on the style and look of the game. 
      This step facilitates the 3D visualization.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Art and Asset Production</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        With the concept art in place, our team of 2D/3D modelers and animation experts focuses on creating high-quality, cohesive visual elements. 
      From character models to environments and soundscapes, we use Unreal Engine’s best tools to ensure all assets are meticulously crafted to 
      transcend any traditional game art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-wrap how-rev">
                <div className="order-2 md:order-1 md:w-2/3 z-[2] px-2">
                  <div className="md:pl-[20px] pl-0 position-relative lg:pr-[20px] pr-0">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Designing Levels</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Once the core mechanics and assets are in place, our level designers create immersive game environments. Using Unreal Engine’s powerful 
      landscape tools and procedural generation techniques, we design dynamic levels and pay close attention to pacing and challenge progression, 
      ensuring everything we design complements the story and gameplay flow.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                        Game Development and Programming
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our skilled developers leverage Unreal Engine’s C++ programming capabilities, along with the Blueprint visual scripting system, to program 
      complex gameplay mechanics, AI behaviors, and in-game interactions. We use reactive AI to design NPCs that react realistically to the 
      player's actions, offering dynamic and challenging encounters.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                        Integration of Art and Assets
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        As the game comes together, the art and assets created during the design and production phases are integrated into the game engine. Our 
      team ensures that textures, models, animations, sound effects, and music blend harmoniously with the game mechanics and gameplay systems. 
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Testing</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our quality assurance team plays a crucial role in maintaining the integrity of the game. Extensive testing is carried out at various stages 
      of development to identify bugs, gameplay imbalances, and potential performance issues. We also prioritize playtesting with real users to 
      fine-tune mechanics and difficulty curves.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Deployment</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Once the game passes all quality assurance and testing phases, it is ready for deployment. We handle platform-specific requirements, such as 
      achieving the correct frame rate, resolution, and input control schemes. Additionally, we take care of the submission process for digital 
      stores like Steam, the PlayStation Store, and the Xbox Store.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre- and Post-Launch Services</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        After deployment, we offer comprehensive pre- and post-launch services to maximize the game’s success. Post-launch, we provide ongoing 
      updates, bug fixes, and performance enhancements. We also work closely with clients to release downloadable content, expansions, and 
      patches to keep players engaged and maintain the game’s longevity in the market.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 afflef">
                  <div className="affim">
                    <Image src="/common/unreal-game/unreal-engine-game-development-agency.webp" alt="Unreal Engine Game Development Agency" width={490} height={800} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>      

          <Testimonials />
          
          <section className="py-[2rem]" id="footer">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Looking for Unreal Engine game development or guidance on your game idea? Our experts are just a message away. Fill out the form, and 
      let’s build something extraordinary together.
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