import { getUpcomingGames } from "@/actions/games-action";
import PageHeaders from "./PageHeaders";
import UpcomingGamesGrid from "./UpcomingGamesGrid";

const UpcomingGamesPageContainer = async () => {
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
};

export default UpcomingGamesPageContainer;
