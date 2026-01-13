import { getPlatforms } from "@/actions/platforms-action";
import PlatformGrid from "@/components/PlatformGrid";

export default async function PlatformsPage() {
  const platforms = await getPlatforms();

  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <div className="flex flex-col items-center justify-center min-[450px]:mb-20 min-[350px]:mb-16 mb-14">
        <h1 className="lg:text-6xl md:text-5xl min-[450px]:text-4xl min-[350px]:text-3xl text-2xl font-extrabold text-[#e91e3f]">
          Explore Platforms
        </h1>
        <p className="md:text-lg min-[450px]:text-base min-[350px]:text-sm text-[13px] font-semibold min-[350px]:mt-2.5 mt-2 text-center text-neutral-300">
          Discover a massive library of games across {platforms.results.length}{" "}
          different gaming ecosystems.
        </p>
      </div>

      <PlatformGrid platforms={platforms} />
    </main>
  );
}
