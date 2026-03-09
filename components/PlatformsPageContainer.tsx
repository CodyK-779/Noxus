import { getPlatforms } from "@/actions/platforms-action";
import PlatformGrid from "./PlatformGrid";

const PlatformsPageContainer = async () => {
  const platforms = await getPlatforms();

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <div className="flex flex-col items-center justify-center min-[450px]:mb-20 min-[350px]:mb-16 mb-14">
        <h1 className="lg:text-6xl md:text-5xl min-[450px]:text-4xl min-[350px]:text-3xl text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Explore
          </span>{" "}
          <span className="text-nox">Platforms</span>
        </h1>
        <p className="md:text-lg min-[450px]:text-base min-[350px]:text-sm text-[13px] font-semibold min-[350px]:mt-2.5 mt-2 text-center text-neutral-300">
          Discover a massive library of games across {platforms.results.length}{" "}
          different gaming ecosystems.
        </p>
      </div>

      <PlatformGrid platforms={platforms} />
    </main>
  );
};

export default PlatformsPageContainer;
