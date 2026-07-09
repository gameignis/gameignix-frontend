"use client";
import Image from "next/image";
import Link from 'next/link';
import WhiteLabelTeams from "@/components/WhiteLabelTeams";
import WhyChooseWhiteLabelCasino from "@/components/WhyChooseWhiteLabelCasino";
import WhiteLabelPortfolio from "@/components/WhiteLabelPortfolio";
import WhiteLabelCaseStudies from "@/components/WhiteLabelCaseStudies";
import WhiteLabelCasinoTools from "@/components/WhiteLabelCasinoTools";
import Testimonials from "@/components/Testimonials";
import WhiteLabelFaq from "@/components/WhiteLabelFaq";
import Contact from "@/components/Contact";

export default function WhiteLabelCasinoPageServer() {

  return (
    <>

    <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
        <div className="relative z-[5] h-full">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
              <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                White Label Casino
              </h1>
              <p className="font-semibold tracking-[0px] md:tracking-[1px] my-[0.8rem] lg:text-[24px] text-[20px] text-[#ff8600] italic">
                Your Brand, Your Rules
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                Launch your own casino brand with speed, efficiency, and full functionality through GameIgnix’s ready-to-deploy White Label 
                Casino Solutions. Designed to be scalable and profit-ready, these solutions help you build your gaming business seamlessly across 
                mobile, web, and real-money platforms with ease.
              </p>
              <ul className="flex list-none justify-center gap-4 flex-wrap">
                <li>
                  <button className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white group" data-scroll="#footer" aria-label="Talk to Experts">
                    <span className="inline-block w-full bg-[#ff8600] px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#e67c03]"> 
                      Talk to Experts 
                    </span>
                  </button>            
                </li>
                <li>
                  <Link href="/contact" className="inline-block bg-[#ff8600] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group" aria-label="Get Quote">
                    <span className="inline-block w-full bg-black px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#ff8600]">
                      Get Quote 
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>        
        <Image src="/common/casino-game/casino-game-development-company.webp" alt="White Label Casino" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
        <Image src="/common/casino-game/casino-game-development-company-480.webp" alt="White Label Casino" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
    </section>

    <main className="relative pt-[2rem] md:pt-[0.2rem] overflow-x-hidden md:overflow-visible">

      <section className="pb-10" id="about-us">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
              Inside the World of White Label Casino
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
              A white label casino is a ready-made online casino platform that you can brand and run as your own. It eliminates the need to 
              build technology from scratch or secure difficult gaming licenses. GameIgnix handles everything from development and compliance 
              to payment systems and game integration. This allows you to concentrate on marketing, engaging users, and growing your business. 
              It’s the fastest, most cost-effective way to launch in the online gaming space. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex">
              <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">                  
                  <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                    Ready-to-Launch White-label Online Casino
                  </h3>
                  <p className="text-[14px] leading-[24px] lg:text-[16px]">
                    Our white-label casino platform is designed for quick and flexible deployment. It comes with pre-integrated games, secure 
                    payment systems, and powerful CRM tools. You can fully customize the brand and user experience to match your business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                  <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                    White Label Crypto Casino
                  </h3>
                  <p className="text-[14px] leading-[24px] lg:text-[16px]">
                    Deliver a future-ready gaming experience with our crypto-enabled casino platform. It supports multiple digital currencies 
                    like Bitcoin, Ethereum, and USDT for maximum flexibility. Players enjoy fast, secure, and anonymous transactions designed 
                    for global access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[2rem] pb-[4rem]">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
               Key Features of Our White Label Casino Software
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
              Our white label casino software is fully customizable, compliant, and built for high performance, delivering an immersive 
              gaming experience. It also simplifies operations with real-time analytics and advanced marketing tools.
            </p>
          </div>

          <div className="my-[3rem]">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        1. Multi-Genre Game Library
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                        We offer a range of games, including slots, poker, blackjack, baccarat, bingo, and more. Each game 
                        features rich visuals and fair play certification for a trusted experience.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        2. Multi-Currency Support
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                        Cater to a global audience with support for both fiat and crypto transactions. Let users deposit, 
                        withdraw, and play using their preferred currency.
                      </p>
                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        3. Secure Payment System
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[1rem]">
                        Integrate trusted payment gateways for fast, secure transactions with built-in fraud prevention and 
                        data encryption. KYC compliance ensures complete financial safety for both operators and players.
                      </p>
                  </div>
                  </div>
                  <div className="md:w-[42%] flex justify-end absolute right-0 h-full opacity-20 md:relative md:opacity-100">
                    <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                       <Image src="/common/casino-game/casino-game-development-services.webp" alt="Casino Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[440px] object-cover" />
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="mt-[3rem]">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex items-stretch relative rounded-[18px] p-[15px] md:p-[20px_60px_20px_20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)]">
                <div className="md:w-[42%] flex absolute left-0 h-full opacity-20 md:relative md:opacity-100">
                  <div className="flex flex-col w-full h-full md:w-[88%] rounded-[10px] overflow-hidden opacity-40 md:opacity-100">                            
                    <Image src="/common/casino-game/casino-game-development.webp" alt="Casino Game Development" width={300} height={200} loading="lazy" className="w-full h-full md:h-[440px] object-cover" />
                  </div>
                </div>
                <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                  <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        4. Admin Dashboard and CRM
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                        Manage your platform efficiently with a user-friendly admin dashboard and integrated CRM tools. 
                        Monitor player behavior, launch promotions, and access real-time reports effortlessly.
                      </p>

                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        5. Fast Deployment
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                        Launch your platform in just 10 to 15 days with our pre-configured white label solution. It includes 
                        licensing support, integrated game content, and essential backend tools for a smooth start.
                      </p>

                      <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#ff8600] font-bold italic capitalize">
                        6. Mobile-Optimized Platform
                      </h3>
                      <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[1rem]">
                        Deliver smooth, responsive gaming across all mobile devices with our lightweight platform. It ensures 
                        top performance on Android, iOS, and tablets alike.
                      </p>
                  </div>
                </div>            
              </div>
            </div>
          </div>  
        </div>
      </section>

      <WhiteLabelTeams />

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
        <Image src="/common/casino-game/game-idea.webp" alt="Your White Label Casino, Ready to Launch" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
            Your White Label Casino, Ready to Launch
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
            Get a fully exclusive White Label Casino solution with seamless integrations, secure payments, and global reach, ready to 
            deploy in no time.
          </p>
          <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build">
            <span> Let’s Build </span>
          </Link>
          </div>
        </div>
      </section>

      <WhyChooseWhiteLabelCasino />

      <section className="pt-[3rem] pb-[7rem]" id="portfolio">
        <div className="text-center md:w-[90%] mx-auto w-full">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Our Casino Game Portfolio
          </h2>
          <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#ff8600] italic uppercase">
            Recent Projects We Have Completed
          </p>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
            Discover a rich portfolio of high-quality casino games that drive engagement and revenue. Explore slots, table games, and 
            live dealer experiences on one platform.
          </p>
        </div>
        <WhiteLabelPortfolio />
      </section>

      <WhiteLabelCaseStudies />

      <WhiteLabelCasinoTools />

      <section className="bg-black shadow-[0_0_200px_0_#000] pt-8 mb-8 md:my-8 overflow-hidden">
        <div className="w-full px-4 mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
               Our White Label Casino Software Development Process
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem]">
              Our structured approach ensures every casino platform is tailored, compliant, and ready to perform. Each stage is designed to deliver a 
              seamless and efficient launch for your business.
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="afflef">
              <div className="affim">
                <Image src="/common/casino-game/casino-game-developers.webp" alt="Casino Software Development Process" width={700} height={1000} loading="lazy" className="h-auto max-w-full" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
              <div className="lg:pr-5 md:pr-3 pr-0 relative">
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Consultation and Requirement Gathering</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    The process starts with understanding your business goals, target users, and technical needs. We gather all essential 
                    details to build a strong development roadmap. This helps ensure clarity and precision from the start.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Platform Customization and Branding</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    We design the platform to reflect your brand style and user expectations. Custom layouts, themes, and interfaces are 
                    created to match your identity. This brings your vision to life in every detail.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Licensing and Legal Compliance</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Our team guides you through acquiring licenses and meeting jurisdictional requirements. All legal aspects are carefully 
                    managed. This ensures your platform operates with full compliance and integrity.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Integration of Games, Payments, and Features</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    We add a diverse selection of games, secure payment options, and essential casino features. Every integration is tested 
                    for compatibility and ease of use. The result is a complete and user-friendly platform.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Quality Assurance and Testing</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Before launch, we test the platform across all functions to ensure stability and performance. Every bug is fixed, and 
                    every feature is refined. This guarantees a smooth and reliable operation.
                  </p>
                </div>
                <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                  <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Go Live and Post-Launch Support</h3>
                  <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                    Once the platform goes live, we will provide continuous support and updates. Our team ensures smooth performance, handles 
                    technical issues, and implements upgrades. This ongoing service helps your platform grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
        <Image src="/common/casino-game/game-build.webp" alt="Connect for Your White Label Casino Needs" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-black/40" />
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
             Connect for Your White Label Casino Needs
            </h2>
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Have questions about White Label Casino development? Connect with our team for tailored solutions, expert guidance, and end-to-end 
              support to bring your casino vision to life.
            </p>
            <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let's Talk">
              <span> Let's Talk </span>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <WhiteLabelFaq />
      
      <section className="py-[2rem]" id="footer">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
            <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
              Request a demo today and discover how our White Label Casino platform can take your business to the next level.
            </p>
          </div>        
          <Contact />    
        </div>
      </section>    

    </main>

    </>
  );
}