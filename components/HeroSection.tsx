"use client";

import { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import MBHeroSection from "./MBHeroSection";
import { WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  wishlistItems: WishlistItemType[] | undefined;
}

const HeroSection = ({ wishlistItems }: Props) => {
  const [showGame, setShowGame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <section className="hidden max-container pt-[90px] min-[768px]:grid grid-cols-5 items-center min-[1170px]:gap-6 gap-3">
        <HeroLeft
          showGame={showGame}
          wishlistItems={wishlistItems}
          setIsPaused={setIsPaused}
        />

        <HeroRight
          showGame={showGame}
          isPaused={isPaused}
          setShowGame={setShowGame}
        />
      </section>

      <MBHeroSection wishlistItems={wishlistItems} />
    </>
  );
};

export default HeroSection;
