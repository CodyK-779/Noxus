"use client";

import { useSearchParams } from "next/navigation";

const BrowseBanner = () => {
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";

  return (
    <section className="mt-[70px] bg-gradient-to-tr from-[#2d0a0a] via-[#5c1010] to-[#e91e3f] w-full py-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold font-orbitron tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Browse Games
        </h1>
        <p className="text-xl font-medium text-neutral-300 text-center max-w-2xl mt-3">
          Browse through our massive collection of 500,000+ games and find your
          favorite with advanced filters.
        </p>
      </div>
    </section>
  );
};

export default BrowseBanner;

// 1st Choice
{
  /* <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0f0f] to-[#2a0a0f] relative overflow-hidden w-full h-[500px]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#e91e3f15_0%,_transparent_50%)]" />
</div> */
}

// 2nd Choice
// <div className="bg-gradient-to-tr from-[#2d0a0a] via-[#5c1010] to-[#e91e3f] w-full h-[500px]"></div>

// 3rd Choice
{
  /* <div className="bg-gradient-to-t from-neutral-900 via-neutral-900 to-[#e91e3f]/20 relative overflow-hidden w-full h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e91e3f]/30 via-transparent to-transparent" />
      </div> */
}
