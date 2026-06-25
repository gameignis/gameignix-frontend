"use client";

import Image from "next/image";

export default function HowDoWeWork() {

  return (
    <section className="howsc">
      <div className="w-full px-4 mx-auto">
        <div className="text-center cm-head2">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            How Do We Work?
          </h2>
          <p className="lead text-gray-400">
            As a leading Video game development company, GameIgnix follows an agile development approach to create high-quality
            video games that captivate players. Our process is built on collaboration, transparency, and agility, tailored to
            projects’ specific requirements.
          </p>
        </div>
        <div className="relative flex flex-wrap">
          <div className="afflef">
            <div className="affim">
              <Image src="/common/game-studio.webp" alt="Game Studio" width={800} height={950} className="max-w-full h-auto flex-shrink-0" />
            </div>
          </div>
          <div className="md:w-2/3 md:ml-auto px-2 z-[2]">
            <div className="md:pr-[20px] pr-0 position-relative">
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Initial Consultation</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  We employ a meticulous and strategic approach to analyzing game development requirements and thoroughly
                  assessing client needs, market trends, and technical specifications. We lay the groundwork for the game,
                  outlining its core mechanics, story, and art style through extensive research and brainstorming discussions.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Discovery and Ideation</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  Our team brainstorms creative concepts, storylines, core mechanics, characters, and overall flow. At this
                  stage, gameplay components, art direction, and user experience are mapped out to ensure a clear, actionable
                  plan for development.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Game Design and Prototyping</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  We have a rigorous and iterative game design and prototyping process, using cutting-edge design principles
                  and tools to get an early glimpse of the game. We test ideas, iterate on mechanics, and receive early
                  feedback, allowing us to make changes before full-scale development starts.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Art and Visual Development</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  Our skilled artists create all the game assets required, such as 2D/3D models, textures, animations, sound
                  effects, and music. We meticulously monitor each pixel to design an appearance that aligns with the game's
                  art style and gameplay.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-wrap how-rev">
          <div className="md:w-2/3 md:mr-auto px-2 z-[2]">
            <div className="md:pl-[20px] pl-0 position-relative md:pr-[20px] pr-0">
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Core Development</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  With the assets in place, our development team begins programming the game’s core functionality. We build
                  the underlying systems that drive gameplay, including game mechanics, logic, and interactions, to create a
                  dynamic experience.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                  Game Integration and Optimization
                </h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  During this phase, we integrate all game components, such as gameplay mechanics, assets, audio, and UI
                  elements, into a cohesive whole. Our team focuses on performance tuning, optimizing load times, managing
                  memory usage, and enhancing overall system efficiency to deliver optimal performance.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">
                  Testing and Quality Assurance (QA)
                </h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  Our testing team thoroughly tests all areas of the game, fixing bugs, optimizing mechanics, and addressing
                  any discrepancies that may arise. We perform thorough QA processes, from functionality to compatibility and
                  security checks, ensuring the final product is flawless and of the highest standard of quality before the
                  final release.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px] ml-[1.3rem] md:ml-[5rem]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Launch and Deployment</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  Once the game is polished and ready for release, we help guide it to the market. Our team manages the launch
                  process, including app store submissions, distribution, and marketing coordination. Even after launch, we are
                  dedicated to your success with regular updates, improvements, and support based on user feedback and
                  performance data.
                </p>
              </div>
              <div className="bg-[#ffffff0d] border border-[#fff3] rounded-[14px] md:w-[90%] w-[94%] my-[3rem] md:my-[1rem] px-[20px] py-[2px]">
                <h3 className="text-[18px] leading-[26px] text-left my-[10px] md:my-[1rem] text-[#ff8600] font-semibold italic">Post-Launch Support</h3>
                <p className="text-[16px] md:text-[15px] leading-[24px] mb-[1rem]">
                  Throughout the development process, we give periodical updates, hold feedback meetings, and conduct
                  collaborative reviews to keep you informed at all times and ensure that the project remains on track
                  according to plan.
                </p>
              </div>
            </div>
          </div>
          <div className="afflef">
            <div className="affim">
              <Image src="/common/top-game-development-companies.webp" alt="Top Game Development Companies" width={1067} height={1159}
                className="max-w-full h-auto flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
