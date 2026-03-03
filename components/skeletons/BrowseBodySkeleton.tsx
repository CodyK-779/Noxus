"use client";

import { Gamepad2, Search, X } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useRef, useState } from "react";
import DropdownSkeleton from "./DropdownSkeleton";

const dropdowns = [
  "Release Dates",
  "Filter Platform",
  "Filter Genre",
  "Filter Tags",
  "Filter Scores",
];

const BrowseBodySkeleton = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="max-container lg:grid grid-cols-5 sm:gap-5 min-[400px]:gap-4 gap-3 mt-10">
      {/* BrowseGames */}
      <div className="lg:col-span-4">
        {/* Games Count */}
        <div className="flex items-center gap-3 mt-6">
          <div className="min-[400px]:p-2.5 p-2 rounded-lg bg-[#e91e3f]">
            <Gamepad2 className="size-5" />
          </div>
          <div>
            <Skeleton className="w-32 sm:h-[18px] min-[400px]:h-4 h-3.5 mb-2" />
            <p className="min-[400px]:text-sm text-xs text-gray-400">
              Browse through our collection
            </p>
          </div>
        </div>

        {/* Games */}
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2.5 mt-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="min-[400px]:mb-8 mb-4">
              <Skeleton className="aspect-[3/4] rounded-md " />

              <Skeleton className="mt-3 mb-0.5 w-full min-[400px]:h-3.5 h-3" />
              <Skeleton className="min-[400px]:mt-3 mt-2.5 w-full min-[400px]:h-4 h-3" />

              <Skeleton className="min-[400px]:w-20 w-14 min-[400px]:h-3 h-2.5 min-[400px]:mt-2.5 mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* BrowseFilter */}
      <div className="sticky top-[90px] h-fit lg:col-span-1 lg:block hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 py-4 px-3 mt-6">
        <h3 className="text-xl font-semibold">Filters</h3>
        <div className="relative mt-5">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
            placeholder="Game name"
            className="w-full text-sm bg-neutral-800 text-neutral-100 pl-8 pr-8 py-2 focus:outline-none rounded-md"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5 text-neutral-200" />

          {search && (
            <button>
              <X className="absolute right-2 top-1/2 -translate-y-1/2 size-3.5 text-neutral-200 cursor-pointer" />
            </button>
          )}
        </div>

        <hr className="my-6" />

        <div className="flex flex-col mt-5 gap-3">
          {dropdowns.map((d) => (
            <DropdownSkeleton key={d} label={d} size="w-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseBodySkeleton;
