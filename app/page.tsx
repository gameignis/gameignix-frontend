"use client";

import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import ReliableGameDevelopment from "@/components/ReliableGameDevelopment";
import Genres from "@/components/Genres";
import ToolsAndTechnologies from "@/components/ToolsAndTechnologies";
import HomeEngines from "@/components/HomeEngines";
import HowDoWeWork from "@/components/HowDoWeWork";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                  Game Development Company
                </h1>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  Ignite Your Iconic Game With GameIgnix
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  We are a passionate game development company, specializing in
                  creating immersive gaming experiences fueled by creativity and
                  innovation. Our unique selling points include our ability to craft
                  high-impact and standout game titles that blaze brightly in the
                  dynamic gaming universe.
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
          <Image src="/common/best-game-development-company.webp" alt="Game Development Company" fill priority className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/best-game-development-company-480.webp" alt="Game Development Company" fill priority className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="relative pt-16 md:pt-8 overflow-x-hidden md:overflow-visible">

          <section className="pt-0 pb-16" id="about-us">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  GameIgnix - A Premier Game Development Studio
                </h2>
                <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] lg:my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
                  I͏gniting Inn͏ovation In Every Game We Invent 
                </p>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  GameIgnix is a leading game development studio that has successfully delivered exceptional game projects, 
                  revolutionizing the gaming experience with each release. Driven by a relentless passion for innovation and quality, 
                  we provide standout games that set new standards and fuel our clients’ success. We are a team of pro game developers 
                  sparking imagination in every game we develop, whether large-scale mobile games or cinematic console releases. 
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                        <Image src="/common/gameignix-mission.webp" alt="GameIgnix Mission" loading="lazy" width={80} height={64} className="max-w-full h-[40px] object-contain ml-[-14px] mb-[10px] lg:h-auto lg:ml-0 flex-shrink-0" />
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        Our Mission
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        Our mission is to ignite games with bold ideas and groundbreaking innovation, pushing the boundaries of art, 
                        design, and development. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                        <Image src="/common/gameignix-vision.webp" alt="GameIgnix Vision" loading="lazy" width={80} height={64} className="max-w-full h-[40px] object-contain ml-[-14px] mb-[10px] lg:h-auto lg:ml-0 flex-shrink-0" />
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        Our Vision
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        GameIgnix aims to become a creative powerhouse, leading a new era of game development where every creative 
                        game we produce sets the stage for the future of gaming. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                        <Image src="/common/gameignix-philosophy.webp" alt="GameIgnix Philosophy" loading="lazy" width={80} height={64} className="max-w-full h-[40px] object-contain ml-[-14px] mb-[10px] lg:h-auto lg:ml-0 flex-shrink-0" />
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                        Our Philosophy
                      </h3>
                      <p className="text-[14px] leading-[24px] lg:text-[16px]">
                        Games are experiences that connect people, inspire creativity, and ignite imagination. Every project is 
                        approached with the fire of innovation and a commitment to quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-4">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  We Offer Comprehensive Services
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                  At GameIgnix, we offer a comprehensive range of services, led by a dedicated team of game developers, designers, and 
                  storytellers. Our services cover every aspect of game development, from concept to launch, and we focus on creating games 
                  that captivate players and leave a lasting impact, regardless of the platform or genre.
                </p>
              </div>

              <div className="my-8 md:my-10 min-h-auto md:min-h-[515px] overflow-hidden border border-[#ff8300] bg-[linear-gradient(224deg,#010102_50%,#a907b82e_100%)] rounded-[60px_10px_10px_10px] md:rounded-[100px_20px_20px_20px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                  <div className="w-full md:col-span-7">
                    <div className="py-[1rem] md:py-[2rem] pr-[1rem] pl-[1.6rem] md:pl-[3rem] relative z-[10]">
                        <h3 className="text-[19px] md:text-[24px] leading-[26px] md:leading-[32px] text-[#ff8600] capitalize font-bold italic my-[1.5rem]">
                        Game De͏velopment
                        </h3>
                        <p className="text-[15px] leading-[24px] lg:text-[16px]">
                        As a full-service video game development studio and agency, GameIgnix specializes in end-to-end game 
                        development for mobile, PC, and console platforms. Whether you’re an indie developer, publisher, or brand, 
                        our expert team is here to help you build your desired game.
                        </p>
                        <ul className="flex flex-wrap gap-[10px] my-8">
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="#" aria-label="Full-Cycle Game Dev͏elopment" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Full-Cycle Game Dev͏elopment</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="/services/mobile-game-development" target="_blank" aria-label="Mobile Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Mobile Game͏ ͏Dev͏elopment</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="#" aria-label="PC Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">PC Game Development</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="#"  aria-label="Console Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Console Game Development</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="/services/unity-game-development" target="_blank" aria-label="Unity 3D Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Unity 3D Game Development</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="/services/unreal-engine-game-development" target="_blank" aria-label="Unreal Engine Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Unreal Engine Game Development</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="#" aria-label="Game Testing" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Game Testing</span>
                            </Link>
                        </li>
                        <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                            <Link href="#" aria-label="Game Porting" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                              <span className="w-[96%] text-center">Game Porting</span>
                            </Link>
                        </li>
                        </ul>
                        <Link href="/services" target="_blank" aria-label="Game Development Services" className="flex justify-center w-full underline uppercase text-white font-semibold cursor-default mb-4 md:mb-8 hover:text-[#ff8600]">
                          View All
                        </Link>
                    </div>
                  </div>
                  <div className="w-full md:col-span-5 flex absolute inset-y-0 left-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full">
                      <Image src="/common/game-development-studio.webp" alt="Game Development Studio" width={300} height={200} className="grow w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8 md:my-10 min-h-auto md:min-h-[515px] overflow-hidden border border-[#ff8300] bg-[linear-gradient(120deg,#010102_60%,#2d7dd647_100%)] rounded-[10px_60px_10px_10px] md:rounded-[20px_100px_20px_20px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                    <div className="w-full md:col-span-5 flex absolute inset-y-0 right-0 h-full opacity-20 md:relative md:opacity-100">
                        <div className="flex flex-col w-full h-full">
                            <Image src="/common/game-development-agency.webp" alt="Game Development Agency" width={300} height={200} className="grow w-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full md:col-span-7">
                        <div className="py-[1rem] md:py-[2rem] pr-[1rem] pl-[1.6rem] md:pl-[3rem] relative z-[10]">
                            <h3 className="text-[19px] md:text-[24px] leading-[26px] md:leading-[32px] text-[#ff8600] capitalize font-bold italic my-[1.5rem]">Game Art</h3>
                            <p className="text-[15px] leading-[24px] lg:text-[16px]">
                                We combine our technical skills with endless creativity to bring your games to life with vibrant
                                animations
                                and expertly crafted characters, environments, and assets for a wide range of gaming genres.
                            </p>
                            <ul className="flex flex-wrap gap-[10px] my-8">
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="Game Concept Art" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">Game Concept Art</span>
                                    </Link>
                                </li>
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="3D Animation" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">3D Animation</span>
                                    </Link>
                                </li>
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="3D Modeling" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">3D Modeling</span>
                                    </Link>
                                </li>
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="2D Game Art" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">2D Game Art</span>
                                    </Link>
                                </li>
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="Game Environment" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">
                                        Game Environment
                                    </span>
                                    </Link>
                                </li>
                                <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                                    <Link href="#" aria-label="3D Character Design" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                                    <span className="w-[96%] text-center">3D Character Design</span>
                                    </Link>
                                </li>
                            </ul>
                            <Link href="/game-art-services" target="_blank" aria-label="Game Art Services" className="flex justify-center w-full underline uppercase text-white font-semibold cursor-default mb-4 md:mb-8 hover:text-[#ff8600]">
                            View All
                            </Link>
                        </div>
                    </div>
                </div>
              </div>

              <div className="my-8 md:my-10 min-h-auto md:min-h-[515px] overflow-hidden border border-[#ff8300] bg-[linear-gradient(224deg,#010102_50%,#fbe30f1f_100%)] rounded-[60px_10px_10px_10px] md:rounded-[100px_20px_20px_20px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                <div className="w-full md:col-span-7">
                  <div className="py-[1rem] md:py-[2rem] pr-[1rem] pl-[1.6rem] md:pl-[3rem] relative z-[10]">
                      <h3 className="text-[19px] md:text-[24px] leading-[26px] md:leading-[32px] text-[#ff8600] capitalize font-bold italic my-[1.5rem]">
                      Game Inn͏ovation
                      </h3>
                      <p className="text-[15px] leading-[24px] lg:text-[16px]">
                      Co͏llaborate͏ with ͏us to͏ combine our͏ tec͏hnical p͏rowe͏ss of ͏expe͏rt coding and game͏ de͏sign with your creati͏ve 
                      game͏ id͏eas, per͏fec͏tly align͏ing wi͏th the rigorou͏s demand͏s of ga͏me cr͏eation.
                      </p>
                      <ul className="flex flex-wrap gap-[10px] my-8">
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="/services/blockchain-game-development" aria-label="Blockchain Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">Blockchain Game Development</span>
                          </Link>
                      </li>
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="/services/web3-game-development" target="_blank" aria-label="Web3 Game Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">Web3 Game Development</span>
                          </Link>
                      </li>
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="#" aria-label="͏NFT͏ ͏Game D͏evel͏opment͏" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">͏NFT͏ ͏Game D͏evel͏opment͏</span>
                          </Link>
                      </li>
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="#" aria-label="Meta͏verse ͏G͏ame Develop͏men͏t" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">Meta͏verse ͏G͏ame Develop͏men͏t</span>
                          </Link>
                      </li>
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="/services/unity-game-development" target="_blank" aria-label="AR Gam͏e ͏D͏evel͏opment" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">AR Gam͏e ͏D͏evel͏opment</span>
                          </Link>
                      </li>
                      <li className="w-[47%] my-0 xl:w-[32%] xl:my-[6px]">
                          <Link href="/services/unreal-engine-game-development" target="_blank" aria-label="V͏R Game͏ Development" className="relative h-full md:h-auto self-stretch w-full isolate inline-grid place-content-center px-6 py-2 text-[14px] xl:text-[15px] text-white border-0 bg-transparent shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250 [clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] [-webkit-clip-path:polygon(0%_16px,16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0%_100%)] before:content-[''] before:absolute before:inset-[-1px] before:bg-[#ff8300] before:z-[-2] after:content-[''] after:absolute after:inset-[-1px] after:bg-[#080312] after:z-[-1] after:duration-500 after:[clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] after:[-webkit-clip-path:polygon(2px_18px,18px_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),2px_calc(100%-2px))] hover:text-white focus:text-white hover:after:[clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))] hover:after:[-webkit-clip-path:polygon(calc(100%-2px)_calc(100%-18px),calc(100%-2px)_2px,calc(100%-2px)_2px,calc(100%-2px)_calc(100%-18px),calc(100%-18px)_calc(100%-2px),calc(100%-18px)_calc(100%-2px))]">
                          <span className="w-[96%] text-center">V͏R Game͏ Development</span>
                          </Link>
                      </li>
                      </ul>
                      <Link href="#" aria-label="Game Inn͏ovation" className="flex justify-center w-full underline uppercase text-white font-semibold cursor-default mb-4 md:mb-8 hover:text-[#ff8600]">
                        View All
                      </Link>
                  </div>
                  </div>
                  <div className="w-full md:col-span-5 flex absolute inset-y-0 left-0 h-full opacity-20 md:relative md:opacity-100">
                  <div className="flex flex-col w-full h-full">
                      <Image src="/common/video-game-development-company.webp" alt="Video Game Development Company" width={300} height={200} className="grow w-full object-cover" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
          <section className="pt-[3rem] pb-[7rem]" id="portfolio">
            <div className="text-center md:w-[90%] mx-auto w-full">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Ga͏me Portfolio
              </h2>
              <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
                Recent Projects We Have Completed
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
                We t͏ransfo͏rm im͏agi͏n͏ation into ͏im͏mersive expe͏riences.͏ Our portfo͏li͏o showcases a diver͏se range of projec͏ts that͏ high͏light ͏our
                e͏xpertise ͏in crafting͏ ͏uni͏que, en͏g͏agi͏ng, a͏nd innovative͏ ga͏mes.͏
              </p>
            </div>
            <Portfolio />
          </section>

          <CaseStudies />

          <ReliableGameDevelopment />

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/ignite-idea.webp" alt="Ready to Ignite Your Game Idea?" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Ready to Ignite Your Game Idea?
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Whether you have a concept ready or just an idea burning bright, let’s bring it to life together. At GameIgnix, we 
                transform passion into playable worlds.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
              </div>
            </div>
          </section>

          <Genres />

          <ToolsAndTechnologies />

          <HomeEngines />

          <HowDoWeWork />

          <Teams />

          <section className="py-12">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-4 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Our Engagement Models</h2>
                <p className="text-[15px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-[#e6e6e6] mb-[1rem] lg:mb-[2rem]">
                  At GameIgnix, we not only customize game solutions to meet your requirements but also offer the best-fit engagement 
                  model for your project. Our engagement model is built on transparency and collaboration, with a clear line of sight 
                  on progress.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-3 lg:px-5 pt-1 lg:pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] xl:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/dedicated-team.webp" alt="Dedicated Team" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[17px] lg:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] lg:my-[1.8rem] text-white">
                      Dedicated Team
                    </h3>
                    <p className="text-[14px] leading-[20px] xl:leading-[24px] xl:text-[16px] mb-4 text-center">
                      Our dedicated team model provides businesses with full-time, committed game developers who harness advanced 
                      technologies and industry best practices to deliver top-tier gaming solutions tailored to your unique needs.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-3 lg:px-5 pt-1 lg:pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] xl:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/team-extension.webp" alt="Team Extension" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[17px] lg:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] lg:my-[1.8rem] text-white">
                      Team Extension
                    </h3>
                    <p className="text-[14px] leading-[20px] xl:leading-[24px] xl:text-[16px] mb-4 text-center">
                      Our team extension model enables businesses to scale their development teams by adding skilled game developers 
                      who bring the required expertise for their projects, while aligning with existing workflows and processes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-3 lg:px-5 pt-1 lg:pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#ff8600] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] xl:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/project-based-model.webp" alt="Project-Based Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[17px] lg:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] lg:my-[1.8rem] text-white">
                      Project-Based Model
                    </h3>
                    <p className="text-[14px] leading-[20px] xl:leading-[24px] xl:text-[16px] mb-4 text-center">
                      Our project-driven approach, backed by experienced game development specialists, ensures efficient 
                      collaboration and successful delivery of your gaming project within a defined scope, timeline, and budget. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
            <Image src="/common/dedicated-dev-team.webp" alt="Do You Need Extra Hands or a Dedicated Development Team?" width={1440} height={600} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[24px] lg:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Do You Need Extra Hands or a Dedicated Development Team?
              </h2>
              <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Our game developers power up your production with expert skill, rapid execution, and passion for games.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="HIRE OUR GAME DEVELOPER">
                <span> HIRE OUR GAME DEVELOPER </span>
              </Link>
              </div>
            </div>
          </section>

          <Testimonials /> 

          <FaqAccordion />

          <section className="py-[2rem]" id="footer">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Have a game idea or project in mind? Share your requirements with GameIgnix, and our team will get back to you with the perfect 
                  solution tailored to your goals.
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
