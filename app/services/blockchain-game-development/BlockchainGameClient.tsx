"use client";
import Image from "next/image";
import Link from 'next/link';
import BlockchainPortfolio from "@/components/BlockchainPortfolio";
import BlockchainCaseStudies from "@/components/BlockchainCaseStudies";
import WhyChooseBlockchainGame from "@/components/WhyChooseBlockchainGame";
import BlockchainGameTools from "@/components/BlockchainGameTools";
import BlockchainTeams from "@/components/BlockchainTeams";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function BlockchainGamePageServer() {

  return (
    <>

     <main>

      <section className="relative h-[580px] md:h-[700px] text-white after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-[2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[30%] before:z-[2] before:bg-gradient-to-t before:from-black before:from-50% before:to-transparent"> 
        <div className="relative z-[5] h-full">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="absolute left-0 right-0 text-center w-[96%] mx-auto top-[175px] md:top-auto md:pb-16 md:bottom-8 xl:pb-32 2xl:w-[1336px]">            
              <h1 className="uppercase text-center my-4 text-[26px] md:text-[36px] lg:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
                Blockchain Game Development Company
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] mb-[2rem]">
                GameIgnix is a leading Blockchain game development company with a talented team of developers, specialized in creating a wide 
                range of blockchain games. We are here to bring the future of gaming to life with truly immersive and player-owned experiences. 
                We specialize in creating cutting-edge blockchain games that redefine the gaming experience.
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
        <Image src="/common/blockchain-game/blockchain-game-development-company.webp" alt="Blockchain Game Development Company" fill priority fetchPriority="high" className="hidden md:block h-full w-full object-cover" />
        <Image src="/common/blockchain-game/blockchain-game-development-company-480.webp" alt="Blockchain Game Development Company" fill priority fetchPriority="high" className="md:hidden h-[480px] object-cover" />
      </section>

      <div className="relative pt-16 md:pt-2 overflow-x-hidden md:overflow-visible">

        <section className="pt-0 pb-16" id="about-us">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[0.5rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 lg:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[600px] lg:max-w-[800px] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Custom Blockchain Game Development for Web3 and Crypto Games
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
                GameIgnix is a pioneer in the rapidly evolving landscape of blockchain game development, pushing the boundaries of decentralized 
                games. Our blockchain game developers craft innovative and high-performing blockchain games that empower players with actual 
                digital ownership. With a robust portfolio that includes over 35 groundbreaking blockchain gaming projects, we have established a 
                significant global footprint.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              <div className="flex">
                <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                  <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                      <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                      Crypto Game Development
                    </h3>
                    <p className="text-[14px] leading-[24px] lg:text-[16px] text-white mb-[1rem]">
                      Step into the new era of gaming with GameIgnix, a premier crypto game development company creating next-gen 
                      blockchain-powered gaming experiences. From NFTs to play-to-earn crypto games, we craft immersive worlds that reward 
                      players with digital assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="rounded-[12px] bg-[linear-gradient(150deg,rgb(24,24,24)_0%,rgba(150,69,0,0.14)_100%)] p-[1px] my-[10px] lg:my-4 w-full relative">
                  <div className="h-full rounded-[12px] bg-[linear-gradient(90deg,#140c06_0%,#251710_60%)] px-5 pt-5 pb-[10px] md:p-5">
                    <h3 className="text-[19px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-left my-[8px] md:my-[18px] text-[#ff8600] italic">
                      Web3 Game Development
                    </h3>
                    <p className="text-[14px] leading-[24px] lg:text-[16px] text-white mb-[1rem]">
                      Unlock the future of gaming with our Web3 game development expertise. We build decentralized, player-owned games powered 
                      by blockchain, NFTs, and smart contracts. From concept to launch, we transform your Web3 vision into immersive gaming 
                      realities.
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
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-6 text-[24px] md:text-[28px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Blockchain Game Development Services
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[0.5rem]">
                At GameIgnix, we offer a comprehensive suite of blockchain game development services, with an unwavering emphasis on quality 
                and security. We are dedicated to bringing your blockchain game concept to life in a decentralized, secure, and engaging manner, 
                ensuring a top-notch experience for your audience.
              </p>
            </div>
            <div className="my-8 pt-2 md:my-16 md:py-8">
            <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
              <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                <div className="md:w-[58%] w-full relative z-[10]">
                  <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      1. Custom Game Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      We specialize in building next-generation blockchain, Web3, and metaverse games from the ground up, tailored to your 
                      vision, combining core gameplay with seamless blockchain integration.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      2. Smart Contract Development
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      We specialize in writing and deploying highly secure and efficient smart contracts that govern critical in-game logic, 
                      asset ownership, and transactions for trust and transparency.
                    </p>
                    <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                      3. Game Tokenomics Design
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                      Our experts meticulously design your game's economic model, encompassing the creation, distribution, utility, and burning 
                      mechanisms of your in-game cryptocurrencies and NFTs.
                    </p>
                  </div>
                </div>
                <div className="md:w-[42%] flex absolute right-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                  <div className="flex flex-col w-full h-full flex flex-column">
                    <Image src="/common/blockchain-game/blockchain-game-development.webp" alt="Blockchain Game Development" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                  </div>
                </div>
               </div>
              </div>
            </div>
            <div className="mt-8 md:mt-16 md:mb-4 md:py-8 pb-8">
              <div className="p-px rounded-[18px] bg-[linear-gradient(224deg,#FC74005E_0%,#964500d4_100%)]">
                <div className="flex rounded-[18px] p-[15px] md:p-[20px] bg-[linear-gradient(-253.75deg,#010101_68.95%,#3E0803_123.66%,#7A0F04_213.15%)] relative">
                   <div className="md:w-[42%] flex absolute left-0 bottom-0 opacity-20 md:opacity-100 h-full md:h-auto">
                      <div className="flex flex-col w-full h-full flex flex-column">
                        <Image src="/common/blockchain-game/blockchain-game-development-services.webp" alt="Blockchain Game Development Services" width={600} height={600} loading="lazy" className="w-full h-full md:h-[560px] object-contain" />
                      </div>
                    </div>
                    <div className="md:w-[58%] w-full relative z-[10] ml-auto">
                      <div className="p-[1rem_1rem_1rem_1.6rem] md:p-[2rem_1rem_2rem_3rem]">
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          4. Crypto Wallet and Token Integration
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Our experts integrate secure and user-friendly crypto wallets directly into your game ecosystem, allowing players to 
                          manage their assets & make in-game purchases effortlessly.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          5. NFT Marketplace Creation
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          We design and develop custom NFT marketplaces, either in-game or as standalone platforms, where players can securely 
                          buy, sell, and trade their unique NFT characters.
                        </p>
                        <h3 className="text-[18px] md:text-[24px] mt-[0.4rem] mb-[1rem] md:mb-[1.5rem] text-[#ff8600] font-bold italic capitalize">
                          6. Game Avatar and Character Creation 
                        </h3>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
                          Our skilled artists create unique 2D/3D models that can be tokenized as NFTs, providing players with true ownership 
                          to express their digital identity in the game.
                        </p>
                    </div>
                  </div>                  
                </div>
              </div>
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
            <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] md:mb-[1rem] max-w-[96%] mx-auto">
              Explore our portfolio of next-gen games crafted across diverse genres. Each project reflects our passion, creativity, and 
              technical excellence.
            </p>
          </div>
          <BlockchainPortfolio />
        </section>

        <BlockchainCaseStudies />

        <WhyChooseBlockchainGame />

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
          <Image src="/common/blockchain-game/game-idea.webp" alt="Have a Vision? We’ll Ignite It!" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
            <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
              <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Have a Vision? We’ll Ignite It!
              </h2>
              <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Whether you’re starting with a spark or a fully formed concept, our team brings it to life. At GameIgnix, we transform ideas into 
                immersive, next-gen games that captivate players.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Start Your Project">
                <span> Start Your Project </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-[4rem]">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[26px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Types of Blockchain Games We Develop
              </h2>
              <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6]">
                We help you with games across a broad spectrum of genres that refine player ownership, and our experts ensure that each game 
                harnesses the unique benefits of decentralization and innovative ways to engage and earn.
              </p>
            </div>            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-[#ff8600a1] rounded-[14px] my-[1rem]">
                <div className="md:col-span-8 min-h-[260px] flex items-end md:block">
                  <div className="p-[20px_30px] relative z-[5]">
                    <h3 className="text-[24px] md:text-[30px] mt-[12px] mb-[26px] text-[#ff8600] font-bold italic">
                        Move-to-Earn Game
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white mb-[1rem] md:mb-[2rem]">
                      We develop innovative M2E games that incentivize physical activity by rewarding players with cryptocurrencies or NFTs 
                      for engaging in physical movement, such as walking, jogging, and other forms of exercise.
                    </p>
                  </div>
                </div>
                <div className="w-full md:col-span-4 flex">
                  <div className="w-full h-full">
                    <Image src="/common/poker-game/texas-holdem.webp" alt="Move-to-Earn Game" width={300} height={300} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
            </div>              
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] mt-[20px]">
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    Play-to-Earn Game
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Our developers specialize in creating P2E games where players can earn tangible value through their in-game activities, 
                    including earning cryptocurrency, NFTs, and more.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    NFT Game
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Our highly skilled developers build games that enable players to experience real-world value in in-game assets, such as 
                    characters, items, and land, as non-fungible tokens.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-4 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    Arcade Games
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    We bring fast-paced, high-score-driven arcade games to the blockchain, featuring competitive leaderboards, NFT-based 
                    achievements, and token rewards for top players.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 subgrids">
              <div className="w-full md:col-span-6 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    Metaverse Games
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    We have expertise in creating an interconnected virtual world where gamers can socialize & participate in decentralized 
                    economies, which is leveraged by blockchain for true ownership.
                  </p>
                </div>
              </div>
              <div className="w-full md:col-span-6 flex">
                <div className="border border-[#ff8600a1] rounded-[14px] p-[2px_14px_18px] my-[3px] w-full">
                  <h3 className="text-[18px] my-[12px] text-left text-[#ff8600] font-semibold leading-[26px] md:leading-[28px] italic">
                    Role-playing Games (RPGs)
                  </h3>
                  <p className="text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] text-white mb-0">
                    Our blockchain-based RPGs will enable players to assume character roles, develop those characters over time, and trade them 
                    as unique assets, fostering authentic engagement.
                  </p>
                </div>
              </div>
            </div>        
          </div>
        </section>

        <BlockchainGameTools />

        <section className="bg-black shadow-[0_0_200px_0_#000] pt-8 mb-8 md:my-8 overflow-hidden">
          <div className="w-full px-4 mx-auto">
            <div className="text-center md:w-[90%] mx-auto w-full pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
                Our Proven Process for Blockchain Game Development Success
              </h2>
              <p className="text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#e6e6e6]">
                Building a successful blockchain game is a complex task, but with our properly structured roadmap & meticulous execution, we 
                will minimize risks and maximize the potential ROI for your game.
              </p>
            </div>
            <div className="relative flex flex-wrap">
              <div className="afflef">
                <div className="affim">
                  <Image src="/common/blockchain-game/crypto-game-development-company.webp" alt="Crypto Game Development Company" width={700} height={1000} loading="lazy" className="h-auto max-w-full" />
                </div>
              </div>
              <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
                <div className="lg:pr-5 md:pr-3 pr-0 relative">
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Requirement Analysis</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Our work begins with a solid foundation of in-depth research into our clients' vision and target audience, enabling us to 
                      define the game's core mechanics and monetization strategy.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Art, Mechanics, Tokenomics</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      After the initial requirements, this is where the actual game development begins, focusing on the game's art style, UI/UX, 
                      and special considerations for wallet integration and NFT marketplaces.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Development</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      In this step, our developers build the core game logic and implement all defined features tailored to the client's 
                      requirements, while also engineering a robust and secure backend.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Quality Assurance</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Our QA engineers conduct extensive alpha & beta testing to identify & rectify any bugs and glitches. This rigorous 
                      testing is paramount for the best gaming experience.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Deployment</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      Once the game passes all stringent quality checks, we manage project deployment to your chosen platforms, such as the web, 
                      PC, mobile app, and the selected blockchain network.
                    </p>
                  </div>
                  <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[1rem] lg:my-[3rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                    <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Support & Maintenance</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] mb-[1rem]">
                      We provide ongoing support, including continuous monitoring of blockchain network performance and smart contracts, to 
                      ensure timely bug fixes and regular content updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlockchainTeams />

        <section className="relative flex items-end overflow-hidden text-center text-white py-[25px] md:py-[55px] pb-[10px] mt-12 mb-8 md:mb-12">
          <Image src="/common/blockchain-game/game-build.webp" alt="Hire Expert Game Developers Today" width={1440} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/40" />
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12 z-[2]">
            <div className="text-center md:w-[80%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
              <h2 className="inline-block w-fit mx-auto my-[1.4rem] text-[22px] md:text-[28px] leading-[1.5] tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full box-border font-bold uppercase">
                Hire Expert Game Developers Today
              </h2>
              <p className="text-[15px] leading-[20px] md:text-[16px] lg:text-[18px] md:leading-[24px] lg:leading-[28px] text-[#e6e6e6] mb-[2rem]">
                Scale your game development with skilled professionals who bring creativity and passion to every project. At GameIgnix, our team 
                becomes your team.
              </p>
              <Link href="/contact" target="_blank" className="inline-block p-[1px] bg-[#ff8600] md:text-[18px] text-[15px] transition-colors duration-300 [clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:bg-white [&>span]:inline-block [&>span]:w-full [&>span]:px-[15px] [&>span]:py-[2px] [&>span]:bg-[#ff8600] [&>span]:text-white [&>span]:font-medium [&>span]:no-underline [&>span]:transition-colors [&>span]:duration-300 [&>span]:[clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] [&>span]:[-webkit-clip-path:polygon(0px_8px,8px_0px,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] hover:[&>span]:bg-[#e67c03]" aria-label="Hire Game Experts">
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
                Have a blockchain game idea or project in mind? Share your requirements with GameIgnix, and our team will get back to you 
                with the perfect solution tailored to your goals.
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