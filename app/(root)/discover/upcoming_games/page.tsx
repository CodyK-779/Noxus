import { getUpcomingGames } from "@/actions/games-action";
import PageHeaders from "@/components/PageHeaders";
import UpcomingGamesGrid from "@/components/UpcomingGamesGrid";

export default async function UpcomingGamesPage() {
  const games = await getUpcomingGames();

  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <PageHeaders
        header="Discover Upcoming Games"
        desc="Check out upcoming games that will be released in the next 6 months."
      />
      <UpcomingGamesGrid games={games} />
    </main>
  );
}
