import {
  getGames,
  getHighRatedGames,
  getNewGames,
} from "@/actions/games-action";
import { getGenres } from "@/actions/genres-action";
import GameGenresContainer from "@/components/GameGenresContainer";
import HeroSection from "@/components/HeroSection";
import NewReleasesContainer from "@/components/NewReleasesContainer";
import Image from "next/image";

export default async function Home() {
  const newGames = await getNewGames();
  // const games = await getHighRatedGames();
  const genres = await getGenres();

  return (
    <>
      <HeroSection />
      <NewReleasesContainer newGames={newGames} />
      <GameGenresContainer genres={genres} />
      {/* <ul className="flex flex-col gap-4">
        {games.results.map((game) => (
          <li className="flex flex-col gap-1">
            <div className="relative aspect-video size-40 rounded-md overflow-hidden">
              <Image
                src={game.background_image}
                alt={game.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium">{game.name}</p>
            <p className="font-medium">{game.metacritic}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
