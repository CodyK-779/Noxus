"use client";

import { useEffect, useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { heroRight } from "@/data/hero-data";

const HeroSection = () => {
  const [showGame, setShowGame] = useState(3);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowGame((prev) => (prev + 1) % heroRight.length);
    }, 9000);

    return () => clearTimeout(timeOut);
  }, [showGame]);

  return (
    <>
      <section className="hidden min-[768px]:grid grid-cols-5 items-center min-[1062px]:gap-6 gap-3">
        <HeroLeft showGame={showGame} />
        <HeroRight showGame={showGame} setShowGame={setShowGame} />
      </section>
    </>
  );
};

export default HeroSection;
