import { getNewGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import NewReleasesContainer from "./NewReleasesContainer";

const NewGamesWrapper = async () => {
  const [user, newGames] = await Promise.all([getUser(), getNewGames()]);
  const wishlistItems = user?.wishlist?.items;

  return (
    <NewReleasesContainer newGames={newGames} wishlistItems={wishlistItems} />
  );
};

export default NewGamesWrapper;
