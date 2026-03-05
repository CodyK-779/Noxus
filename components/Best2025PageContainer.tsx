import { getBOTY2025 } from "@/actions/games-action";
import { getParentPlatforms } from "@/actions/platforms-action";
import { getUser } from "@/actions/user-action";
import { Best2025Search } from "@/app/(root)/discover/best_2025/page";
import PageNavigation from "./PageNavigation";
import PageHeaders from "./PageHeaders";
import PlatformFilter from "./dropdowns/PlatformFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import TagFilter from "./dropdowns/TagFilter";
import GamesCount from "./GamesCount";
import NewGamesGrid from "./NewGamesGrid";
import { PaginationCtrl } from "./PaginationCtrl";

interface Props {
  header: string;
  desc: string;
  searchParams: Promise<Best2025Search>;
}

const Best2025PageContainer = async ({ header, desc, searchParams }: Props) => {
  const currentPage = (await searchParams).page || "1";
  const platformId = (await searchParams).platform || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const score = (await searchParams).metascore || "";
  const [games, user, platforms] = await Promise.all([
    getBOTY2025(currentPage, platformId, genreId, tagId, score),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageNavigation path="Best of 2025" />
      <PageHeaders header={header} desc={desc} />
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-6 min-[375px]:mb-8 mb-6">
        <PlatformFilter platforms={platforms} />
        <GenreFilter />
        <TagFilter />
      </div>

      <hr />

      <GamesCount count={games.count} />

      <NewGamesGrid games={games} wishlistItems={wishlistItems} bo2025 />

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

export default Best2025PageContainer;
