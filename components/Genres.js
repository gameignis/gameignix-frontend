"use client";

import Image from "next/image";

export default function Genres() {

  return (
    <section className="genresc">
      <div className="w-full px-4 mx-auto">
        <div className="text-center cm-head2">
          <h2 className="cm-title font-bold uppercase">
            Genres We Specialize In
          </h2>
          <p className="lead text-gray-400">
            Our expertise spans a wide range of game genres, from high-speed racing to hyper-casual games and action-packed shooters.
            This versatility enables us to produce high-quality games that are tailored to your unique vision and needs.
          </p>
        </div>
        <div className="comic-panel-wrapper flex flex-wrap justify-center">
          <div className="comic-panel ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
