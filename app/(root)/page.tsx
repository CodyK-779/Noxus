import { getGameDetails, getGames } from "@/actions/games-action";
import GameGenresContainer from "@/components/GameGenresContainer";
import GamePlatformsContainer from "@/components/GamePlatformsContainer";
import HeroAndNewReleases from "@/components/HeroAndNewReleases";
import HighRatedGamesWrapper from "@/components/HighRatedGamesWrapper";
import GameSkeletonContainer from "@/components/skeletons/GameSkeletonContainer";
import HeroAndNewSkeleton from "@/components/skeletons/HeroAndNewSkeleton";
import UpcomingGameWrapper from "@/components/UpcomingGameWrapper";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  // const game = await getGameDetails();
  // const games = await getGames();

  // console.log(game.id);

  return (
    <>
      <Suspense fallback={<HeroAndNewSkeleton />}>
        <HeroAndNewReleases />
      </Suspense>

      <GameGenresContainer />

      <Suspense
        fallback={<GameSkeletonContainer header="Discover Upcoming Games" />}
      >
        <UpcomingGameWrapper />
      </Suspense>

      <GamePlatformsContainer />

      <Suspense
        fallback={
          <GameSkeletonContainer header="Discover Highly Rated Games" />
        }
      >
        <HighRatedGamesWrapper />
      </Suspense>

      {/* <ul className="flex flex-col gap-4">
        {games.results.map((game) => (
          <li key={game.id} className="flex flex-col gap-1">
            <div className="relative w-full h-[725px] rounded-md overflow-hidden">
              {game.background_image ? (
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/image-placeholder.webp"
                  alt="Image placeholder"
                  fill
                  sizes="(max-width: 768px) 80vw"
                  className="object-cover"
                />
              )}
            </div>
            <p className="font-medium">{game.name}</p>
            <p className="font-medium">{game.metacritic}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
