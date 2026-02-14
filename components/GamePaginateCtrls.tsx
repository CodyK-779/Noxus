"use client";

import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PaginateValues {
  start: number;
  end: number;
}

interface Props {
  paginate: PaginateValues;
  setPaginate: Dispatch<SetStateAction<PaginateValues>>;
  count: number;
}

const GamePaginateCtrls = ({ paginate, setPaginate, count }: Props) => {
  const itemsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) return 6;
    if (screenWidth >= 1024) return 5;
    if (screenWidth >= 768) return 4;
    if (screenWidth >= 640) return 3;
    if (screenWidth >= 425) return 4;

    return 3;
  };

  const handlePrevious = () => {
    const items = itemsPerPage();

    setPaginate((prev) => {
      const newStart = Math.max(0, prev.start - items);
      return {
        start: newStart,
        end: newStart + items,
      };
    });
  };

  const handleNext = () => {
    const items = itemsPerPage();

    setPaginate((prev) => {
      const newStart = Math.min(count - items, prev.start + items);
      return {
        start: newStart,
        end: newStart + items,
      };
    });
  };

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
        <button
          onClick={handlePrevious}
          disabled={paginate.start <= 0}
          className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
        >
          <ChevronLeft className="min-[375px]:size-4 size-3.5" />
        </button>
      </div>

      <div className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
        <button
          onClick={handleNext}
          disabled={paginate.end >= count}
          className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
        >
          <ChevronRight className="min-[375px]:size-4 size-3.5" />
        </button>
      </div>
    </>
  );
};

export default GamePaginateCtrls;
