"use client";

import { useState } from "react";
import HeroRight from "../HeroRight";
import HeroLeftSkeleton from "./HeroLeftSkeleton";
import MBHeroSkeleton from "./MBHeroSkeleton";

const HeroSectionSkeleton = () => {
  const [showGame, setShowGame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <section className="hidden max-container pt-[90px] min-[768px]:grid grid-cols-5 items-center min-[1170px]:gap-6 gap-3">
        <HeroLeftSkeleton showGame={showGame} setIsPaused={setIsPaused} />

        <HeroRight
          showGame={showGame}
          isPaused={isPaused}
          setShowGame={setShowGame}
        />
      </section>

      <MBHeroSkeleton />
    </>
  );
};

export default HeroSectionSkeleton;
