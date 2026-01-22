import { getHighRatedGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import HighRatedContainer from "./HighRatedContainer";

const HighRatedGamesWrapper = async () => {
  const [user, games] = await Promise.all([getUser(), getHighRatedGames()]);

  const wishlistItems = user?.wishlist?.items;

  return <HighRatedContainer games={games} wishlistItems={wishlistItems} />;
};

export default HighRatedGamesWrapper;
