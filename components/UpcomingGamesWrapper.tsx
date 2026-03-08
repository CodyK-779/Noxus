import { getUpcomingGames } from "@/actions/games-action";
import { UserType } from "./utils/interfaceTypes";
import UpcomingContainer from "./UpcomingContainer";

interface Props {
  userPromise: Promise<UserType | null | undefined>;
}

const UpcomingGamesWrapper = async ({ userPromise }: Props) => {
  const [games, user] = await Promise.all([getUpcomingGames(), userPromise]);
  const wishlistItems = user?.wishlist?.items;

  return <UpcomingContainer games={games} wishlistItems={wishlistItems} />;
};

export default UpcomingGamesWrapper;
