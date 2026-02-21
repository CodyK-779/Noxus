import { Info } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const GameBodySkeleton = () => {
  return (
    <>
      {/* Description */}
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-2">
        <span className="text-[#e91e3f]">▸</span> About This Game
      </h1>
      <div className="flex flex-col gap-3">
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-[70px] h-2.5" />
      </div>

      <hr className="my-6" />

      {/* Genres */}
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-[18px]">
        <span className="text-[#e91e3f]">▸</span> Tags
      </h1>
      <Skeleton className="w-full h-40" />

      <hr className="mt-8 mb-6" />

      {/* Platforms */}
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-[18px]">
        <span className="text-[#e91e3f]">▸</span> Platforms
      </h1>
      <Skeleton className="w-full h-24" />

      <hr className="mt-8 mb-6" />

      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-5">
        <span className="text-[#e91e3f]">▸</span> Developers and Publishers
      </h1>

      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="group flex items-center md:gap-2.5 gap-3 lg:p-3 md:px-3 md:py-2 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
          >
            <Skeleton className="lg:size-11 md:size-10 min-[375px]:size-11 size-10 rounded-full" />

            <div className="flex flex-col min-[375px]:gap-0 gap-0.5 leading-tight">
              <Skeleton className="w-20 lg:h-2.5 md:h-2 min-[375px]:h-2.5 h-2" />
              <div className="flex items-center gap-1.5 mt-2">
                <div className="lg:size-[5px] md:size-1 min-[375px]:size-[5px] size-1 rounded-full bg-[#e91e3f]" />
                <Skeleton className="w-20 lg:h-2.5 md:h-2 min-[375px]:h-2.5 h-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-10 mb-6" />

      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-6 underline underline-offset-8 decoration-[#e91e3f]">
        System Requirements
      </h1>

      <div className="mt-10">
        <div className="grid grid-cols-2 gap-6">
          <Skeleton className="w-full aspect-[3/4] rounded-xl" />
          <Skeleton className="w-full aspect-[3/4] rounded-xl" />
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
          <div className="flex min-[375px]:flex-row flex-col min-[375px]:items-start items-center min-[375px]:gap-3 gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Info className="size-4 text-blue-500" />
            </div>
            <div className="flex-1 min-[375px]:block hidden">
              <p className="text-sm text-neutral-400">
                <span className="font-medium text-white">Important Note:</span>{" "}
                Requires a 64-bit processor and operating system. These
                requirements are guidelines and actual performance may vary
                based on system configuration and settings.
              </p>
            </div>
            <div className="min-[375px]:hidden flex flex-col">
              <p className="font-medium text-white text-sm text-center">
                Important Note
              </p>
              <p className="min-[350px]:text-sm text-[13px] text-neutral-400 mt-2 text-center">
                Requires a 64-bit processor and operating system. These
                requirements are guidelines and actual performance may vary
                based on system configuration and settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBodySkeleton;
