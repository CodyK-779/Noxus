import { getHighRatedGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import PageHeaders from "./PageHeaders";
import { getParentPlatforms } from "@/actions/platforms-action";
import { HRGamesGrid } from "./HRGamesGrid";
import PlatformFilter from "./dropdowns/PlatformFilter";
import { PaginationCtrl } from "./PaginationCtrl";
import GenreFilter from "./dropdowns/GenreFilter";
import TagFilter from "./dropdowns/TagFilter";
import DateFilter from "./dropdowns/DateFilter";
import { HRSearches } from "@/app/(root)/discover/high-ratings/page";
import GamesCount from "./GamesCount";

interface Props {
  header: string;
  desc: string;
  searchParams: Promise<HRSearches>;
}

const HRPageContainer = async ({ header, desc, searchParams }: Props) => {
  const dates = (await searchParams).date || "";
  const platformId = (await searchParams).platform || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const currentPage = (await searchParams).page || "1";
  const [games, user, platforms] = await Promise.all([
    getHighRatedGames(dates, platformId, genreId, tagId, currentPage),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageHeaders header={header} desc={desc} />
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-6 mb-8">
        <DateFilter />
        <PlatformFilter platforms={platforms} />
        <GenreFilter />
        <TagFilter />
      </div>

      <hr />

      <GamesCount count={games.count} />

      <HRGamesGrid games={games} wishlistItems={wishlistItems} />

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

export default HRPageContainer;
