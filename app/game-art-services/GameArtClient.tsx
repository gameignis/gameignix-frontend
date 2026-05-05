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

    <section className="banner relative"> 
        <div className="ban-mid relative h-full">
          <div className="container">
            <div className="bancn absolute bottom-0 left-0 right-0 text-center">            
            <h1 className="cm-hd1 font-bold">
              Game Art Services
            </h1>
            <p className="font-semibold cm-stit text-orange-500 italic">
              Crafting Art To Fuel Your Game’s Success
            </p>
            <p className="para-cnt1">
              As a top-rated game art development company, we bring games to life through high-quality game art that encompasses every visual 
              element. Our unique blend of creative skills and technical expertise enables us to produce awe-inspiring game assets and visual 
              designs tailored to your specific genre, platform, and gameplay requirements.
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
        src="/common/game-art/game-art-studio.webp"
        alt="Game Art Studio"
        fill
        priority
        className="banim hidden md:block object-cover"
      />
      <Image
        src="/common/game-art/game-art-studio-480.webp"
        alt="Game Art Studio"
        fill
        priority
        className="banim md:hidden object-cover"
      />
    </section>

    <main className="gradientsc inngrad">

      <section className="innheadsc" id="about-us">
          <div className="container">
            <div className="text-center cm-head2">
              <h2 className="cm-title font-bold uppercase text-white">
                Your Trusted Game Art Studio 
              </h2>
              <p className="lead text-gray-400">
                GameIgnix is a leading game art studio committed to transforming creative vision into production-ready art that powers games. We have a proven 
                track record of supporting leading game companies and publishers with tailored game art services for their games. We bring together skilled 
                artists and designers, all aligned with one goal to deliver visually compelling 2D/3D art. Understanding the expectations of today’s global 
                game market, we operate with the scalability and creative insight needed to match them.
              </p>
            </div>
          </div>
      </section>

      <section className="servicesc3">
        <div className="container">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
              Video Game Art Services We Offer
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, we offer a comprehensive range of game art services tailored to align with your production goals, creative vision, and 
              delivery timeline. Our artists guarantee that every element required to make your game successful comes with high-quality, on-brand 
              visuals. Take a look at our complete list to check out how we can help with your next project.
            </p>
          </div>
          <div className="serv-rwin">
            <div className="serv-imobrw">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-red relative serv-lefrad">
                  <div className="w-full md:col-span-7 serv-imobcn">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      Concept Art  
                    </h3>
                    <p className="para-cnt1">
                      Our team specializes in creating high-impact, actionable visual blueprints tailored to the project’s specific requirements. Each concept 
                      is developed as creatively inspiring and technically feasible to drive your entire art pipeline.  
                    </p>
                  </div>
                  </div>
                  <div className="w-full md:col-span-5 pos-serv">
                    <div className="serv-imob w-full">
                      <div className="gam-serim">
                      <Image src="/common/game-art/game-art-services.webp" alt="Game Art Services" width={300} height={200} className="max-w-full h-auto flex-shrink-0" />
                    </div>
                   </div>
                  </div>
              </div>
            </div>
          </div>
          <ArtConcepts />
          <div className="serv-rwin">
            <div className="serv-imobrw serv-rwinrev">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-blue relative serv-rigrad">
                <div className="w-full md:col-span-5 pos-serv">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-art/game-design-services.webp" alt="Game Design Services" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-7 serv-imobcn ml-auto">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      2D/3D Assets
                    </h3>
                    <p className="para-cnt1">
                      Our specialty at GameIgnix is producing top-notch 2D and 3D game assets that enhance gameplay on various platforms and genres. Every 
                      asset we provide satisfies the game's visual requirements, whether it is stylized or photorealistic.
                    </p>
                  </div>
                </div>            
              </div>
            </div>
          </div>
          <ArtAssets />
          <div className="serv-rwin">
            <div className="serv-imobrw">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-red1 relative serv-lefrad">
                <div className="w-full md:col-span-7 serv-imobcn">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      3D Modeling and Texturing 
                    </h3>
                    <p className="para-cnt1">
                      Our 3D modeling and texturing services are designed to achieve the perfect balance between visual fidelity and in-game performance. We 
                      work through a long production path, from initial blockouts and artistic sketches to final textured models, with mindful consideration 
                      of all creative and technical specifications.
                    </p>
                  </div>
                </div>
                <div className="w-full md:col-span-5 pos-serv">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-art/game-art-outsourcing.webp" alt="Game Art Outsourcing Studio" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtTexturing />
          <div className="serv-rwin">
            <div className="serv-imobrw serv-rwinrev">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-blue relative serv-rigrad">
                <div className="w-full md:col-span-5 pos-serv">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-art/video-game-art-services.webp" alt="Video Game Art Services" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-7 serv-imobcn ml-auto">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      Game Animation
                    </h3>
                    <p className="para-cnt1">
                      We offer a wide variety of animation services that bring the entire world of games to life. Whether it's for core game mechanics, 
                      cutscenes, or other interactive moments, we create animation that's fluid, expressive, and true to the gameplay.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtAnimation />
          <div className="serv-rwin">
            <div className="serv-imobrw">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-blue relative serv-lefrad">
                <div className="w-full md:col-span-7 serv-imobcn">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      VFX
                    </h3>
                    <p className="para-cnt1">
                      Our VFX artists craft dynamic visual effects that deliver stunning realism and impact. We ensure that every effect, whether subtle 
                      environmental ambiance or combat sequences, is optimized to amplify gameplay, elevate storytelling, and captivate players. 
                    </p>
                  </div>
                </div>
                <div className="w-full md:col-span-5 pos-serv">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-art/game-art-company.webp" alt="Game Art Company" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArtVFX />
          <div className="serv-rwin">
            <div className="serv-imobrw serv-rwinrev">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 serv-blue relative serv-rigrad">
                <div className="w-full md:col-span-5 pos-serv">
                  <div className="serv-imob w-full">
                    <div className="gam-serim">
                      <Image src="/common/game-art/game-design-company.webp" alt="Game Design Company" width={300} height={200}
                        className="max-w-full h-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-7 serv-imobcn ml-auto">
                  <div className="serv-lef">
                    <h3 className="cm-hd2 text-orange capitalize font-bold italic">
                      UI/UX
                    </h3>
                    <p className="para-cnt1">
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

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/game-art/game-idea.webp" alt="Bring Your Game Worlds to Life with Stunning Art" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Bring Your Game Worlds to Life with Stunning Art
          </h2>
          <p className="lead text-gray-400">
            From 2D to 3D characters and immersive game environments, our game artists craft visuals that captivate players and elevate your gaming 
            experience.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Get Custom Game Art Today">
            <span> Get Custom Game Art Today </span>
          </Link>
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
            Showcased in our portfolio is the broad spectrum of artistic depth and adaptability we bring to every project. We ensure every asset we 
            produce serves the gameplay and matches the highest gaming standards.
          </p>
        </div>
        <Portfolio />
      </section>

      <GameArtOutsourcing />

      <GameArtTools />

      <section className="howsc">
        <div className="w-full px-4 mx-auto">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">
              Our Game Art Production Process
            </h2>
            <p className="lead text-gray-400">
              At GameIgnix, our game art production process is made to support our clients with a streamlined pipeline. We serve as a creative extension of 
              your team, fully accountable for meeting your asset production goals. 
            </p>
          </div>
          <div className="relative flex flex-wrap">
            <div className="afflef">
              <div className="affim">
                <Image src="/common/game-art/game-art-development-company.webp" alt="Game Art Development Company" width={800} height={950} className="max-w-full h-auto flex-shrink-0" />
              </div>
            </div>
            <div className="md:w-2/3 md:ml-auto px-2 aff-content">
              <div className="affrig">
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Art Direction and Style Guide Creation</h3>
                  <p className="para-cnt1">
                    Our art directors collaborate with clients to establish a cohesive visual direction that aligns with the gameplay, genre, and narrative 
                    tone. We create complete style guides and visual references to provide clarity throughout production. 
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Visual Prototyping and Sketching</h3>
                  <p className="para-cnt1">
                    Next, our team develops sketches, thumbnails, and visual mockups to explore different artistic approaches and concepts. We visualize core 
                    elements and refine ideas until they reflect the game’s creative intent before moving into full production.  
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Asset Design and Production</h3>
                  <p className="para-cnt1">
                    Immediately after establishing the visual direction, our artists begin developing high-quality 2D and 3D assets with meticulous artistic 
                    finesse and technical expertise. Characters, props, UI elements, environments, and VFX are created using a combination of multiple 3D modeling 
                    and animation techniques, all well-balanced between visual appeal and performance.  
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Texturing and Final Review</h3>
                  <p className="para-cnt1">
                    After modeling, we step in to optimize each asset with detailed texturing and surface treatments like physically-based rendering, UV mapping, 
                    and other techniques. Assets are then carefully reviewed for quality and consistency through internal checks before considering them final. 
                  </p>
                </div>

                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Technical Integration and Optimization</h3>
                  <p className="para-cnt1">
                    Our technical artists perform polygon reduction, level of detail adjustments, shader development, and VFX tuning to prepare assets for 
                    seamless integration into the engine. To ensure a seamless integration process, we collaborate closely with the development team to achieve 
                    the desired performance while maintaining aesthetic integrity. 
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Final Launch and Delivery</h3>
                  <p className="para-cnt1">
                    At the final stage, we prepare and pack all the final deliverables in clean, structured formats. We provide ready-to-deploy asset packs that 
                    are optimized for compatibility across your preferred platforms, making the launch process efficient.
                  </p>
                </div>
                <div className="aff-bx">
                  <h3 className="cm-hd4 text-orange font-semibold italic">Post-Launch Upgrades</h3>
                  <p className="para-cnt1">
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

      <section className="modelsc">
        <div className="container">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Engagement Models At Our Game Art Development Company</h2>
            <p className="lead text-gray-400">
              At GameIgnix, we offer flexible collaboration models from which you can choose according to your resource needs and production goals. 
              Our models are made to support your creative pipeline with the outcomes you desire. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
            <Image src="/common/game-art/project-based-model.webp" alt="Project-Based Engagement" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Project-Based Engagement
            </p>
            <p className="para-cnt1">
              Our project-based model allows you to partner with us for end-to-end delivery of specific game art requirements. We take full ownership of 
              the art pipeline, ensuring consistent delivery and minimal oversight from your side.
            </p>
            </div>
            </div>
            <div className="flex">
            <div className="model-in h-full w-full">
            <div className="modelim">
              <Image src="/common/game-art/dedicated-team.webp" alt="Dedicated Art Teams" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
            </div>
            <p className="cm-hd4">
              Dedicated Art Teams
            </p>
            <p className="para-cnt1">
              For those seeking a long-term visual production partner, our dedicated team model provides you with a full-time crew of artists, tailored to 
              your project’s style, volume, and pace. This setup offers direct access to our art leads and production managers, ensuring efficient 
              collaboration. 
            </p>
            </div>
            </div>
            <div className="flex">
              <div className="model-in h-full w-full">
              <div className="modelim">
                <Image src="/common/game-art/team-extension.webp" alt="Team Extension" width={640} height={350} className="max-w-full h-auto flex-shrink-0" />
              </div>
              <p className="cm-hd4">
                Team Extension
              </p>
              <p className="para-cnt1">
                Need focused expertise? Our artists integrate with your in-house staff to fill their skill gaps. With this model, you can leverage our 
                domain expertise and talent while maintaining complete control over your pipeline.   
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adsc relative text-center text-white flex items-end">
        <Image src="/common/game-art/game-build.webp" alt="Choose Your Model, Start Your Project" width={1440} height={600} className="adim absolute inset-0 w-full h-full object-cover" />
        <div className="overlay"></div>
        <div className="container relative py-12">
          <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Choose Your Model, Start Your Project
          </h2>
          <p className="lead text-gray-400">
            Whether you need a dedicated team, a single game artist, or a full-cycle solution, our flexible engagement models make it easy to kickstart 
            your project today.
          </p>
          <Link href="/contact" target="_blank" className="cm-btn1" aria-label="Launch Your Game with Us">
            <span> Launch Your Game with Us </span>
          </Link>
          </div>
        </div>
      </section>      

      <ArtFaq />

      <Testimonials />

      <section className="contactsc" id="footer">
        <div className="container">
          <div className="text-center cm-head2">
            <h2 className="cm-title font-bold uppercase text-white">Contact Us</h2>
            <p className="lead text-gray-400">
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