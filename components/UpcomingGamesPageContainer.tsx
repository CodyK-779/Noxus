import { getUpcomingGames } from "@/actions/games-action";
import PageHeaders from "./PageHeaders";
import UpcomingGamesGrid from "./UpcomingGamesGrid";
import { getUser } from "@/actions/user-action";

const UpcomingGamesPageContainer = async () => {
  const [games, user] = await Promise.all([getUpcomingGames(), getUser()]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders
        header="Discover Upcoming Games"
        desc="Check out upcoming games that will be released in the next 6 months."
      />
      <UpcomingGamesGrid games={games} wishlistItems={wishlistItems} />
    </main>
  );
};

export default UpcomingGamesPageContainer;
