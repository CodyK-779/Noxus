"use client";

import { heroRight } from "@/data/hero-data";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  showGame: number;
  setShowGame: Dispatch<SetStateAction<number>>;
}

const HeroRight = ({ showGame, setShowGame }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const duration = 9000;
    const intervalTime = 100;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + increment));
    }, intervalTime);

    const timeOut = setTimeout(() => {
      setShowGame((prev) => (prev + 1) % heroRight.length);
    }, duration);

    return () => {
      clearTimeout(timeOut);
      clearInterval(interval);
    };
  }, [showGame, setShowGame]);

  return (
    <div className="col-span-1 flex flex-col gap-0.5">
      {heroRight.map((data, index) => (
        <div
          key={data.name}
          onClick={() => setShowGame(index)}
          className={`relative flex items-center min-[1014px]:gap-4 min-[888px]:gap-3 gap-2.5 min-[824px]:px-3 px-2 min-[800px]:py-2 py-1.5 rounded-md ${
            showGame === index ? "bg-neutral-800" : ""
          } hover:bg-neutral-800 transition-all duration-150 ease-in cursor-pointer`}
        >
          {showGame === index && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-700 overflow-hidden rounded">
              <div
                className="h-full bg-white transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <div className="relative min-[1240px]:min-w-[50px] min-[1170px]:min-w-11 min-[1014px]:min-w-10 min-[980px]:min-w-9 min-[890px]:min-w-8 min-w-7 aspect-[2/3] rounded-md overflow-hidden">
            <Image
              src={data.img}
              alt={data.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
          <p className="min-[1014px]:text-base min-[888px]:text-sm min-[800px]:text-[13px] text-[12px] font-medium">
            {data.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroRight;
