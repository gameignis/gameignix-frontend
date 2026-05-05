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

    <section className="banner relative"> 
        <div className="ban-mid relative h-full">
          <div className="container mx-auto">
            <div className="bancn absolute bottom-0 left-0 right-0 text-center">            
            <h1 className="cm-hd1 font-bold">
              Game Development Services
            </h1>
            <p className="para-cnt1">
              GameIgnix offers holistic game development services, combining creativity, technology, and player-centric design. Our experienced 
              team develops distinguished games across multiple genres, producing the finest games that align with the client's vision and 
              captivate players worldwide.
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
        src="/common/game-develop/game-development-services.webp"
        alt="Game Development Services"
        fill
        priority
        className="banim hidden md:block object-cover"
      />
      <Image
        src="/common/game-develop/game-development-services-480.webp"
        alt="Game Development Services"
        fill
        priority
        className="banim md:hidden object-cover"
      />
    </section>

    <main className="gradientsc inngrad">

      <section className="innheadsc" id="about-us">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <p className="lead text-gray-400">
              GameIgnix, a premier game development services provider, is trusted by studios and publishers to turn a spark into a fully-realized game. 
              Our passionate team of developers, with expertise in design, development, and art, is committed to providing you with a comprehensive 
              solution for game development or specialized support for a specific aspect of development. You can rely on us to continue creating 
              high-quality and immersive games that not only push boundaries but also deliver results.
            </p>
          </div>
        </div>
      </section>

      <section className="servicesc3">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
              Our Game Development Services
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, we offer a comprehensive suite of game development services that span every aspect of game development, including art, 
              design, development, and innovation. Discover our diverse range of services, expertly crafted to bring your envisioned game to life.
            </p>
          </div>
          <div className="serv-rwin">
            <div className="serv-imobrw">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-violet relative">
                  <div className="w-full md:col-span-7 serv-imobcn">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                       Game De͏velopment
                    </h3>
                    <p className="para-cnt1">
                      We offer a holistic approach to game development, creating games that appeal to players with diverse preferences across all platforms. 
                      From the earliest concept to the final launch, we will be with you every step of the way.  
                    </p>
                  </div>
                  </div>
                  <div className="w-full md:col-span-5 relative">
                    <div className="serv-imob w-full">
                      <div className="gam-serim">
                      <Image src="/common/game-develop/game-development.webp" alt="Game De͏velopment" width={300} height={200} className="max-w-full h-auto flex-shrink-0" />
                    </div>
                   </div>
                  </div>
              </div>
            </div>
          </div>
          <ServicesGameDevelop />
          <div className="serv-rwin">
            <div className="serv-imobrw serv-rwinrev">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-green relative serv-rigrad">
                <div className="w-full md:col-span-5 relative">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-develop/game-services.webp" alt="Game Development Services Company" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-7 serv-imobcn ml-auto">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      Game Art 
                    </h3>
                    <p className="para-cnt1">
                      Our skilled artists design everything from concept art to highly detailed 3D models and animations, ensuring the game looks as 
                      incredible as it plays. We focus on every visual element, blending aesthetic appeal with functional design to create exceptional art.
                    </p>
                  </div>
                </div>            
              </div>
            </div>
          </div>
          <ServicesGameArt />
          <div className="serv-rwin">
            <div className="serv-imobrw">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-blue relative">
                <div className="w-full md:col-span-7 serv-imobcn">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                       Game Inn͏ovation
                    </h3>
                    <p className="para-cnt1">
                      By leveraging the latest coding techniques and implementing groundbreaking technologies like blockchain, AR, and VR, we adopt an 
                      innovation-driven approach to developing games that meet the evolving demands of modern gaming.
                    </p>
                  </div>
                </div>
                <div className="w-full md:col-span-5 relative">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-develop/game-innovation.webp" alt="Game Innovation" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServicesGameInnovation />
          </div>
      </section>

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/game-develop/game-idea.webp" alt="Got a Game Idea? Let’s Set It on Fire!" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Got a Game Idea? Let’s Set It on Fire!
          </h2>
          <p className="lead text-gray-400">
            Whether it is a fully fleshed-out concept or just the spark of an idea, we’re here to bring it to life. At GameIgnix, we bring imagination to 
            life through immersive games.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Start Your Project">
            <span> Start Your Project </span>
          </Link>
          </div>
        </div>
      </section>

      <section className="genresc">
        <div className="w-full px-4 mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase">
              Genres We Specialize In
            </h2>
            <p className="lead text-gray-400">
              Our expertise spans various genres, from high-speed racing to hyper-casual games and action-packed shooters. We produce high-quality games 
              tailored to your vision.
            </p>
          </div>
          <div className="comic-panel-wrapper flex flex-wrap justify-center">
            <div className="comic-panel">
              <div className="comic-panelim relative">
                <Image
                  src="/common/role-playing.webp"
                  alt="Role-Playing"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Role-Playing</p>
                  <p className="para-cnt1">
                    Immersive role-playing experiences with deep storylines, character customization, and dynamic combat mechanics
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel comic-rev">
              <div className="comic-panelim relative">
                <Image
                  src="/common/action.webp"
                  alt="action"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Action</p>
                  <p className="para-cnt1">
                    Our action games feature high-octane gameplay, intense combat, and cinematic sequences for nonstop excitement and adrenaline-packed 
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel">
              <div className="comic-panelim relative">
                <Image
                  src="/common/adventure.webp"
                  alt="Adventure"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Adventure</p>
                  <p className="para-cnt1">
                    Exciting adventure games set within a narrative framework of interesting quests and puzzles transport players to captivating worlds.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel comic-rev">
              <div className="comic-panelim relative">
                <Image
                  src="/common/racing.webp"
                  alt="Racing"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Racing</p>
                  <p className="para-cnt1">
                    Action-packed racing games are expertly designed with fast-paced gameplay, realistic driving mechanics, and dynamic tracks.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel">
              <div className="comic-panelim relative">
                <Image
                  src="/common/shooter.webp"
                  alt="Shooter"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Shooter</p>
                  <p className="para-cnt1">
                    First-person and third-person shooters combined with tactical gameplay, intense battle mechanics, and an advanced weapon progression system.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel comic-rev">
              <div className="comic-panelim relative">
                <Image
                  src="/common/battle-royale.webp"
                  alt="Battle Royale"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Battle Royale</p>
                  <p className="para-cnt1">
                    Massive multiplayer battle games combined with last-man-standing gameplay and weapon gathering featuring shrinking playfields and large maps.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel ">
              <div className="comic-panelim position-relative">
                <Image
                  src="/common/sports.webp"
                  alt="Sports"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Sports</p>
                  <p className="para-cnt1">
                    Whether it's soccer, cricket, or any other sport, our games capture the essence of real-world sports with lifelike mechanics and smooth 
                    controls.
                  </p>
                </div>
              </div>
            </div>
            <div className="comic-panel comic-rev">
              <div className="comic-panelim position-relative">
                <Image
                  src="/common/puzzle.webp"
                  alt="Puzzle"
                  loading="lazy"
                  width={190}
                  height={360}
                  className="max-w-full h-auto flex-shrink-0"
                />
                <div className="comic-sub absolute left-0 bottom-0 w-full">
                  <p className="cm-hd4 text-white font-semibold">Puzzle</p>
                  <p className="para-cnt1">
                    Brain-teasing puzzle games with mind-bending challenges, designed for all ages to test logic, strategy, and creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howsc">
        <div className="w-full px-4 mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
               Our Game Development Process
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, we follow a strategic, agile development methodology that prioritizes transparency, creativity, and collaboration at every 
              step. Our team is equipped with all the skills necessary to ensure your game's success.
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="afflef">
              <div className="affim">
                <Image src="/common/game-develop/video-game-development-services.webp" alt="Video Game Development Services" 
                 width={490} height={800} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 aff-content">
              <div className="affrig">
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Concept and Ideation</h3>
                  <p className="para-cnt1">
                    Our process starts by understanding the concept behind the game, market trends, project feasibility, and your specific requirements. 
                    We create a Game Design Document (GDD) and assign the necessary resources, ensuring everything is ready from day one.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Prototyping and Design</h3>
                  <p className="para-cnt1">
                    In the Prototyping and Design phase, we establish a concrete development framework with efficient content pipelines for asset creation, 
                    integration, and iteration throughout production. Our team designs a playable prototype to validate ideas and refine core systems before 
                    full-scale development.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Art and Visual Development</h3>
                  <p className="para-cnt1">
                    Our talented artists create every game asset, from characters and environments to animations and UI elements. We also produce sound effects 
                    and music assets that complement the game's visual design and mechanics.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Game Development and Coding</h3>
                  <p className="para-cnt1">
                    Our developers handle everything from programming game logic to integrating art assets and animations, as well as building core game systems 
                    and mechanics. Our team consistently works on gameplay, art, and technical implementations to ensure the game aligns perfectly with the 
                    initial concept.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-wrap how-rev">
            <div className="md:w-2/3 md:mr-auto px-2 aff-content">
              <div className="affrig">
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Testing and Quality Assurance</h3>
                  <p className="para-cnt1">
                    Before your game hits the market, we check its quality and performance. Our extensive multi-level tests cover every aspect of the game across 
                    all intended platforms. Only when the game is free of bugs and technical glitches and meets the highest standards of quality do we prepare it 
                    for release.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">
                     Launch and Deployment
                  </h3>
                  <p className="para-cnt1">
                    When it is time to launch, we manage the entire release process. The game is prepared for submission to target platforms, which may involve 
                    certification processes, rating approvals, and integration with storefronts. Once all necessary approvals are secured, the game is officially 
                    deployed and made available to end users.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">
                    Post-Launch Support and Updates
                  </h3>
                  <p className="para-cnt1">
                    Our Post-Launch Support services promote the engagement, stability, and profitability of this game. We support regular patch releases and 
                    strategic updates of new content, as well as balance tweaks, to keep player interest alive and ensure long-term revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="afflef">
              <div className="affim">
                <Image src="/common/game-develop/online-game-development-services.webp" alt="Online Game Development Services" width={490} 
                 height={800} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseGamedevServices />

      <section className="modelsc">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">We Develop Games For Diverse Platforms</h2>
            <p className="lead text-gray-400">
              When it comes to game development across mainstream platforms, we cover a broader range of player preferences. We make innovative 
              and exquisite games that are available to all, regardless of the platform they are on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
            <Image src="/common/game-develop/mobile.webp" alt="Mobile" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Mobile
            </p>
            <p className="para-cnt1">
              Our expertise encompasses mobile games compatible with both iOS and Android platforms. From casual games to sophisticated and 
              action-packed games, our development caters to the unique abilities of mobile platforms.
            </p>
            </div>
            </div>
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
              <Image src="/common/game-develop/pc.webp" alt="PC" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              PC
            </p>
            <p className="para-cnt1">
              We build PC games that are fully optimized to deliver the smoothest experience on high-end gaming rigs and even the most modest 
              systems, making them a perfect choice for dedicated PC gamers.
            </p>
            </div>
            </div>
            <div className="flex">
              <div className="model-in h-full w-full">
              <div className="modelim">
                <Image src="/common/game-develop/console.webp" alt="Console" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <p className="cm-hd4">
                Console
              </p>
              <p className="para-cnt1">
                Our game development team crafts high-performance games across all the latest generations of consoles. Whether it's PlayStation, Xbox, 
                or Nintendo Switch, we ensure the games are optimized to meet the specific requirements of each console.
              </p>
              </div>
            </div>
            <div className="flex">
              <div className="model-in h-full w-full">
              <div className="modelim">
                <Image src="/common/game-develop/AR-VR.webp" alt="AR/VR" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <p className="cm-hd4">
                AR/VR
              </p>
              <p className="para-cnt1">
                Our team excels in creating game titles for various AR/VR platforms, including Oculus Rift, HTC Vive, PlayStation VR, ARKit, and ARCore. 
                We use innovative technologies in our games, which transport players to a whole new world, offering an unparalleled level of 
                engagement and realism.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfoliosc">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase text-white">
            Our Portfolio
          </h2>
          <p className="font-semibold cm-stit text-orange italic uppercase">
            Recent Projects We Have Completed
          </p>
          <p className="lead text-gray-400">
            Here is a glimpse of some of our standout projects, each showcasing our versatility in crafting exceptional games that captivate players from 
            start to finish.
          </p>
        </div>
        <Portfolio />
      </section>

      <ServicesCaseStudies />

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/game-develop/game-build.webp" alt="Yours Could Be Our Next Project!" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container mx-auto relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
             Yours Could Be Our Next Project!
          </h2>
          <p className="lead text-gray-400">
            Got an idea? Our expert team can transform your brilliant idea into a captivating game, just as you imagined.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Let’s Build Your Game">
            <span> Let’s Build Your Game </span>
          </Link>
          </div>
        </div>
      </section>

      <ServicesTools />

      <ServicesEngines />

      <ServicesTeams />

      <section className="modelsc">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Our Engagement Models</h2>
            <p className="lead text-gray-400">
              Our flexible engagement models ensure that you receive precisely what you need, whether it's a complete team, extra support, or a 
              project-driven approach. With transparency and collaboration at the core, you will always have a clear view of progress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
            <Image src="/common/game-develop/project-based-model.webp" alt="Project-Based Model" width={640} height={350} 
             className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Project-Based Model
            </p>
            <p className="para-cnt1">
              Our talented game developers work with your in-house team as strategic partners, sharing expertise and resources to co-create high-quality 
              games within the agreed-upon parameters. This model ensures tight coordination, knowledge exchange, and continuous improvement throughout 
              the development process.
            </p>
            </div>
            </div>
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
              <Image src="/common/game-develop/dedicated-team.webp" alt="Dedicated Development Team" width={640} height={350} 
               className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Dedicated Development Team
            </p>
            <p className="para-cnt1">
              Our Dedicated Development Team model gives you a full-time, exclusive team of experts for in-depth collaboration. They work 
              exclusively on your game, dedicated to meeting your creative vision, timeline, and budget. 
            </p>
            </div>
            </div>
            <div className="flex">
              <div className="model-in h-full w-full">
              <div className="modelim">
                <Image src="/common/game-develop/team-extension.webp" alt="Team Extension" width={640} height={350} 
                 className="max-w-full h-auto flex-shrink-0" />
              </div>
              <p className="cm-hd4">
                Team Extension
              </p>
              <p className="para-cnt1">
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
      
      <section className="contactsc" id="footer">
        <div className="container mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
            <p className="lead text-gray-400">
              Looking for expert game development services or guidance to shape your project strategy? Our team is just a message away. 
              Fill out the form and let’s create something extraordinary together.
            </p>
          </div>        
         <Contact />    
        </div>
      </section> 

    </main>

    </>
  );
}