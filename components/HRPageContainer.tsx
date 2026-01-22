import { getHighRatedGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import PageHeaders from "./PageHeaders";
import { getParentPlatforms } from "@/actions/platforms-action";
import { HRGamesGrid } from "./HRGamesGrid";

interface Props {
  header: string;
  desc: string;
}

const HRPageContainer = async ({ header, desc }: Props) => {
  const [games, user, platforms] = await Promise.all([
    getHighRatedGames(),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders header={header} desc={desc} />
      <HRGamesGrid games={games} wishlistItems={wishlistItems} />
    </main>
  );
};

export default HRPageContainer;
