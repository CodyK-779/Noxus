"use client";

import { PaginateType } from "@/utils/paginationInterface";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  gamesCount: number;
  paginate: PaginateType;
  setPaginate: Dispatch<SetStateAction<PaginateType>>;
}

const PaginateControls = ({ gamesCount, paginate, setPaginate }: Props) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = screenWidth >= 1024 ? 5 : 4;

  const handleNext = () => {
    if (paginate.end < 40) {
      setPaginate((prev) => ({
        start: prev.start + itemsPerSlide,
        end: prev.end + itemsPerSlide,
      }));
    }

    return;
  };

  const handlePrevious = () => {
    if (paginate.start > 0) {
      setPaginate((prev) => ({
        start: prev.start - itemsPerSlide,
        end: prev.end - itemsPerSlide,
      }));
    }

    return;
  };

  return (
    <div className="hidden min-[768px]:flex items-center gap-3.5">
      <button
        onClick={handlePrevious}
        disabled={paginate.start <= 0}
        className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        onClick={handleNext}
        disabled={paginate.end >= gamesCount}
        className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};

export default PaginateControls;
