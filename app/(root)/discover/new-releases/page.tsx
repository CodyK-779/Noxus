import { getNewGames } from "@/actions/games-action";
import NewGamesGrid from "@/components/NewGamesGrid";

export default async function NewGamesPage() {
  const newGames = await getNewGames();

  return (
    <main className="max-container mt-32">
      <h1 className="md:text-4xl min-[400px]:text-3xl text-2xl font-bold">
        Discover New Releases
      </h1>
      <p className="md:text-lg min-[400px]:text-base text-sm font-medium mt-2 text-neutral-300">
        Check out newly released games in the last 30 days.
      </p>
      <NewGamesGrid games={newGames} />
    </main>
  );
}
