import { getHighRatedGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import PageHeaders from "./PageHeaders";
import { getParentPlatforms } from "@/actions/platforms-action";
import { HRGamesGrid } from "./HRGamesGrid";
import PlatformFilter from "./dropdowns/PlatformFilter";

interface Props {
  header: string;
  desc: string;
  searchParams: Promise<{ platform: string }>;
}

const HRPageContainer = async ({ header, desc, searchParams }: Props) => {
  const platformId = (await searchParams).platform || "";
  const [games, user, platforms] = await Promise.all([
    getHighRatedGames(platformId),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders header={header} desc={desc} />
      <div className="flex  mt-4">
        <PlatformFilter platforms={platforms} />
      </div>
      <HRGamesGrid games={games} wishlistItems={wishlistItems} />
    </main>
  );
};

export default HRPageContainer;
