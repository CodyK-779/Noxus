import { Skeleton } from "../ui/skeleton";

const PlatformsPageSkeleton = () => {
  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <div className="flex flex-col items-center justify-center min-[450px]:mb-20 min-[350px]:mb-16 mb-14">
        <h1 className="lg:text-6xl md:text-5xl min-[450px]:text-4xl min-[350px]:text-3xl text-2xl font-extrabold text-[#e91e3f]">
          Explore Platforms
        </h1>
        <p className="md:text-lg min-[450px]:text-base min-[350px]:text-sm text-[13px] font-semibold min-[350px]:mt-2.5 mt-2 text-center text-neutral-300">
          Discover a massive library of games across 50 different gaming
          ecosystems.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 min-[450px]:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square rounded-xl" />
        ))}
      </div>
    </main>
  );
};

export default PlatformsPageSkeleton;
