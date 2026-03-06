import { Gamepad2 } from "lucide-react";
import FreeGamesSwiper from "../FreeGamesSwiper";
import FreeGamesImgSkeleton from "./FreeGamesImgSkeleton";
import { Skeleton } from "../ui/skeleton";
import MBFreeGamesSwiper from "../MBFreeGamesSwiper";

const FreeGamesSkeleton = () => {
  const valorant =
    "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.";

  const wuwa =
    "Wuthering Waves is a story-rich open-world action RPG with a high degree of freedom. You wake from your slumber as Rover, joined by a vibrant cast of Resonators on a journey to reclaim your lost memories and surmount the Lament.";

  return (
    <main className="md:mt-20 min-[425px]:mt-16 min-[350px]:mt-14 mt-12">
      <FreeGamesImgSkeleton
        image="/free_games/valorant.jpg"
        title="Valorant"
        desc={valorant}
        slug="valorant"
      />
      <FreeGamesSwiper />
      <MBFreeGamesSwiper />
      <FreeGamesImgSkeleton
        image="/free_games/wuwa.webp"
        title="Wuthering Waves"
        desc={wuwa}
        slug="wuthering-waves"
      />

      <section className="mt-20">
        <div className="flex items-center gap-3.5">
          <Gamepad2 className="sm:size-8 min-[400px]:size-7 size-6 text-[#e91e3f]" />
          <h2 className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Free to play games
          </h2>
        </div>

        <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 sm:mt-14 min-[400px]:mt-12 mt-10">
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
    </main>
  );
};

export default FreeGamesSkeleton;
