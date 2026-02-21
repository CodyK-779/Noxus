"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GameCarouselSkeleton = () => {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const updateCount = () => {
      const xl = window.innerWidth >= 1280;
      const lg = window.innerWidth >= 1024;
      const md = window.innerWidth >= 768;
      const sm = window.innerWidth >= 640;
      const xs = window.innerWidth >= 425;

      if (xl) setCount(6);
      else if (lg) setCount(5);
      else if (md) setCount(4);
      else if (sm) setCount(3);
      else if (xs) setCount(4);
      else setCount(3);
    };

    updateCount();

    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <>
      <Skeleton className="relative aspect-video rounded-xl" />
      <div className="relative grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 min-[425px]:grid-cols-4 grid-cols-3 lg:gap-4 min-[375px]:gap-3.5 min-[350px]:gap-3 gap-2.5 sm:px-12 px-10 mt-6 mb-10">
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton
            key={index}
            className="relative aspect-video rounded-md overflow-hidden cursor-pointer"
          />
        ))}

        <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
          <button
            disabled
            className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
          >
            <ChevronLeft className="min-[375px]:size-4 size-3.5" />
          </button>
        </div>

        <div className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
          <button
            disabled
            className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
          >
            <ChevronRight className="min-[375px]:size-4 size-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GameCarouselSkeleton;
