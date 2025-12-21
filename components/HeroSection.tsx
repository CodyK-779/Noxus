"use client";

import { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  const [showGame, setShowGame] = useState(3);

  return (
    <section className="flex gap-6">
      <HeroLeft showGame={showGame} />
      <HeroRight setShowGame={setShowGame} />
      {/* <div className="w-[325px] border border-white"></div> */}
    </section>
  );
};

export default HeroSection;
