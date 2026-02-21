import { Skeleton } from "../ui/skeleton";

const MBGameTitleSkeleton = () => {
  return (
    <section className="max-container sm:hidden mt-4">
      <Skeleton className="w-full min-[500px]:h-7 min-[400px]:h-6 min-[350px]:h-[22px] h-5 mb-6" />
      <Skeleton className="w-full min-[375px]:h-3.5 h-3 mb-4" />
      <Skeleton className="w-full min-[375px]:h-3.5 h-3" />
    </section>
  );
};

export default MBGameTitleSkeleton;
