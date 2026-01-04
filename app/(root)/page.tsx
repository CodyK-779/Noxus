import {
  getGameDetails,
  getHighRatedGames,
  getNewGames,
  getUpcomingGames,
} from "@/actions/games-action";
import { getGenres } from "@/actions/genres-action";
import { getUser } from "@/actions/user-action";
import GameGenresContainer from "@/components/GameGenresContainer";
import HeroSection from "@/components/HeroSection";
import NewReleasesContainer from "@/components/NewReleasesContainer";
import UpcomingContainer from "@/components/UpcomingContainer";
import Image from "next/image";

export default async function Home() {
  const user = await getUser();
  const newGames = await getNewGames();
  // const games = await getHighRatedGames();
  const game = await getGameDetails();
  const genres = await getGenres();
  const upcomingGames = await getUpcomingGames();
  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <HeroSection wishlistItems={wishlistItems} />
      <NewReleasesContainer newGames={newGames} />
      <GameGenresContainer genres={genres} />
      <UpcomingContainer games={upcomingGames} />
      {/* <ul className="flex flex-col gap-4">
        {games.results.map((game) => (
          <li key={game.id} className="flex flex-col gap-1">
            <div className="relative aspect-video size-40 rounded-md overflow-hidden">
              {game.background_image ? (
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
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
