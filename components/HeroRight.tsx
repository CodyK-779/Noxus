"use client";

import { heroRight } from "@/data/hero-data";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  showGame: number;
  setShowGame: Dispatch<SetStateAction<number>>;
}

const HeroRight = ({ showGame, setShowGame }: Props) => {
  return (
    <div className="col-span-1 flex flex-col gap-0.5">
      {heroRight.map((data, index) => (
        <div
          key={data.name}
          onClick={() => setShowGame(index)}
          className={`flex items-center min-[1014px]:gap-4 min-[888px]:gap-3 gap-2.5 min-[824px]:px-3 px-2 min-[800px]:py-2 py-1.5 rounded-md ${
            showGame === index && "bg-neutral-800"
          } hover:bg-neutral-800 transition-all duration-150 ease-in cursor-pointer`}
        >
          <div className="relative min-[1240px]:min-w-[50px] min-[1170px]:min-w-11 min-[1014px]:min-w-10 min-[980px]:min-w-9 min-[890px]:min-w-8 min-w-7 aspect-[2/3] rounded-md overflow-hidden">
            <Image
              src={data.img}
              alt={data.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
          <p className="min-[1014px]:text-base min-[888px]:text-sm min-[784px]:text-[13px] text-[12.5px] font-medium">
            {data.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroRight;
