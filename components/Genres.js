"use client";

import Image from "next/image";

export default function Genres() {

  return (
    <section className="py-[3rem]">
      <div className="w-full px-4 mx-auto">
        <div className="text-center md:w-[90%] mx-auto w-full md:pb-[2rem] pb-[1rem]">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Genres We Specialize In
          </h2>
          <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] text-[#e6e6e6] mb-[1rem] md:mb-[2rem]">
            Our expertise spans a wide range of game genres, from high-speed racing to hyper-casual games and action-packed shooters.
            This versatility enables us to produce high-quality games that are tailored to your unique vision and needs.
          </p>
        </div>
        <div className="comic-panel-wrapper flex flex-wrap justify-center">
          <div className="comic-panel">
            <div className="comic-panelim relative">
              <Image src="/common/role-playing.webp" alt="Role-Playing" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Role-Playing</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel comic-rev">
            <div className="comic-panelim relative">
              <Image src="/common/action.webp" alt="action" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Action</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel">
            <div className="comic-panelim relative">
              <Image src="/common/adventure.webp" alt="Adventure" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Adventure</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel comic-rev">
            <div className="comic-panelim relative">
              <Image src="/common/racing.webp" alt="Racing" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Racing</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel">
            <div className="comic-panelim relative">
              <Image src="/common/shooter.webp" alt="Shooter" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Shooter</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel comic-rev">
            <div className="comic-panelim relative">
              <Image src="/common/battle-royale.webp" alt="Battle Royale" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Battle Royale</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel">
            <div className="comic-panelim relative">
              <Image src="/common/sports.webp" alt="Sports" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Sports</h3>
              </div>
            </div>
          </div>
          <div className="comic-panel comic-rev">
            <div className="comic-panelim relative">
              <Image src="/common/puzzle.webp" alt="Puzzle" loading="lazy" width={190} height={360} className="max-w-full h-auto" />
              <div className="comic-sub absolute start-0 bottom-0 w-full">
                <h3 className="cm-hd4 text-white font-semibold">Puzzle</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
