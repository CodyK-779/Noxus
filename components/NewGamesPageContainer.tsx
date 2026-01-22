import { getNewGames } from "@/actions/games-action";
import NewGamesGrid from "./NewGamesGrid";
import PageHeaders from "./PageHeaders";
import { getUser } from "@/actions/user-action";

const NewGamesPageContainer = async () => {
  const [newGames, user] = await Promise.all([getNewGames(), getUser()]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders
        header="Discover New Releases"
        desc="Check out newly released games in the last 30 days."
      />
      <NewGamesGrid games={newGames} wishlistItems={wishlistItems} />
    </main>
  );
};

export default NewGamesPageContainer;
