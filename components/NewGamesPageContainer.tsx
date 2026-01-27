import { getNewGames } from "@/actions/games-action";
import NewGamesGrid from "./NewGamesGrid";
import PageHeaders from "./PageHeaders";
import { getUser } from "@/actions/user-action";
import { getParentPlatforms } from "@/actions/platforms-action";
import PlatformFilter from "./dropdowns/PlatformFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import TagFilter from "./dropdowns/TagFilter";
import MetacriticFilter from "./MetacriticFilter";
import { PaginationCtrl } from "./PaginationCtrl";
import { NewGamesSearches } from "@/app/(root)/discover/new-releases/page";
import GamesCount from "./GamesCount";
import PageNavigation from "./PageNavigation";

interface Props {
  header: string;
  desc: string;
  searchParams: Promise<NewGamesSearches>;
}

const NewGamesPageContainer = async ({ header, desc, searchParams }: Props) => {
  const currentPage = (await searchParams).page || "1";
  const platformId = (await searchParams).platform || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const score = (await searchParams).metascore || "";
  const [newGames, user, platforms] = await Promise.all([
    getNewGames(currentPage, platformId, genreId, tagId, score),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageNavigation path="New-releases" />
      <PageHeaders header={header} desc={desc} />
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-6 mb-8">
        <PlatformFilter platforms={platforms} />
        <GenreFilter />
        <TagFilter />
        <MetacriticFilter />
      </div>

      <hr />

      <GamesCount count={newGames.count} />

      <NewGamesGrid games={newGames} wishlistItems={wishlistItems} />

      {newGames.count > 40 && (
        <PaginationCtrl
          page={Number(currentPage)}
          pageSize={40}
          totalCount={newGames.count}
        />
      )}
    </main>
  );
};

export default NewGamesPageContainer;
