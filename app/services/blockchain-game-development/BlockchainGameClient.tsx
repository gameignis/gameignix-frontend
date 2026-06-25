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

    <section className="banner relative"> 
        <div className="ban-mid relative h-full">
          <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
            <div className="bancn absolute bottom-0 left-0 right-0 text-center">            
            <h1 className="uppercase text-center my-4 text-[26px] md:text-[45px] text-white [-webkit-text-stroke:1px_#ff8600] font-bold">
               Blockchain Game Development Company
            </h1>
            <p className="para-cnt1">
              GameIgnix is a leading Blockchain game development company with a talented team of developers, specialized in creating a wide 
              range of blockchain games. We are here to bring the future of gaming to life with truly immersive and player-owned experiences. 
              We specialize in creating cutting-edge blockchain games that redefine the gaming experience.
            </p>
            <ul className="flex list-none justify-center gap-4 flex-wrap">
            <li>
              <button className="cm-btn1" data-scroll="#footer" aria-label="Talk to Experts">
                <span>Talk to Experts</span>
              </button>            
            </li>
            <li>
              <Link href="/contact" className="cm-btn1 active" aria-label="Get Quote">
                <span> Get Quote </span>
              </Link>
            </li>
            </ul>
          </div>
          </div>
        </div>        
      <Image
        src="/common/blockchain-game/blockchain-game-development-company.webp"
        alt="Blockchain Game Development Company"
        fill
        priority
        className="banim hidden md:block object-cover"
      />
      <Image
        src="/common/blockchain-game/blockchain-game-development-company-480.webp"
        alt="Blockchain Game Development Company"
        fill
        priority
        className="banim md:hidden object-cover"
      />
    </section>

    <main className="gradientsc inngrad">

      <section className="aboutsc abtop" id="about-us">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
               Custom Blockchain Game Development for Web3 and Crypto Games
            </h2>
            <p className="lead text-gray-400">
              GameIgnix is a pioneer in the rapidly evolving landscape of blockchain game development, pushing the boundaries of decentralized 
              games. Our blockchain game developers craft innovative and high-performing blockchain games that empower players with actual 
              digital ownership. With a robust portfolio that includes over 35 groundbreaking blockchain gaming projects, we have established a 
              significant global footprint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="cm-gbx w-full relative">
                <div className="cm-gbxin h-full">                  
                  <h3 className="cm-hd4 text-white font-bold italic">
                    Crypto Game Development
                  </h3>
                  <p className="para-cnt1">
                    Step into the new era of gaming with GameIgnix, a premier crypto game development company creating next-gen 
                    blockchain-powered gaming experiences. From NFTs to play-to-earn crypto games, we craft immersive worlds that reward 
                    players with digital assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cm-gbx w-full relative">
                <div className="cm-gbxin h-full">
                  <h3 className="cm-hd4 text-white font-bold italic">
                     Web3 Game Development
                  </h3>
                  <p className="para-cnt1">
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

      <section className="servicesc3">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
               Our Blockchain Game Development Services
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, we offer a comprehensive suite of blockchain game development services, with an unwavering emphasis on quality 
              and security. We are dedicated to bringing your blockchain game concept to life in a decentralized, secure, and engaging manner, 
              ensuring a top-notch experience for your audience.
            </p>
          </div>
          <div className="serv-rwin1">
                      <div className="serv-imobrw">
                        <div className="flex flex-col md:flex-row gap-0 serv-red serv-lefrad relative">
                            <div className="md:w-[58%] w-full serv-imobcn">
                            <div className="serv-lef">
                               <div className="serv-incn">
                                <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                                  1. Custom Game Development
                                </h3>
                                <p className="para-cnt1">
                                  We specialize in building next-generation blockchain, Web3, and metaverse games from the ground up, tailored to your 
                                  vision, combining core gameplay with seamless blockchain integration.
                                </p>
                                <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                                  2. Smart Contract Development
                                </h3>
                                <p className="para-cnt1">
                                  We specialize in writing and deploying highly secure and efficient smart contracts that govern critical in-game logic, 
                                  asset ownership, and transactions for trust and transparency.
                                </p>
                                <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                                  3. Game Tokenomics Design
                                </h3>
                                <p className="para-cnt1">
                                  Our experts meticulously design your game's economic model, encompassing the creation, distribution, utility, and burning 
                                  mechanisms of your in-game cryptocurrencies and NFTs.
                                </p>
                              </div>
                            </div>
                            </div>
                            <div className="md:w-[42%] w-full serv-imob flex">
                                <div className="gam-serim">
                                <Image src="/common/blockchain-game/blockchain-game-development.webp" alt="Blockchain Game Development" 
                                 width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                             </div>
                            </div>
                        </div>
                      </div>
                    </div>

<div className="serv-rwin1">
            <div className="serv-imobrw serv-rwinrev">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-red serv-rigrad relative">
                  <div className="w-full md:col-span-5">
                    <div className="serv-imob flex">
                      <div className="gam-serim">
                      <Image src="/common/blockchain-game/blockchain-game-development-services.webp" alt="Blockchain Game Development Services" 
                        width={600} height={600} className="max-w-full h-auto flex-shrink-0" />
                    </div>
                    </div>
                  </div>
                  <div className="w-full md:col-span-7 serv-imobcn ms-auto">
                  <div className="serv-lef">
                    <div className="serv-incn">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                       4. Crypto Wallet and Token Integration
                    </h3>
                    <p className="para-cnt1">
                      Our experts integrate secure and user-friendly crypto wallets directly into your game ecosystem, allowing players to 
                      manage their assets & make in-game purchases effortlessly.
                    </p>
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                       5. NFT Marketplace Creation
                    </h3>
                    <p className="para-cnt1">
                      We design and develop custom NFT marketplaces, either in-game or as standalone platforms, where players can securely 
                      buy, sell, and trade their unique NFT characters.
                    </p>
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                       6. Game Avatar and Character Creation 
                    </h3>
                    <p className="para-cnt1">
                      Our skilled artists create unique 2D/3D models that can be tokenized as NFTs, providing players with true ownership 
                      to express their digital identity in the game.
                    </p>
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
          </div> 

                 
        </div>
      </section>

      <section className="portfoliosc">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
            Our Game Portfolio
          </h2>
          <p className="font-semibold cm-stit text-orange italic uppercase">
            Recent Projects We Have Completed
          </p>
          <p className="lead text-gray-400">
            Explore our portfolio of next-gen games crafted across diverse genres. Each project reflects our passion, creativity, and 
            technical excellence.
          </p>
        </div>
        <BlockchainPortfolio />
      </section>

      <BlockchainCaseStudies />

      <WhyChooseBlockchainGame />

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/blockchain-game/game-idea.webp" alt="Have a Vision? We’ll Ignite It!" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Have a Vision? We’ll Ignite It!
          </h2>
          <p className="lead text-gray-400">
            Whether you’re starting with a spark or a fully formed concept, our team brings it to life. At GameIgnix, we transform ideas into 
            immersive, next-gen games that captivate players.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Start Your Project">
            <span> Start Your Project </span>
          </Link>
          </div>
        </div>
      </section>

      <section className="servicesc2">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
               Types of Blockchain Games We Develop
            </h2>
            <p className="lead text-gray-400">
              We help you with games across a broad spectrum of genres that refine player ownership, and our experts ensure that each game 
              harnesses the unique benefits of decentralization and innovative ways to engage and earn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sup-rw1">
              <div className="w-full md:col-span-8">
              <div className="sup-lef">
                <h3 className="cm-hd4 text-orange capitalize font-bold italic">
                    Move-to-Earn Game
                </h3>
                <p className="para-cnt1">
                  We develop innovative M2E games that incentivize physical activity by rewarding players with cryptocurrencies or NFTs 
                  for engaging in physical movement, such as walking, jogging, and other forms of exercise.
                </p>
              </div>
              </div>
              <div className="w-full md:col-span-4 flex">
                <div className="w-full h-full">
                  <Image src="/common/poker-game/texas-holdem.webp" alt="Move-to-Earn Game" width={300} height={300} 
                    className="w-full h-full object-cover" />
                </div>
              </div>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-12 subgrids">
            <div className="w-full md:col-span-4 flex">
              <div className="sub-bx w-full">
                <h3 className="cm-hd4 text-orange font-semibold italic">
                   Play-to-Earn Game
                </h3>
                <p className="para-cnt1">
                  Our developers specialize in creating P2E games where players can earn tangible value through their in-game activities, 
                  including earning cryptocurrency, NFTs, and more.
                </p>
              </div>
            </div>
            <div className="w-full md:col-span-4 flex">
              <div className="sub-bx w-full">
                <h3 className="cm-hd4 text-orange font-semibold italic">
                   NFT Game
                </h3>
                <p className="para-cnt1">
                  Our highly skilled developers build games that enable players to experience real-world value in in-game assets, such as 
                  characters, items, and land, as non-fungible tokens.
                </p>
              </div>
            </div>
            <div className="w-full md:col-span-4 flex">
              <div className="sub-bx w-full">
                <h3 className="cm-hd4 text-orange font-semibold italic">
                   Arcade Games
                </h3>
                <p className="para-cnt1">
                  We bring fast-paced, high-score-driven arcade games to the blockchain, featuring competitive leaderboards, NFT-based 
                  achievements, and token rewards for top players.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 subgrids">
            <div className="w-full md:col-span-6 flex">
              <div className="sub-bx w-full">
                <h3 className="cm-hd4 text-orange font-semibold italic">
                   Metaverse Games
                </h3>
                <p className="para-cnt1">
                  We have expertise in creating an interconnected virtual world where gamers can socialize & participate in decentralized 
                  economies, which is leveraged by blockchain for true ownership.
                </p>
              </div>
            </div>
            <div className="w-full md:col-span-6 flex">
              <div className="sub-bx w-full">
                <h3 className="cm-hd4 text-orange font-semibold italic">
                   Role-playing Games (RPGs)
                </h3>
                <p className="para-cnt1">
                  Our blockchain-based RPGs will enable players to assume character roles, develop those characters over time, and trade them 
                  as unique assets, fostering authentic engagement.
                </p>
              </div>
            </div>
          </div>
       
        </div>
      </section>

      <BlockchainGameTools />

      <section className="howsc">
        <div className="w-full px-4 mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
               Our Proven Process for Blockchain Game Development Success
            </h2>
            <p className="lead text-gray-400">
              Building a successful blockchain game is a complex task, but with our properly structured roadmap & meticulous execution, we 
              will minimize risks and maximize the potential ROI for your game.
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="afflef">
              <div className="affim">
                <Image src="/common/blockchain-game/crypto-game-development-company.webp" alt="Crypto Game Development Company" 
                 width={700} height={1000} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 aff-content">
              <div className="affrig">
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Game Requirement Analysis</h3>
                  <p className="para-cnt1">
                    Our work begins with a solid foundation of in-depth research into our clients' vision and target audience, enabling us to 
                    define the game's core mechanics and monetization strategy.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Game Art, Mechanics, Tokenomics</h3>
                  <p className="para-cnt1">
                    After the initial requirements, this is where the actual game development begins, focusing on the game's art style, UI/UX, 
                    and special considerations for wallet integration and NFT marketplaces.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Game Development</h3>
                  <p className="para-cnt1">
                    In this step, our developers build the core game logic and implement all defined features tailored to the client's 
                    requirements, while also engineering a robust and secure backend.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Game Quality Assurance</h3>
                  <p className="para-cnt1">
                    Our QA engineers conduct extensive alpha & beta testing to identify & rectify any bugs and glitches. This rigorous 
                    testing is paramount for the best gaming experience.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Deployment</h3>
                  <p className="para-cnt1">
                    Once the game passes all stringent quality checks, we manage project deployment to your chosen platforms, such as the web, 
                    PC, mobile app, and the selected blockchain network.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Support & Maintenance</h3>
                  <p className="para-cnt1">
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

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/blockchain-game/game-build.webp" alt="Hire Expert Game Developers Today" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
             Hire Expert Game Developers Today
          </h2>
          <p className="lead text-gray-400">
            Scale your game development with skilled professionals who bring creativity and passion to every project. At GameIgnix, our team 
            becomes your team.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Hire Game Experts">
            <span> Hire Game Experts </span>
          </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <section className="contactsc" id="footer">
        <div className="max-w-[1336px] md:px-[30px] px-[15px] mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
            <p className="lead text-gray-400">
              Have a blockchain game idea or project in mind? Share your requirements with GameIgnix, and our team will get back to you 
              with the perfect solution tailored to your goals.
            </p>
          </div>        
         <Contact />    
        </div>
      </section> 

    </main>

    </>
  );
}