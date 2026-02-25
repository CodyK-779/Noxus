import { Skeleton } from "../ui/skeleton";

const StoresPageSkeleton = () => {
  return (
    <main className="max-container mt-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 min-[375px]:h-16 h-14 bg-[#e91e3f] rounded-full" />
        <div>
          <h1 className="md:text-5xl min-[375px]:text-4xl text-3xl font-bold">
            Game <span className="text-[#e91e3f]">Stores</span>
          </h1>
          <p className="text-neutral-400 min-[375px]:text-sm text-xs mt-1">
            Discover where to buy your favorite games
          </p>
        </div>
      </div>

      {/* Total Stores */}
      <div className="flex items-center gap-3 mt-10">
        <h3 className="text-xl font-bold flex items-center gap-2">
          Total Stores
          <Skeleton className="h-5 w-8" />
        </h3>
      </div>

      <hr className="my-4 border-neutral-800" />

      {/* Stores Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-56 rounded-2xl" />
        ))}
      </div>
    </main>
  );
};

export default StoresPageSkeleton;
