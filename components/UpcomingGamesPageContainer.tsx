import { getUpcomingGames } from "@/actions/games-action";
import PageHeaders from "./PageHeaders";
import UpcomingGamesGrid from "./UpcomingGamesGrid";
import { getUser } from "@/actions/user-action";
import { UpcomingSearches } from "@/app/(root)/discover/upcoming_games/page";
import { getParentPlatforms } from "@/actions/platforms-action";
import GenreFilter from "./dropdowns/GenreFilter";
import PlatformFilter from "./dropdowns/PlatformFilter";
import TagFilter from "./dropdowns/TagFilter";
import { PaginationCtrl } from "./PaginationCtrl";
import GamesCount from "./GamesCount";

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

      <GamesCount count={games.count} />

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
