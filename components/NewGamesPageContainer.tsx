import { getNewGames } from "@/actions/games-action";
import NewGamesGrid from "./NewGamesGrid";
import PageHeaders from "./PageHeaders";

const NewGamesPageContainer = async () => {
  const newGames = await getNewGames();

  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <PageHeaders
        header="Discover New Releases"
        desc="Check out newly released games in the last 30 days."
      />
      <NewGamesGrid games={newGames} />
    </main>
  );
};

export default NewGamesPageContainer;
