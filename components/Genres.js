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
        <div className="flex flex-wrap justify-center">
          <div className="overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(0_0,100%_0%,69%_106%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/role-playing.webp" alt="Role-Playing" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)]">
                <p className="w-fit font-semibold text-left text-[16px] text-white group-hover:w-full group-hover:pr-[42px]">Role-Playing</p>
              </div>
            </div>
          </div>
          <div className="-ml-[53px] overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(29%_0%,100%_0%,100%_100%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/action.webp" alt="action" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)] group-hover:pr-2">
                <p className="w-full text-center text-[16px] font-semibold text-white group-hover:px-0">Action</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(0_0,100%_0%,69%_106%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/adventure.webp" alt="Adventure" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)]">
                <p className="w-fit font-semibold text-left text-[16px] text-white group-hover:w-full group-hover:pr-[42px]">Adventure</p>
              </div>
            </div>
          </div>
          <div className="-ml-[53px] overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(29%_0%,100%_0%,100%_100%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/racing.webp" alt="Racing" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)] group-hover:pr-2">
                <p className="w-full text-center text-[16px] font-semibold text-white group-hover:px-0">Racing</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(0_0,100%_0%,69%_106%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/shooter.webp" alt="Shooter" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)]">
                <p className="w-fit font-semibold text-left text-[16px] text-white group-hover:w-full group-hover:pr-[42px]">Shooter</p>
              </div>
            </div>
          </div>
          <div className="-ml-[53px] overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(29%_0%,100%_0%,100%_100%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/battle-royale.webp" alt="Battle Royale" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)] group-hover:pr-2">
                <p className="w-full text-center text-[16px] font-semibold text-white group-hover:px-0">Battle Royale</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(0_0,100%_0%,69%_106%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/sports.webp" alt="Sports" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)]">
                <p className="w-fit font-semibold text-left text-[16px] text-white group-hover:w-full group-hover:pr-[42px]">Sports</p>
              </div>
            </div>
          </div>
          <div className="-ml-[53px] overflow-hidden bg-[#ff8300] scale-[0.98] [clip-path:polygon(29%_0%,100%_0%,100%_100%,0%_100%)]">
            <div className="group relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/60 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100">
              <Image src="/common/puzzle.webp" alt="Puzzle" loading="lazy" width={190} height={360} className="max-w-full h-full" />
              <div className="absolute bottom-0 left-0 z-10 flex h-[30%] w-full flex-col justify-end px-2 pt-[2px] pb-[10px] transition-all duration-500 group-hover:h-[50%] group-hover:translate-y-[10px] group-hover:pb-[30px] group-hover:bg-[linear-gradient(0deg,#ff880050_9.57%,rgba(17,86,113,0)_91.21%)] group-hover:pr-2">
                <p className="w-full text-center text-[16px] font-semibold text-white group-hover:px-0">Puzzle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
