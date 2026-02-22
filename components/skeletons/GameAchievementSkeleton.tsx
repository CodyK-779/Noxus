import { Trophy } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const GameAchievementSkeleton = () => {
  return (
    <>
      {/* Header Skeleton */}
      <div className="hidden md:flex w-full rounded-xl overflow-hidden">
        <div className="relative w-[40%] aspect-video">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="w-[60%] flex items-center pl-20 bg-neutral-900">
          <div className="flex flex-col gap-1">
            <Skeleton className="lg:h-4 h-3.5 w-32" />{" "}
            <Skeleton className="h-6 w-48 lg:h-8 mt-3" />{" "}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-3 md:mt-16 mt-0 mb-8">
        <Trophy className="size-6 text-[#e91e3f]" />
        <h3 className="text-2xl font-bold">Achievements </h3>
      </div>

      {/* Achievements Skeleton */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          <div className="flex items-center sm:gap-7 min-[375px]:gap-5 gap-4">
            <div className="relative md:size-28 sm:size-24 min-[375px]:size-20 size-16 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shrink-0">
              <Skeleton className="w-full h-full" />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {/* Achievement Name */}
              <Skeleton className="h-5 w-48 md:h-6" />

              <div className="sm:block hidden">
                <Skeleton className="h-4 w-64" />
              </div>

              <Skeleton className="h-4 w-36 sm:mt-1.5 min-[375px]:mt-1 mt-0.5" />
            </div>
          </div>

          <div className="mt-2.5 sm:hidden">
            <Skeleton className="h-4 w-full" />
          </div>

          <hr className="sm:my-6 my-5 border-neutral-800" />
        </div>
      ))}
    </>
  );
};

export default GameAchievementSkeleton;
