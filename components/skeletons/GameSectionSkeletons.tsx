"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const GameSectionSkeletons = () => {
  const [skeletons, setSkeletons] = useState(5);

  useEffect(() => {
    setSkeletons(5);

    const changeCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSkeletons(5);
      } else {
        setSkeletons(4);
      }
    };

    changeCount();

    window.addEventListener("resize", changeCount);
    return () => window.removeEventListener("resize", changeCount);
  }, [skeletons]);

  return (
    <div className="hidden max-container min-[768px]:grid lg:grid-cols-5 grid-cols-4 gap-4">
      {Array.from({ length: skeletons }).map((_, index) => (
        <div key={index} className="relative group">
          <Skeleton className="aspect-[3/4] rounded-md" />

          <Skeleton className="mt-3 mb-0.5 w-full h-3.5" />
          <Skeleton className="mt-3 w-full h-4" />

          <div className="flex items-center justify-between mt-2.5">
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameSectionSkeletons;
