import { getUpcomingGames } from "@/actions/games-action";
import PageHeaders from "./PageHeaders";
import UpcomingGamesGrid from "./UpcomingGamesGrid";
import { getUser } from "@/actions/user-action";
import { UpcomingSearches } from "@/app/(root)/discover/upcoming_games/page";
import { getParentPlatforms } from "@/actions/platforms-action";
import GenreFilter from "./dropdowns/GenreFilter";
import PlatformFilter from "./dropdowns/PlatformFilter";
import TagFilter from "./dropdowns/TagFilter";
import { Gamepad2 } from "lucide-react";
import { PaginationCtrl } from "./PaginationCtrl";

interface Props {
  header: string;
  desc: string;
  searchParams: Promise<UpcomingSearches>;
}

const UpcomingGamesPageContainer = async ({
  header,
  desc,
  searchParams,
}: Props) => {
  const currentPage = (await searchParams).page || "1";
  const platformId = (await searchParams).platform || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const [games, user, platforms] = await Promise.all([
    getUpcomingGames(currentPage, platformId, genreId, tagId),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders header={header} desc={desc} />
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-6 mb-8">
        <PlatformFilter platforms={platforms} />
        <GenreFilter />
        <TagFilter />
      </div>
      <hr />
      <div className="flex items-center gap-3 mt-6">
        <div className="min-[400px]:p-2.5 p-2 rounded-lg bg-[#e91e3f]">
          <Gamepad2 className="size-5" />
        </div>
        <div>
          <h3 className="sm:text-lg min-[400px]:text-base text-sm font-bold text-white sm:-mb-0.5">
            {games.count.toLocaleString()} Games Found
          </h3>

          <p className="min-[400px]:text-sm text-xs text-gray-400">
            Browse through our collection
          </p>
        </div>
      </div>
      <UpcomingGamesGrid games={games} wishlistItems={wishlistItems} />
      {games.count > 40 && (
        <PaginationCtrl
          page={Number(currentPage)}
          pageSize={40}
          totalCount={games.count}
        />
      )}
    </main>
  );
};

export default UpcomingGamesPageContainer;
