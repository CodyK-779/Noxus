"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination } from "./NewReleases";

const NewPaginations = ({ paginate, setPaginate }: Pagination) => {
  const handleNext = () => {
    if (paginate.end < 40) {
      setPaginate((prev) => ({
        start: prev.start + 5,
        end: prev.end + 5,
      }));
    }

    return;
  };

  const handlePrevious = () => {
    if (paginate.start > 0) {
      setPaginate((prev) => ({
        start: prev.start - 5,
        end: prev.end - 5,
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
        disabled={paginate.end >= 40}
        className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};

export default NewPaginations;
