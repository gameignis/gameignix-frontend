"use client";
import Image from "next/image";
import Link from 'next/link';
import ArtConcepts from "@/components/ArtConcepts";
import ArtAssets from "@/components/ArtAssets";
import ArtTexturing from "@/components/ArtTexturing";
import ArtAnimation from "@/components/ArtAnimation";
import ArtVFX from "@/components/ArtVFX";
import ArtUIUX from "@/components/ArtUIUX";
import Portfolio from "@/components/Portfolio";
import GameArtOutsourcing from "@/components/GameArtOutsourcing";
import GameArtTools from "@/components/GameArtTools";
import ArtTeams from "@/components/ArtTeams";
import Testimonials from "@/components/Testimonials";
import ArtFaq from "@/components/ArtFaq";
import Contact from "@/components/Contact";

export default function GameArtPageServer() {

  return (
    <>

    <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
      <div className="relative z-[5] h-full">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
          <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
            Game Art Services
          </h1>
          <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
            Crafting Art To Fuel Your Game’s Success
          </p>
          <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
            As a top-rated game art development company, we bring games to life through high-quality game art that encompasses every visual 
            element. Our unique blend of creative skills and technical expertise enables us to produce awe-inspiring game assets and visual 
            designs tailored to your specific genre, platform, and gameplay requirements.
          </p>
          <ul className="flex list-none justify-center gap-4 flex-wrap">
            <li>
              <button className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white group" data-scroll="#footer" aria-label="Talk to Experts">
                <span className="inline-block w-full bg-[#ff8600] px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#e67c03]">Talk to Experts</span>
              </button>            
            </li>
            <li>
              <Link href="/contact" className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" aria-label="Get Quote">
                <span className="inline-block w-full bg-black px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#ff8600]"> Get Quote </span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>        
      <Image src="/common/game-art/game-art-studio.webp" alt="Game Art Studio" fill priority className="hidden md:block h-full w-full object-cover" />
      <Image src="/common/game-art/game-art-studio-480.webp" alt="Game Art Studio" fill priority className="md:hidden h-[480px] object-cover" />
    </section>

    <main className="relative pt-[2rem] md:pt-[0.2rem] overflow-x-hidden md:overflow-visible">

      <section className="py-2" id="about-us">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Your Trusted Game Art Studio 
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                GameIgnix is a leading game art studio committed to transforming creative vision into production-ready art that powers games. We have a proven 
                track record of supporting leading game companies and publishers with tailored game art services for their games. We bring together skilled 
                artists and designers, all aligned with one goal to deliver visually compelling 2D/3D art. Understanding the expectations of today’s global 
                game market, we operate with the scalability and creative insight needed to match them.
              </p>
            </div>
          </div>
      </section>

      <section className="pt-[2rem] pb-[4rem]">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
              Video Game Art Services We Offer
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
              At GameIgnix, we offer a comprehensive range of game art services tailored to align with your production goals, creative vision, and 
              delivery timeline. Our artists guarantee that every element required to make your game successful comes with high-quality, on-brand 
              visuals. Take a look at our complete list to check out how we can help with your next project.
            </p>
          </div>
          <div className="pt-[40px] md:pt-[160px] pb-[20px]">
            <div className="p-px rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="relative grid grid-cols-1 md:grid-cols-12 bg-[linear-gradient(263.57deg,#010101_64.29%,#DA2C00_224.98%)] rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px]">                  
                <div className="md:col-span-7 min-h-[260px] flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      Concept Art  
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      Our team specializes in creating high-impact, actionable visual blueprints tailored to the project’s specific requirements. Each concept 
                      is developed as creatively inspiring and technically feasible to drive your entire art pipeline.  
                    </p>
                  </div>
                  </div>
                  <div className="static md:relative md:col-span-5">
                    <div className="absolute right-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                      <div className="w-full h-full">
                        <Image src="/common/game-art/game-art-services.webp" alt="Game Art Services" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <ArtConcepts />
          <div className="pt-[70px] md:pt-[220px] pb-[20px]">
              <div className="p-px rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(-260.73deg,#010101_67.5%,#003F9D_233.73%)]">
                 <div className="static md:relative md:col-span-5">
                    <div className="absolute left-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                      <div className="w-full h-full">
                      <Image src="/common/game-art/game-design-services.webp" alt="Game Design Services" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 min-h-[260px] ml-auto flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#ff8600] font-bold italic">
                      2D/3D Assets
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      Our specialty at GameIgnix is producing top-notch 2D and 3D game assets that enhance gameplay on various platforms and genres. Every 
                      asset we provide satisfies the game's visual requirements, whether it is stylized or photorealistic.
                    </p>
                  </div>
                </div>            
              </div>
            </div>
          </div>
          <ArtAssets />
          <div className="pt-[70px] md:pt-[220px] pb-[20px]">
            <div className="p-px rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(263.57deg,#010101_64.29%,#EF0227_224.98%)]">                  
                <div className="md:col-span-7 min-h-[260px] flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      3D Modeling and Texturing 
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      Our 3D modeling and texturing services are designed to achieve the perfect balance between visual fidelity and in-game performance. We 
                      work through a long production path, from initial blockouts and artistic sketches to final textured models, with mindful consideration 
                      of all creative and technical specifications.
                    </p>
                  </div>
                </div>
                <div className="static md:relative md:col-span-5">
                  <div className="absolute right-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                    <div className="w-full h-full">
                      <Image src="/common/game-art/game-art-outsourcing.webp" alt="Game Art Outsourcing Studio" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtTexturing />
          <div className="pt-[70px] md:pt-[220px] pb-[20px]">
            <div className="p-px rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(-260.73deg,#010101_67.5%,#003f9d_233.73%)]">
                <div className="static md:relative md:col-span-5">
                  <div className="absolute left-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                    <div className="w-full h-full">
                      <Image src="/common/game-art/video-game-art-services.webp" alt="Video Game Art Services" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 min-h-[260px] ml-auto flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#ff8600] font-bold italic">
                      Game Animation
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      We offer a wide variety of animation services that bring the entire world of games to life. Whether it's for core game mechanics, 
                      cutscenes, or other interactive moments, we create animation that's fluid, expressive, and true to the gameplay.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtAnimation />
          <div className="pt-[70px] md:pt-[220px] pb-[20px]">
            <div className="p-px rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[20px_100px_20px_20px] md:rounded-[20px_200px_20px_20px] bg-[linear-gradient(263.57deg,#010101_64.29%,#1168b6_224.98%)]">                  
                <div className="md:col-span-7 min-h-[260px] flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      VFX
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      Our VFX artists craft dynamic visual effects that deliver stunning realism and impact. We ensure that every effect, whether subtle 
                      environmental ambiance or combat sequences, is optimized to amplify gameplay, elevate storytelling, and captivate players. 
                    </p>
                  </div>
                </div>
                <div className="static md:relative md:col-span-5">
                  <div className="absolute right-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                    <div className="w-full h-full">
                      <Image src="/common/game-art/game-art-company.webp" alt="Game Art Company" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtVFX />
          <div className="pt-[70px] md:pt-[220px] pb-[20px]">
            <div className="p-px rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-[100px_20px_20px_20px] md:rounded-[200px_20px_20px_20px] bg-[linear-gradient(-260.73deg,#010101_67.5%,#003f9d_233.73%)]">
                <div className="static md:relative md:col-span-5">
                  <div className="absolute left-0 bottom-0 w-full h-full md:h-auto opacity-40 md:opacity-100">
                    <div className="w-full h-full">
                      <Image src="/common/game-art/game-design-company.webp" alt="Game Design Company" width={300} height={200} className="h-auto max-h-full w-full md:h-[400px] object-contain" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 min-h-[260px] ml-auto flex items-end md:block">
                  <div className="p-[1rem_1rem_2rem_1.6rem] md:p-[2rem_1rem_2rem_3rem] relative z-[5]">
                    <h3 className="text-[24px] mt-[0.4rem] mb-[1.5rem] text-[#ff8600] font-bold italic">
                      UI/UX
                    </h3>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-white">
                      We offer UI/UX design services to create intuitive and visually cohesive interfaces for games. We tailor interfaces to the game’s genre 
                      and platform, making every interaction feel natural and seamless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtUIUX />          
        </div>
      </section>

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
        <Image src="/common/game-art/game-idea.webp" alt="Bring Your Game Worlds to Life with Stunning Art" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
          <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
              Bring Your Game Worlds to Life with Stunning Art
            </h2>
            <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              From 2D to 3D characters and immersive game environments, our game artists craft visuals that captivate players and elevate your gaming 
              experience.
            </p>
            <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Get Custom Game Art Today">
              <span> Get Custom Game Art Today </span>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="pb-[4rem]">
        <div className="text-center md:w-[90%] mx-auto w-full">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Our Portfolio
          </h2>
          <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
            Recent Projects We Have Completed
          </p>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
            Showcased in our portfolio is the broad spectrum of artistic depth and adaptability we bring to every project. We ensure every asset we 
            produce serves the gameplay and matches the highest gaming standards.
          </p>
        </div>
        <Portfolio />
      </section>

      <GameArtOutsourcing />

      <GameArtTools />

      <section className="bg-black shadow-[0_0_200px_0_#000] pt-16 mb-8 md:my-8 overflow-hidden">
        <div className="w-full px-4 mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
              Our Game Art Production Process
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
              At GameIgnix, our game art production process is made to support our clients with a streamlined pipeline. We serve as a creative extension of 
              your team, fully accountable for meeting your asset production goals. 
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="absolute left-0 top-0 z-[1] w-full lg:w-auto flex-none h-full lg:h-auto opacity-20 md:opacity-100">
              <div className="relative -top-[120px] -ml-[15px] h-full lg:h-auto">
                <Image src="/common/game-art/game-art-development-company.webp" alt="Game Art Development Company" width={800} height={950} className="block object-cover w-full h-full md:h-auto md:max-w-full" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
              <div className="lg:pr-5 md:pr-3 pr-0 relative">
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Art Direction and Style Guide Creation</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our art directors collaborate with clients to establish a cohesive visual direction that aligns with the gameplay, genre, and narrative 
                    tone. We create complete style guides and visual references to provide clarity throughout production. 
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Visual Prototyping and Sketching</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Next, our team develops sketches, thumbnails, and visual mockups to explore different artistic approaches and concepts. We visualize core 
                    elements and refine ideas until they reflect the game’s creative intent before moving into full production.  
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Asset Design and Production</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Immediately after establishing the visual direction, our artists begin developing high-quality 2D and 3D assets with meticulous artistic 
                    finesse and technical expertise. Characters, props, UI elements, environments, and VFX are created using a combination of multiple 3D modeling 
                    and animation techniques, all well-balanced between visual appeal and performance.  
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Texturing and Final Review</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    After modeling, we step in to optimize each asset with detailed texturing and surface treatments like physically-based rendering, UV mapping, 
                    and other techniques. Assets are then carefully reviewed for quality and consistency through internal checks before considering them final. 
                  </p>
                </div>

                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Technical Integration and Optimization</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our technical artists perform polygon reduction, level of detail adjustments, shader development, and VFX tuning to prepare assets for 
                    seamless integration into the engine. To ensure a seamless integration process, we collaborate closely with the development team to achieve 
                    the desired performance while maintaining aesthetic integrity. 
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Final Launch and Delivery</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    At the final stage, we prepare and pack all the final deliverables in clean, structured formats. We provide ready-to-deploy asset packs that 
                    are optimized for compatibility across your preferred platforms, making the launch process efficient.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Post-Launch Upgrades</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    We stay available to assist with post-launch art requirements, including seasonal updates, asset expansions, and live operations based on 
                    live feedback. Our support continues beyond delivery to keep your game engaging. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtTeams />

      <section className="py-12">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Engagement Models At Our Game Art Development Company</h2>
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              At GameIgnix, we offer flexible collaboration models from which you can choose according to your resource needs and production goals. 
              Our models are made to support your creative pipeline with the outcomes you desire. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                  <Image src="/common/game-art/project-based-model.webp" alt="Project-Based Engagement" width={640} height={350} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                  Project-Based Engagement
                </h3>
                <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                  Our project-based model allows you to partner with us for end-to-end delivery of specific game art requirements. We take full ownership of 
                  the art pipeline, ensuring consistent delivery and minimal oversight from your side.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                  <Image src="/common/game-art/dedicated-team.webp" alt="Dedicated Art Teams" width={640} height={350} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                  Dedicated Art Teams
                </h3>
                <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                  For those seeking a long-term visual production partner, our dedicated team model provides you with a full-time crew of artists, tailored to 
                  your project’s style, volume, and pace. This setup offers direct access to our art leads and production managers, ensuring efficient 
                  collaboration. 
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                  <Image src="/common/game-art/team-extension.webp" alt="Team Extension" width={640} height={350} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                  Team Extension
                </h3>
                <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                  Need focused expertise? Our artists integrate with your in-house staff to fill their skill gaps. With this model, you can leverage our 
                  domain expertise and talent while maintaining complete control over your pipeline.   
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
        <Image src="/common/game-art/game-build.webp" alt="Choose Your Model, Start Your Project" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
          <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
              Choose Your Model, Start Your Project
            </h2>
            <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Whether you need a dedicated team, a single game artist, or a full-cycle solution, our flexible engagement models make it easy to kickstart 
              your project today.
            </p>
            <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Launch Your Game with Us">
              <span> Launch Your Game with Us </span>
            </Link>
          </div>
        </div>
      </section>      

      <ArtFaq />

      <Testimonials />

      <section className="contactsc" id="footer">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Need high-quality game art services or creative support for your project? Our team is just a message away. Fill out the form, 
              and let’s turn your ideas into stunning visuals.
            </p>
          </div>        
          <Contact />    
        </div>
      </section> 
      
    </main>

    </>
  );
}