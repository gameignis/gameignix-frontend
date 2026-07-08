"use client";
import Image from "next/image";
import Link from 'next/link';
import Portfolio from "@/components/Portfolio";
import UnityCaseStudies from "@/components/UnityCaseStudies";
import WhyChooseUnityGame from "@/components/WhyChooseUnityGame";
import WhyChooseUnity3D from "@/components/WhyChooseUnity3D";
import UnityTools from "@/components/UnityTools";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function UnityGamePageServer() {

  return (
    <>

    <main>

      <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                  Unity Game Development Company
                </h1>    
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  GameIgnix, your premier Unity game development company, stands out for its unique blend of artistic vision and technical excellence. 
                  We are renowned for delivering high-quality Unity games across diverse genres, platforms, and categories, setting a new standard for 
                  creativity and quality in the industry.
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
        <Image src="/common/unity-game/unity-game-development-company.webp" alt="Unity Game Development Company" fill priority className="hidden md:block h-full w-full object-cover" />
        <Image src="/common/unity-game/unity-game-development-company-480.webp" alt="Unity Game Development Company" fill priority className="md:hidden h-[480px] object-cover" />
      </section>

      <div className="relative pt-4 overflow-x-hidden md:overflow-visible">

        <section className="pt-0 pb-4" id="about-us">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">            
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                GameIgnix is a trusted game development company with a record of contributing to major, high-profile projects. We work with companies 
                ranging from start-ups to market leaders across nearly all industries, creating innovative Unity games that set a new standard for 
                creativity and quality. Our ever-changing portfolio spans every genre and platform, united by our thorough and client-focused process, 
                which ensures your vision is brought to life with the highest quality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-[2rem]">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">

            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Unity Game Development Services
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                As a top-ranking Unity game development studio, GameIgnix provides customized Unity 3D game development services to fulfill clients' varied 
                demands for high-quality 2D and 3D games. Our certified Unity game developers and creative designers create innovative and scalable games 
                that are optimized for both desktop and mobile platforms.
              </p>
            </div>
            
            <div className="my-8">
              <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
               <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          1. Full-cycle Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          At GameIgnix, we offer full-cycle game development services using Unity’s extensive toolset. Whether you need to build a brand-new 
                          game from scratch or want a custom feature added to your ongoing project, our experienced developers are committed to delivering 
                          high-quality games within optimal timeframes.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          2. Unity AI Integration
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          With Unity’s latest AI capabilities, we bring advanced artificial intelligence systems to your game, delivering responsive characters 
                          and unpredictable gameplay. Our AI solutions cater to a wide range of game genres, from strategic AI for tactical strategy games to 
                          reactive AI for action-oriented games where non-player characters dynamically respond to player actions.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          3. Unity 2D/3D Game Development
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Whether pixel-perfect 2D or deeply immersive 3D worlds, our game developers utilize Unity's extensive asset library, rendering 
                          support, and optimization to create visually compelling games for mobile players and hardcore console gamers.
                        </p>
                     </div>
                    </div>
                    <div className="md:w-[42%] flex absolute right-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                      <div className="flex flex-col w-full h-full flex flex-column">
                        <Image src="/common/unity-game/unity-game-development-services.webp" alt="Unity Game Development Services" width={600} height={600} className="w-full h-full md:h-[560px] object-contain" />
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[42%] flex absolute left-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                      <div className="flex flex-col w-full h-full flex flex-column">
                        <Image src="/common/unity-game/unity-3d-game-development-company.webp" alt="Unity 3D Game Development Company" width={600} height={600} className="w-full h-full md:h-[560px] object-contain" />
                      </div>
                    </div>
                    <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                      <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        4. Game Porting/Migration
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        We professionally port and migrate games, ensuring a seamless transition of your existing games into Unity. Whether moving from another 
                        engine or upgrading to a newer version of Unity, we handle the complexities of platform-specific adjustments while maintaining your 
                        game’s visual and functional integrity.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        5. AR/VR Game Development
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        We develop VR, XR, and MR games, bringing the finest touch to interactive entertainment by seamlessly blending physical and digital 
                        worlds for a stunning player experience. From training simulations to cutting-edge entertainment titles, we enable games to reach 
                        maximum performance with immersive interactivity across diverse platforms.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                        6. Metaverse Game Development
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                        Our game developers are well-suited to develop next-gen metaverse games that foster and establish an interlinked virtual world, drawing 
                        gamers into it. With Unity's real-time rendering and top-level network infrastructure, we create massive digital spaces that thrive in 
                        interaction, socializing, and distinct game experiences.
                      </p>
                      </div>
                  </div>                                  
                </div>
              </div>  
            </div>

          </div>
        </section>

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
          <Image src="/common/unity-game/game-idea.webp" alt="Hire Expert Unity 3D Game Developers" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
              Hire Expert Unity 3D Game Developers
            </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Scale your project with our skilled Unity team. From 2D/3D games to AR, VR, and metaverse experiences, we deliver top-quality games 
              across all platforms.
            </p>
            <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Get a Free Consultation">
              <span> Get a Free Consultation </span>
            </Link>
            </div>
          </div>
        </section>

        <WhyChooseUnityGame />

        <section className="pt-[3rem] pb-[7rem]">
            <div className="text-center md:w-[90%] mx-auto w-full">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
              Our Game Portfolio
            </h2>
            <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
              Discover Our Recent Projects
            </p>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
              Our portfolio showcases a diverse range of genres and platforms, seamlessly blending our creativity and technical expertise. Each 
              game is a testament to our dedication to excellence.
            </p>
          </div>
          <Portfolio />
        </section> 

        <UnityCaseStudies />

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
          <Image src="/common/unity-game/game-build.webp" alt="Your Game Could Be Our Next Big Success!" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
              Your Game Could Be Our Next Big Success!
            </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Just like the projects you’ve seen in our portfolio, we can bring your vision to life with stunning visuals, seamless gameplay, 
              and unmatched performance.
            </p>
            <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project Today">
              <span> Start Your Project Today </span>
            </Link>
            </div>
          </div>
        </section>

      <WhyChooseUnity3D />

      <UnityTools />

      <section className="bg-black shadow-[0_0_200px_0_#000] pt-8 mb-8 md:my-8 overflow-hidden">
        <div className="w-full px-4 mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
              Our Unity Game Development Process
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
              Our Unity game development process is designed to ensure that each project is completed efficiently, thoroughly, and with a 
              commitment to quality. Our methodology guarantees that every stage of your game is managed with our proficiency.
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="afflef">
              <div className="affim">
                <Image src="/common/unity-game/unity-game-developers.webp" alt="Unity Game Developers" width={700} height={1000} className="h-auto max-w-full" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
              <div className="lg:pr-5 md:pr-3 pr-0 relative">
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Requirement Gathering</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    We begin every Unity game development project by engaging in comprehensive discussions with our clients to understand both the technical and 
                    creative aspects of the project. We gather detailed information about the game concept, target audience, platform preferences, and desired 
                    features.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept and Ideation</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    With a crystal-clear understanding of the project requirements, the team enters the concept refinement phase, which involves discussing 
                    views on gameplay mechanics, storylines, and art styles. We conduct market research to stay informed about gaming trends, ensuring that 
                    the game mechanics are both innovative and enjoyable.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre-Production Analysis</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Story, mechanics, and structure are all conceived and written under a visual style during the pre-production stage, which also establishes 
                    the game's final framework. Next, to maintain the project's progress, our team selects the most effective tools, technologies, and techniques.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Design and Prototyping</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    With the game's basic principles in place, in-house game designers begin working on preliminary prototyping. We produce very early 
                    interactive prototypes that showcase the fundamental gameplay mechanics, UI elements, and rudimentary artwork using the powerful Unity 
                    toolkit.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Concept Art</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our concept artists create highly detailed concept art that defines the visual style of the game, drawing from the core elements of the 
                    game based on the GDD. They finally ensure that everybody is on the same page in terms of art direction before full production begins.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Art and Asset Production</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Now that the concept art is ready, the 2D/3D artists, animators, and audio team go into the production phase. Using Unity's 
                    efficient asset pipeline, we develop the visual and audio assets for the game, including character models, environment, 
                    animation, and sound effects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-wrap how-rev">
            <div className="order-2 md:order-1 md:w-2/3 z-[2] px-2">
             <div className="md:pl-[20px] pl-0 position-relative lg:pr-[20px] pr-0">
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Level Design</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Once we have the core assets and mechanics in place, level designers start working on the atmosphere of the game to fit its gameplay style. 
  Using Unity's terrain and scene-building tools, dynamic levels are created that test players and lead them through a captivating experience.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                    Game Development and Programming
                  </h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our developers apply the C# scripting language and large Unity libraries to program core mechanics, AI behavior, physics systems, and 
  in-game interactions. Through Unity's set of tools, our team designs easy-to-manage controls, dynamic gameplay content structures, and 
  entertaining AI-HUD-driven NPCs.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                    Art and Asset Integration
                  </h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    As the game takes shape, art assets, animations, effects, and various media will be fed into the game engine. We synchronize the audio and 
  visual cues precisely with gameplay mechanics using Unity's adaptable asset management system.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Testing</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our QA team ensures that testing is conducted extensively throughout development, from unit testing to complete gameplay testing, to 
  identify, triage, and resolve any bugs, gameplay imbalances, and performance issues, thereby delivering a high-quality product.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Deployment</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    After that, once the game has passed all QA standards, it is finally ready for deployment, where we focus on all platform-related 
  requirements, such as optimizing the game for various devices and screen resolutions. We also handle its submission to digital stores, 
  such as the App Store, Google Play, Steam, or console-specific marketplaces.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Pre- and Post-Launch Services</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    We will assist with marketing pre-launch, while post-launch services will continue to fortify your game. With content updates, downloadable 
  expansions, and patches, we will ensure that your game and your players stay entertained.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 afflef">
              <div className="affim">
                <Image src="/common/unity-game/unity-game-development-studio.webp" alt="Unity Game Development Studio" width={490} height={800} className="h-auto max-w-full" />
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
              Need our Unity game development expertise or strategic guidance? Connect with GameIgnix today, 
              and our expert team will help you shape your next success story.
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