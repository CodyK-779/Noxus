"use client";

import { FilterIcon, SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

const popularGenres = [
  { name: "Action", id: 4 },
  { name: "Indie", id: 51 },
  { name: "RPG", id: 5 },
  { name: "Shooter", id: 2 },
];

const BrowseBannerSkeleton = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="relative mt-[68.5px] min-[400px]:mt-[70px] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0808] via-[#2d0a0a] to-[#5c1010]">
        {/* Moving light effects */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-[#e91e3f] opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e91e3f] opacity-10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#e91e3f]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content container */}
      <div className="relative max-container sm:py-20 py-16 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm min-[350px]:mb-4 mb-3.5">
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e3f] opacity-75" />
              <span className="relative inline-flex rounded-full size-1.5 bg-[#e91e3f]" />
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-white/60 tracking-wider">
              LIVE GAME DATABASE
            </span>
          </div>

          {/* Main heading with enhanced gradient */}
          <h1 className="text-2xl min-[350px]:text-3xl min-[375px]:text-4xl sm:text-5xl lg:text-6xl font-bold font-orbitron">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Browse
            </span>
            <span className="bg-gradient-to-r from-[#e91e3f] to-[#ff6b6b] bg-clip-text text-transparent ml-3">
              Games
            </span>
          </h1>

          {/* Description with better typography */}
          <p className="text-sm min-[375px]:text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mt-2 min-[350px]:mt-2.5 sm:mt-4">
            Explore our massive collection of{" "}
            <span className="text-[#e91e3f] font-semibold">890,000+ games</span>{" "}
            across every genres and platforms. Find your favourite games with
            advance filters.
          </p>

          {/* Search section with improved design */}
          <div className="w-full max-w-3xl min-[375px]:mt-10 mt-8">
            <form className="relative group">
              {/* Search input with glow effect */}
              <input
                enterKeyHint="search"
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by game title, genre, or platform..."
                className="w-full sm:text-base min-[375px]:text-sm text-[13px] py-3 sm:pl-14 min-[375px]:pl-11 pl-10 sm:pr-24 min-[375px]:pr-[85px] pr-20 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 font-medium focus:outline-none focus:border-[#e91e3f]/50 focus:ring-2 focus:ring-[#e91e3f]/20 transition-all duration-300 group-hover:border-white/20"
              />

              {/* Search icon */}
              <div className="absolute top-1/2 -translate-y-1/2 sm:left-5 left-4">
                <SearchIcon className="size-3.5 min-[375px]:size-4 sm:size-5 text-white/40 group-hover:text-white/60 transition-colors" />
              </div>

              {/* Filter button with tooltip */}
              <div className="absolute top-1/2 -translate-y-1/2 sm:right-3 right-2 flex items-center gap-1">
                {search && (
                  <button
                    type="button"
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors group/clear"
                    title="Clear search"
                  >
                    <XIcon className="sm:size-6 min-[375px]:size-5 size-4 text-white/40 group-hover/clear:text-white/60" />
                  </button>
                )}

                <button
                  type="button"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors group/filter relative"
                  title="Filter games"
                >
                  <FilterIcon className="sm:size-5 min-[375px]:size-4 size-3.5 text-white/40 group-hover/filter:text-white/60" />
                </button>
              </div>
            </form>

            {/* Popular search suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="text-xs font-medium text-white/40">
                Popular:
              </span>
              {popularGenres.map((tag) => (
                <button
                  key={tag.id}
                  className="px-3 py-1 min-[375px]:text-xs text-[10px] border text-white/60 hover:text-white border-white/10 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-6 md:gap-10 min-[375px]:mt-12 mt-9">
            <div className="text-center">
              <div className="text-lg min-[350px]:text-xl min-[375px]:text-2xl md:text-3xl font-bold text-white">
                890k+
              </div>
              <div className="text-[10px] min-[375px]:text-xs text-white/40 uppercase tracking-wider mt-1">
                Games
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-lg min-[350px]:text-xl min-[375px]:text-2xl md:text-3xl font-bold text-white">
                50
              </div>
              <div className="text-[10px] min-[375px]:text-xs text-white/40 uppercase tracking-wider mt-1">
                Platforms
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-lg min-[350px]:text-xl min-[375px]:text-2xl md:text-3xl font-bold text-white">
                19
              </div>
              <div className="text-[10px] min-[375px]:text-xs text-white/40 uppercase tracking-wider mt-1">
                Genres
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
};

export default BrowseBannerSkeleton;
