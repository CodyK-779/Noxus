import { getUpcomingGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import UpcomingContainer from "./UpcomingContainer";

const UpcomingGameWrapper = async () => {
  const [user, upcomingGames] = await Promise.all([
    getUser(),
    getUpcomingGames(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <UpcomingContainer games={upcomingGames} wishlistItems={wishlistItems} />
  );
};

export default UpcomingGameWrapper;
