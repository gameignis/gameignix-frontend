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
      <section className="banner relative"> 
        <div className="ban-mid relative h-full">
          <div className="container mx-auto">
            <div className="bancn absolute bottom-0 left-0 right-0 text-center">            
            <h1 className="cm-hd1 font-bold">
              Game Development Company
            </h1>
            <p className="font-semibold cm-stit text-orange-500 italic">
              Ignite Your Iconic Game With GameIgnix
            </p>
            <p className="para-cnt1">
              We are a passionate game development company, specializing in
              creating immersive gaming experiences fueled by creativity and
              innovation. Our unique selling points include our ability to craft
              high-impact and standout game titles that blaze brightly in the
              dynamic gaming universe.
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
        src="/common/best-game-development-company.webp"
        alt="Game Development Company"
        fill
        priority
        className="banim hidden md:block object-cover"
      />
      <Image
        src="/common/best-game-development-company-480.webp"
        alt="Game Development Company"
        fill
        priority
        className="banim md:hidden object-cover"
      />
      </section>

      <main className="gradientsc">

      <section className="aboutsc abtop" id="about-us">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
              GameIgnix - A Premier Game Development Studio
            </h2>
            <p className="font-semibold cm-stit text-orange-500 italic">
              I͏gniting Inn͏ovation In Every Game We Invent 
            </p>
            <p className="lead text-gray-400">
              GameIgnix is a leading game development studio that has successfully delivered exceptional game projects, 
              revolutionizing the gaming experience with each release. Driven by a relentless passion for innovation and quality, 
              we provide standout games that set new standards and fuel our clients’ success. We are a team of pro game developers 
              sparking imagination in every game we develop, whether large-scale mobile games or cinematic console releases. 
            </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
              <div className="cm-gbx w-full relative">
                <div className="cm-gbxin h-full">
                  <div className="cm-gim">
                    <Image
                      src="/common/gameignix-mission.webp"
                      alt="GameIgnix Mission"
                      loading="lazy"
                      width={80}
                      height={64}
                      className="max-w-full h-auto flex-shrink-0"
                    />
                  </div>
                  <h3 className="cm-hd4 text-white font-bold italic">
                    Our Mission
                  </h3>
                  <p className="para-cnt1">
                    Our mission is to ignite games with bold ideas and groundbreaking innovation, pushing the boundaries of art, 
                    design, and development. 
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cm-gbx w-full relative">
                <div className="cm-gbxin h-full">
                  <div className="cm-gim">
                    <Image
                      src="/common/gameignix-vision.webp"
                      alt="GameIgnix Vision"
                      loading="lazy"
                      width={80}
                      height={64}
                      className="max-w-full h-auto flex-shrink-0"
                    />
                  </div>
                  <h3 className="cm-hd4 text-white font-bold italic">
                    Our Vision
                  </h3>
                  <p className="para-cnt1">
                    GameIgnix aims to become a creative powerhouse, leading a new era of game development where every creative 
                    game we produce sets the stage for the future of gaming. 
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cm-gbx w-full relative">
                <div className="cm-gbxin h-full">
                  <div className="cm-gim">
                    <Image
                      src="/common/gameignix-philosophy.webp"
                      alt="GameIgnix Philosophy"
                      loading="lazy"
                      width={80}
                      height={64}
                      className="max-w-full h-auto flex-shrink-0"
                    />
                  </div>
                  <h3 className="cm-hd4 text-white font-bold italic">
                    Our Philosophy
                  </h3>
                  <p className="para-cnt1">
                    Games are experiences that connect people, inspire creativity, and ignite imagination. Every project is 
                    approached with the fire of innovation and a commitment to quality.
                  </p>
                </div>
              </div>
            </div>
           </div>
        </div>
      </section>

      <section className="servicesc1">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
              We Offer Comprehensive Services
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, we offer a comprehensive range of services, led by a dedicated team of game developers, designers, and 
              storytellers. Our services cover every aspect of game development, from concept to launch, and we focus on creating games 
              that captivate players and leave a lasting impact, regardless of the platform or genre.
            </p>
          </div>

          <div className="serv-rw1 serv-violet">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-imobrw">
              <div className="w-full md:col-span-7 serv-imobcn">
                <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange-500 capitalize font-bold italic">
                    Game De͏velopment
                    </h3>
                    <p className="para-cnt1">
                    As a full-service video game development studio and agency, GameIgnix specializes in end-to-end game 
                    development for mobile, PC, and console platforms. Whether you’re an indie developer, publisher, or brand, 
                    our expert team is here to help you build your desired game.
                    </p>
                    <ul className="flex flex-wrap gap-3 serv-nav">
                    <li>
                        <Link href="#" aria-label="Full-Cycle Game Dev͏elopment" className="cm-btn2 w-full flex items-center">
                        <span>Full-Cycle Game Dev͏elopment</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/mobile-game-development" target="_blank" aria-label="Mobile Game Development" 
                        className="cm-btn2 w-full flex items-center">
                        <span>Mobile Game͏ ͏Dev͏elopment</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="PC Game Development" className="cm-btn2 w-full flex items-center">
                        <span>PC Game Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#"  aria-label="Console Game Development" className="cm-btn2 w-full flex items-center">
                        <span>Console Game Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/unity-game-development" target="_blank" aria-label="Unity 3D Game Development" 
                        className="cm-btn2 w-full flex items-center">
                        <span>Unity 3D Game Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/unreal-engine-game-development" target="_blank" aria-label="Unreal Engine Game Development" 
                        className="cm-btn2 w-full flex items-center">
                        <span>Unreal Engine Game Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Game Testing" className="cm-btn2 w-full flex items-center">
                        <span>Game Testing</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Game Porting" className="cm-btn2 w-full flex items-center">
                        <span>Game Porting</span>
                        </Link>
                    </li>
                    </ul>
                    <Link href="/services" target="_blank" aria-label="Game Development Services" className="flex justify-center underline more-txt w-full">
                      View All
                    </Link>
                </div>
              </div>
              <div className="w-full md:col-span-5 flex serv-imob">
                <div className="gam-serim">
                  <Image src="/common/game-development-studio.webp" alt="Game Development Studio" width={300} height={200} className="max-w-full h-auto flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="serv-rw1 serv-blue">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-imobrw">
                <div className="w-full md:col-span-5 flex serv-imob">
                    <div className="gam-serim">
                        <Image src="/common/game-development-agency.webp" alt="Game Development Agency" width={300} height={200}
                            className="max-w-full h-auto flex-shrink-0" />
                    </div>
                </div>
                <div className="w-full md:col-span-7 serv-imobcn">
                    <div className="serv-lef">
                        <h3 className="cm-hd2 text-orange-500 capitalize font-bold italic">Game Art</h3>
                        <p className="para-cnt1">
                            We combine our technical skills with endless creativity to bring your games to life with vibrant
                            animations
                            and expertly crafted characters, environments, and assets for a wide range of gaming genres.
                        </p>
                        <ul className="flex flex-wrap gap-3 serv-nav">
                            <li>
                                <Link href="#" aria-label="Game Concept Art" className="cm-btn2 w-full flex items-center">
                                <span>Game Concept Art</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="3D Animation" className="cm-btn2 w-full flex items-center">
                                <span>3D Animation</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="3D Modeling" className="cm-btn2 w-full flex items-center">
                                <span>3D Modeling</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="2D Game Art" className="cm-btn2 w-full flex items-center">
                                <span>2D Game Art</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="Game Environment" className="cm-btn2 w-full flex items-center">
                                <span>
                                    Game Environment
                                </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="3D Character Design" className="cm-btn2 w-full flex items-center">
                                <span>3D Character Design</span>
                                </Link>
                            </li>
                        </ul>
                        <Link href="/game-art-services" target="_blank" aria-label="Game Art Services" className="flex justify-center underline more-txt w-full">
                        View All
                        </Link>
                    </div>
                </div>
            </div>
          </div>

          <div className="serv-rw1 serv-green">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-imobrw">
            <div className="w-full md:col-span-7 serv-imobcn">
              <div className="serv-lef">
                  <h3 className="cm-hd2 text-orange-500 capitalize font-bold italic">
                  Game Inn͏ovation
                  </h3>
                  <p className="para-cnt1">
                  Co͏llaborate͏ with ͏us to͏ combine our͏ tec͏hnical p͏rowe͏ss of ͏expe͏rt coding and game͏ de͏sign with your creati͏ve 
                  game͏ id͏eas, per͏fec͏tly align͏ing wi͏th the rigorou͏s demand͏s of ga͏me cr͏eation.
                  </p>
                  <ul className="flex flex-wrap gap-3 serv-nav">
                  <li>
                      <Link href="/services/blockchain-game-development" aria-label="Blockchain Game Development" className="cm-btn2 w-full flex items-center">
                      <span>Blockchain Game Development</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="/services/web3-game-development" target="_blank" aria-label="Web3 Game Development" 
                      className="cm-btn2 w-full flex items-center">
                      <span>Web3 Game Development</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="#" aria-label="͏NFT͏ ͏Game D͏evel͏opment͏" className="cm-btn2 w-full flex items-center">
                      <span>͏NFT͏ ͏Game D͏evel͏opment͏</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="#" aria-label="Meta͏verse ͏G͏ame Develop͏men͏t" className="cm-btn2 w-full flex items-center">
                      <span>Meta͏verse ͏G͏ame Develop͏men͏t</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="/services/unity-game-development" target="_blank" aria-label="AR Gam͏e ͏D͏evel͏opment" 
                      className="cm-btn2 w-full flex items-center">
                      <span>AR Gam͏e ͏D͏evel͏opment</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="/services/unreal-engine-game-development" target="_blank" aria-label="V͏R Game͏ Development" 
                      className="cm-btn2 w-full flex items-center">
                      <span>V͏R Game͏ Development</span>
                      </Link>
                  </li>
                  </ul>
                  <Link href="#" aria-label="Game Inn͏ovation" className="flex justify-center underline more-txt w-full">
                    View All
                  </Link>
              </div>
              </div>
              <div className="w-full md:col-span-5 flex serv-imob">
              <div className="gam-serim">
                  <Image src="/common/video-game-development-company.webp" alt="Video Game Development Company" width={300} height={200} className="max-w-full h-auto flex-shrink-0" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="portfoliosc">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
            Our Ga͏me Portfolio
          </h2>
          <p className="font-semibold cm-stit text-orange italic uppercase">
            Recent Projects We Have Completed
          </p>
          <p className="lead text-gray-400">
            We t͏ransfo͏rm im͏agi͏n͏ation into ͏im͏mersive expe͏riences.͏ Our portfo͏li͏o showcases a diver͏se range of projec͏ts that͏ high͏light ͏our
            e͏xpertise ͏in crafting͏ ͏uni͏que, en͏g͏agi͏ng, a͏nd innovative͏ ga͏mes.͏
          </p>
        </div>
        <Portfolio />
      </section>

      <CaseStudies />

      <ReliableGameDevelopment />

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/ignite-idea.webp" alt="Ready to Ignite Your Game Idea?" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Ready to Ignite Your Game Idea?
          </h2>
          <p className="lead text-gray-400">
            Whether you have a concept ready or just an idea burning bright, let’s bring it to life together. At GameIgnix, we 
            transform passion into playable worlds.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Start Your Project">
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

      <section className="modelsc">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Our Engagement Models</h2>
            <p className="lead text-gray-400">
              At GameIgnix, we not only customize game solutions to meet your requirements but also offer the best-fit engagement 
              model for your project. Our engagement model is built on transparency and collaboration, with a clear line of sight 
              on progress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
            <Image src="/common/dedicated-team.webp" alt="Dedicated Team" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Dedicated Team
            </p>
            <p className="para-cnt1">
              Our dedicated team model provides businesses with full-time, committed game developers who harness advanced 
              technologies and industry best practices to deliver top-tier gaming solutions tailored to your unique needs.
            </p>
            </div>
            </div>
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
              <Image src="/common/team-extension.webp" alt="Team Extension" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Team Extension
            </p>
            <p className="para-cnt1">
              Our team extension model enables businesses to scale their development teams by adding skilled game developers 
              who bring the required expertise for their projects, while aligning with existing workflows and processes.
            </p>
            </div>
            </div>
            <div className="flex">
              <div className="model-in h-full w-full">
              <div className="modelim">
                <Image src="/common/project-based-model.webp" alt="Project-Based Model" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <p className="cm-hd4">
                Project-Based Model
              </p>
              <p className="para-cnt1">
                Our project-driven approach, backed by experienced game development specialists, ensures efficient 
                collaboration and successful delivery of your gaming project within a defined scope, timeline, and budget. 
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/dedicated-dev-team.webp" alt="Do You Need Extra Hands or a Dedicated Development Team?" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Do You Need Extra Hands or a Dedicated Development Team?
          </h2>
          <p className="lead text-gray-400">
            Our game developers power up your production with expert skill, rapid execution, and passion for games.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="HIRE OUR GAME DEVELOPER">
            <span> HIRE OUR GAME DEVELOPER </span>
          </Link>
          </div>
        </div>
      </section>

      <Testimonials /> 

      <FaqAccordion />

      <section className="contactsc" id="footer">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
            <p className="lead text-gray-400">
              Have a game idea or project in mind? Share your requirements with GameIgnix, and our team will get back to you with the perfect 
              solution tailored to your goals.
            </p>
          </div>        
          <Contact />    
        </div>
      </section>              

      </main>          
      
    </>
  );
}
