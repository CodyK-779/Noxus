"use client";

import { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import MBHeroSection from "./MBHeroSection";

const HeroSection = () => {
  const [showGame, setShowGame] = useState(0);

  return (
    <>
      <section className="hidden max-container pt-[90px] min-[768px]:grid grid-cols-5 items-center min-[1170px]:gap-6 gap-3">
        <HeroLeft showGame={showGame} />
        <HeroRight showGame={showGame} setShowGame={setShowGame} />
      </section>

      <MBHeroSection />
    </>
  );
};

export default HeroSection;
