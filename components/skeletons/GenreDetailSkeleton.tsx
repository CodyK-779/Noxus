import { Gamepad2 } from "lucide-react";
import PageNavigation from "../PageNavigation";
import { Skeleton } from "../ui/skeleton";
import DropdownSkeleton from "./DropdownSkeleton";
import { Suspense } from "react";
import PageNavigationSkeleton from "./PageNavigationSkeleton";

const GenreDetailSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full sm:h-[300px] min-[425px]:h-[250px] min-[375px]:h-[225px] h-[200px] min-[400px]:mt-[71px] mt-[68px]" />
      <div className="max-container mt-8">
        <Suspense fallback={<PageNavigationSkeleton />}>
          <PageNavigation skeleton />
        </Suspense>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#e91e3f] md:text-3xl min-[400px]:text-2xl text-xl">
            ▸
          </span>
          <Skeleton className="w-56 h-7" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-[70px] h-2.5" />
        </div>
        <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 min-[375px]:mb-8 my-6">
          <DropdownSkeleton
            label="Filter Platform"
            size="sm:min-w-36 max-[639px]:w-full"
          />
          <DropdownSkeleton
            label="Release Dates"
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
        <hr />
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
      </div>
    </>
  );
};

export default GenreDetailSkeleton;
