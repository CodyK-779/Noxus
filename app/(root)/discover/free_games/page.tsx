import FreeGamesContainer from "@/components/FreeGamesContainer";
import FreeGamesMidSection from "@/components/FreeGamesMidSection";
import FreeGamesSkeleton from "@/components/skeletons/FreeGamesSkeleton";
import { Suspense } from "react";

export default function FreeGamesPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  return (
    <main className="max-container mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 min-[375px]:h-16 h-14 bg-[#e91e3f] rounded-full" />
        <div>
          <h1 className="md:text-5xl min-[375px]:text-4xl text-3xl font-bold">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Free
            </span>{" "}
            <span className="text-[#e91e3f]">Games</span>
          </h1>
          <p className="text-neutral-400 min-[375px]:text-sm text-xs mt-1">
            Explore free-to-play games from our collection.
          </p>
        </div>
      </div>
      <p className="w-full lg:max-w-2xl sm:text-lg min-[425px]:text-base min-[350px]:text-sm text-[13px] font-medium text-neutral-300 mt-6">
        Explore our curated collection of free and free-to-play games across all
        platforms. From competitive shooters to relaxing simulators, jump in
        without spending a dime.
      </p>

      <Suspense fallback={<FreeGamesSkeleton />}>
        <FreeGamesMidSection />
        <FreeGamesContainer searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
