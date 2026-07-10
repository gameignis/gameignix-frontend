"use client";
import Image from "next/image";
import Link from 'next/link';
import Web3Portfolio from "@/components/Web3Portfolio";
import Web3CaseStudies from "@/components/Web3CaseStudies";
import WhyChooseWeb3Game from "@/components/WhyChooseWeb3Game";
import Web3GameTools from "@/components/Web3GameTools";
import Web3GameAdvantage from "@/components/Web3GameAdvantage";
import Web3GameTeams from "@/components/Web3GameTeams";
import Web3Faq from "@/components/Web3Faq";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Web3GamePageServer() {

  return (
    <>

      <main>

        <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
          <div className="relative z-[5] h-full">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
                <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#F57C00] font-bold">
                  Web3 Game Development
                </h1>    
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                  GameIgnix is a top-rated Web3 game development company, recognized for its expertise in blockchain and NFT technology. Trusted by 
                  visionary studios worldwide, we develop highly secure and futuristic Web3 games. Our solutions not only drive engagement, ownership, 
                  and long-term growth in this Web3 ecosystem but also offer unique benefits such as absolute asset ownership and transparent reward 
                  systems.
                </p>
                <ul className="flex list-none justify-center gap-4 flex-wrap">
                  <li>
                    <button aria-label="Talk to Experts" data-scroll="#footer" className="inline-block bg-[#F57C00] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white group">
                      <span className="inline-block w-full bg-[#F57C00] px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#e67c03]">
                        Talk to Experts
                      </span>
                    </button>         
                  </li>
                  <li>
                    <Link href="/contact" aria-label="Get Quote" className="inline-block bg-[#F57C00] p-[1px] text-[15px] leading-[24px] md:text-[18px] [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group">
                      <span className="inline-block w-full bg-black px-[15px] py-[2px] font-medium text-white transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group-hover:bg-[#F57C00]">
                        Get Quote
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
            </div>        
          <Image src="/common/web3-game/web3-game-development-company.webp" alt="Web3 Game Development Company" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
          <Image src="/common/web3-game/web3-game-development-company-480.webp" alt="Web3 Game Development Company" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
        </section>

        <div className="pt-16 md:pt-8 relative overflow-x-hidden md:overflow-visible">

          <section className="pt-0 pb-16" id="about-us">
              <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
                <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                  <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                    GameIgnix: Top-Rated Web3 Game Development Company
                  </h2>
                  <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                    We are the leading players in Web3 game development, offering comprehensive gaming solutions to build a range of games across genres and 
    platforms. With rich expertise in blockchain, tokenized assets, and wallet integration, we build next-gen Web3 games that attract players 
    and generate revenue. We utilize cutting-edge technologies and tools to create games that provide visually engaging and immersive gaming 
    experiences.
                  </p>
                </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="flex">
                    <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                      <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">                  
                        <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#F57C00] italic">
                          Blockchain Game Development
                        </h3>
                        <p className="text-[14px] leading-[24px] lg:text-[16px] text-white">
                          We build blockchain games that give players real ownership of in-game assets and transparent reward systems. Our blockchain games enable 
      secure trading, token integration, and decentralized gameplay. This creates long-lasting engagement and new revenue models.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                    <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                        <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#F57C00] italic">
                          NFT Game Development
                        </h3>
                        <p className="text-[14px] leading-[24px] lg:text-[16px] text-white">
                            We create NFT games where players fully own their in-game items and can earn real rewards. With play-to-earn features, they can trade, 
      stake, or make money from NFTs. Our games are secure, scalable, and designed to keep players engaged while generating new revenue streams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          <section className="pt-[2rem]">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">

              <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Web3 Game Development Services
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  We offer a comprehensive suite of web3 game development services to help enterprises, gaming studios, and startups confidently enter the 
      decentralized gaming space. Our services are tailored to bring your game idea to life with scalable technology, secure infrastructure, and 
      sustainable game economies.
                </p>
              </div>
              
              <div className="my-8">
                <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                  <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                    <div className="md:w-[58%] w-full relative z-[10]">
                      <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                          <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                            1. Custom Web3 Game Development 
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                            At GameIgnix, we build Web3 games from scratch, tailored to your business model, gameplay ideas, and user base. Our process involves 
            understanding your vision, designing mechanics and token flows, creating visuals and backend logic, and finally, crafting a 
            customized Web3 experience that supports your unique gameplay and objectives.
                          </p>
                          <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                            2. Game Design Consulting
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                            We help you shape your game concept into a market-ready model. From gameplay mechanics to NFT use cases, our consultants ensure your 
            idea is engaging, scalable, and aligned with your business goals. Every decision is made with your players and ROT in mind. 
                          </p>
                          <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                            3. Tokenomics and Utility Token Creation
                          </h3>
                          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[1rem]">
                            We provide you with a strong token model that powers a thriving game economy. We design balanced tokenomics that drive player 
            retention, incentivize engagement, and enable in-game earnings. From inflation control to staking models, we’ve got you covered. 
                          </p>
                       </div>
                      </div>
                      <div className="md:w-[42%] flex absolute right-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                         <div className="flex flex-col w-full h-full flex flex-column">
                          <Image src="/common/web3-game/web3-game-development.webp" alt="Web3 Game Development" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                      </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="md:my-12">
                  <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                    <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                      <div className="md:w-[42%] flex absolute left-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                        <div className="flex flex-col w-full h-full flex flex-column">
                          <Image src="/common/web3-game/web3-game-development-services.webp" alt="Web3 Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                        </div>
                      </div>
                      <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                        <div className="p-[0.2rem_0.5rem] md:p-[0.5rem_1rem]">
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                          4. Smart Contract for In-game Assets
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          We develop robust smart contracts that manage your game’s core logic, from asset minting to reward distribution. Each contract is 
          thoroughly tested and audited for security and performance. Your game will run seamlessly, independently, and transparently on-chain. 
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                          5. Wallet and Payment Gateway Integration
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[2rem]">
                          We make it easy for players to get started by connecting popular crypto wallets and payment options. Whether they're new to 
          blockchain or experienced with Web3, transactions are quick, simple, and secure. This helps boost adoption across all user types.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] my-[0.7rem] text-[#F57C00] font-bold italic capitalize">
                          6. Cross-Platform Game Development 
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white mb-[1rem]">
                        We deliver seamless gameplay experiences that are compatible with all major systems. Our web3 game developers build and deploy your 
          game across all platforms - mobile, browser, desktop, and even VR, so you can engage players wherever they are.
                        </p>
                        </div>
                      </div>
                  </div>
                </div>
              </div> 
                  
            </div>
          </section>

          <section className="pt-[5rem] md:pt-[3rem] pb-[7rem]" id="portfolio">
            <div className="text-center md:w-[90%] mx-auto w-full">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Game Portfolio
              </h2>
              <p className="font-semibold tracking-[0px] md:tracking-[1px] mb-[0.8rem] text-[20px] lg:text-[24px] text-[#F57C00] italic uppercase">
                Discover Our Recent Projects
              </p>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem] max-w-[96%] mx-auto">
                We build next-gen games that burn bright. Our portfolio features a diverse range of projects across multiple genres, showcasing our 
      creativity and technical expertise in crafting futuristic gaming experiences.
              </p>
            </div>
            <Web3Portfolio />
          </section> 

          <Web3CaseStudies />

          <WhyChooseWeb3Game />

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/web3-game/web3-game-idea.webp" alt="Got a Game Idea? Let’s Set It on Fire!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full box-border font-bold uppercase">
                Got a Game Idea? Let’s Set It on Fire!
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Whether it’s a full concept or just a spark, we’ll ignite it into reality. At GameIgnix, we craft next-gen games that captivate.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#F57C00] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#F57C00] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
              </div>
            </div>
          </section>
          
          <Web3GameTools />      

          <section className="bg-black shadow-[0_0_200px_0_#000] pt-4 mb-8 md:my-8 overflow-hidden">
            <div className="w-full px-4 mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                  Our Web3 Game Development Process
                </h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                  We follow a planned, stage-driven development process designed to turn your Web3 game idea into a scalable, secure, and player-ready product. 
    From concept validation to post-deployment support, every step is carefully planned to provide immersive gaming and blockchain-based 
    functioning. 
                </p>
              </div>
              <div className="relative flex flex-wrap">
                <div className="afflef">
                  <div className="affim">
                    <Image src="/common/web3-game/web3-game-company.webp" alt="Web3 Game Company" width={800} height={950} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
                <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                  <div className="lg:pr-5 md:pr-3 pr-0 relative">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Ideation</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We begin by aligning your game vision with business goals, then determining core mechanics, NFT functionalities, and monetisation 
      strategies. This phase ensures your Web3 game is user-engaging, market-ready, and profitable.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Blockchain Architecture</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Choosing the right blockchain determines the performance and scalability of the game. We evaluate network capabilities, transaction costs, 
      and compliance factors to design a secure, high-performance framework tailored to the game’s requirements.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Smart Contract Development</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We create and thoroughly test smart contracts that control your in-game assets, token economy, and governance rules. We ensure it is secure, 
      gas-optimized, and audit-ready code to prevent exploits and downtime. 
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">UI/UX Development</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We build fast, immersive games integrated with Web3 layers using engines like Unity or Unreal. Our designers create user-friendly interfaces 
      that make it easy for crypto and mainstream users to smoothly onboard. 
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Testing and Optimization</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We run extensive testing cycles to eliminate bugs, prevent exploits, and improve gameplay mechanics. From load testing to anti-cheat systems 
      and transaction fee optimization, every game element is tested for stability.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Deployment and Post-Launch Support</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We help you launch in confidence by configuring infrastructure, integrating analytics, and scaling environments. We provide updates, 
      community support, and operational assistance to help you evolve your game and maintain player engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-wrap how-rev">
                <div className="order-2 md:order-1 md:w-2/3 z-[2] px-2">
                  <div className="md:pl-[20px] pl-0 position-relative lg:pr-[20px] pr-0">
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Level Design</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Once we have the core assets and mechanics in place, level designers start working on the atmosphere of the game to fit its gameplay style. 
      Using Unity's terrain and scene-building tools, dynamic levels are created that test players and lead them through a captivating experience.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">
                        Game Development and Programming
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our developers apply the C# scripting language and large Unity libraries to program core mechanics, AI behavior, physics systems, and 
      in-game interactions. Through Unity's set of tools, our team designs easy-to-manage controls, dynamic gameplay content structures, and 
      entertaining AI-HUD-driven NPCs.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">
                        Art and Asset Integration
                      </h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        As the game takes shape, art assets, animations, effects, and various media will be fed into the game engine. We synchronize the audio and 
      visual cues precisely with gameplay mechanics using Unity's adaptable asset management system.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Testing</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        Our QA team ensures that testing is conducted extensively throughout development, from unit testing to complete gameplay testing, to 
      identify, triage, and resolve any bugs, gameplay imbalances, and performance issues, thereby delivering a high-quality product.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Deployment</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        After that, once the game has passed all QA standards, it is finally ready for deployment, where we focus on all platform-related 
      requirements, such as optimizing the game for various devices and screen resolutions. We also handle its submission to digital stores, 
      such as the App Store, Google Play, Steam, or console-specific marketplaces.
                      </p>
                    </div>
                    <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#F57C00] font-semibold italic">Pre- and Post-Launch Services</h3>
                      <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                        We will assist with marketing pre-launch, while post-launch services will continue to fortify your game. With content updates, downloadable 
      expansions, and patches, we will ensure that your game and your players stay entertained.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 afflef">
                  <div className="affim">
                    <Image src="/common/unity-game/unity-game-development-studio.webp" alt="Unity Game Development Studio" width={490} height={800} loading="lazy" className="h-auto max-w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section> 

          <Web3GameAdvantage /> 
          
          <Web3GameTeams />

          <section className="py-12">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Our Engagement Models</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  As a top-notch web3 game development studio, we offer flexible engagement models to align with your project scope, technical requirements, 
      and long-term business objectives. Whether you’re launching a full-scale Web3 game or expanding your internal team, we tailor our 
      collaboration to maximise efficiency and value.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/web3-game/dedicated-development-model.webp" alt="Dedicated Development Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Dedicated Development Model
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      You get a dedicated team of blockchain developers, game designers, and project managers working together on your project. It’s ideal for 
          long-term partnerships that require consistency and rapid progress. 
                    </p>
                 </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/web3-game/team-extension-model.webp" alt="Team Extension Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Team Extension Model
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      Seamlessly integrate our Web3 specialists with your in-house team to fill your gaps or fasten delivery timelines. This model ensures 
        high adaptability while maintaining complete control over project direction. 
                    </p>
                </div>
                </div>
                <div className="flex">
                  <div className="relative mb-4 h-full w-full rounded-[20px] bg-[#03070D] px-5 pt-5 pb-[2px] transition-all duration-500 hover:shadow-[0_0_10px_0_#F57C00] before:absolute before:-left-[2px] before:-right-[2px] before:-top-[2px] before:-bottom-[2px] before:-z-10 before:rounded-[22px] before:content-[''] before:bg-[linear-gradient(120deg,_rgba(58,120,170,0.15)_6%,_#173044_94%)]">
                    <div className="my-[10px] mb-8 h-[200px] md:h-[310px] w-full overflow-hidden rounded-[15px]">
                      <Image src="/common/web3-game/project-based-model.webp" alt="Project-Based Model" width={640} height={350} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-center my-[1rem] md:my-[1.8rem] text-white">
                      Project-Based Model
                    </p>
                    <p className="text-[15px] leading-[24px] md:text-[16px] mb-4 text-center">
                      A fixed-scope approach is designed for clearly defined deliverables, timelines, and budgets. This matches best for MVPs, PoCs, or one-time 
      deployments where predictable outcomes and accountability are essential. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-4">
            <Image src="/common/web3-game/game-build.webp" alt="Need Extra Hands or a Full Development Team?" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto mt-[0.4rem] md:mt-[1.4rem] mb-[1.4rem] text-[24px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full box-border font-bold uppercase">
                Need Extra Hands or a Full Development Team?
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Our expert team supercharges your game development and design, delivering skill, speed, and passion every step of the way.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#F57C00] md:text-[18px] text-[16px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#F57C00] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Let’s Build Your Game">
                <span> Let’s Build Your Game </span>
              </Link>
              </div>
            </div>
          </section>

          <Testimonials />

          <Web3Faq />
          
          <section className="py-[2rem]" id="footer">
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
              <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
                <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#F57C00] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">Contact Us</h2>
                <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                  Interested in Web3 game development or looking to refine your game strategy? Our team is just a message away. Fill out the form, and 
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