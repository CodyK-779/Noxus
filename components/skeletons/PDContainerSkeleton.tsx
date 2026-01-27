import PlatformDetailsNavigation from "../PlatformDetailsNavigation";
import { Skeleton } from "../ui/skeleton";
import DropdownSkeleton from "./DropdownSkeleton";

const PDContainerSkeleton = () => {
  return (
    <section className="max-container mt-24">
      <PlatformDetailsNavigation skeleton />
      <Skeleton className="md:w-80 sm:w-72 w-full md:h-10 sm:h-8 min-[400px]:h-7 h-6 mt-8" />

      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-5 mb-4">
        <DropdownSkeleton
          label="Release Dates"
          size="sm:min-w-36 max-[639px]:w-full"
        />
        <DropdownSkeleton
          label="Filter Genre"
          size="sm:min-w-36 max-[639px]:w-full"
        />
        <DropdownSkeleton
          label="Filter Tags"
          size="sm:min-w-36 max-[639px]:w-full"
        />
        <DropdownSkeleton
          label="Filter Scores"
          size="sm:min-w-36 max-[639px]:w-full"
        />
      </div>
      <p className="text-xs font-medium md:text-start text-center text-neutral-400 mb-6">
        Note: Select the same filter value to cancel
      </p>
      <hr className="h-0.5 bg-neutral-800" />

      <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="relative group min-[400px]:mb-10 mb-6">
            <Skeleton className="aspect-[3/4] rounded-md" />

            <Skeleton className="mt-3 mb-0.5 w-full min-[400px]:h-3.5 h-3" />
            <Skeleton className="min-[400px]:mt-3 mt-2.5 w-full min-[400px]:h-4 h-3" />

            <Skeleton className="min-[400px]:w-20 w-14 min-[400px]:h-3 h-2.5 min-[400px]:mt-2.5 mt-2" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default PDContainerSkeleton;
