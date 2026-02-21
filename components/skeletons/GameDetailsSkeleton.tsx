import { Skeleton } from "../ui/skeleton";
import GameTabsSkeleton from "./GameTabsSkeleton";
import MBGameTitleSkeleton from "./MBGameTitleSkeleton";

const GameDetailsSkeleton = () => {
  return (
    <>
      <Skeleton className="relative w-full xl:h-[644px] aspect-video overflow-hidden min-[400px]:mt-[69.5px] mt-[65.5px] mb-4" />
      <div className="max-container">
        <Skeleton className="lg:w-52 h-3 w-full" />
      </div>
      <MBGameTitleSkeleton />
      <GameTabsSkeleton />
    </>
  );
};

export default GameDetailsSkeleton;
