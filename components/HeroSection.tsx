"use client";

import { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  const [showGame, setShowGame] = useState(0);

  return (
    <>
      <section className="hidden min-[768px]:grid grid-cols-5 items-center min-[1170px]:gap-6 gap-3">
        <HeroLeft showGame={showGame} />
        <HeroRight showGame={showGame} setShowGame={setShowGame} />
      </section>
    </>
  );
};

export default HeroSection;
