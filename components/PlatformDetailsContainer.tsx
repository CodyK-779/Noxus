import { getPlatformGames } from "@/actions/games-action";
import { getPlatformDetails } from "@/actions/platforms-action";
import PlatformPageFilters from "./PlatformPageFilters";
import { getUser } from "@/actions/user-action";
import { PaginationCtrl } from "./PaginationCtrl";
import GamesCount from "./GamesCount";
import PlatformDetailsNavigation from "./PlatformDetailsNavigation";
import GamesGrid from "./GamesGrid";

interface Props {
  params: Promise<{ id: number }>;
  searchParams: Promise<{
    date: string;
    genre: string;
    tag: string;
    metascore: string;
    page: string;
  }>;
}

const PlatformDetailsContainer = async ({ params, searchParams }: Props) => {
  const platformId = (await params).id;
  const dates = (await searchParams).date || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const score = (await searchParams).metascore || "";
  const currentPage = (await searchParams).page || "1";
  const [platform, games, user] = await Promise.all([
    getPlatformDetails(platformId),
    getPlatformGames(platformId, dates, genreId, tagId, score, currentPage),
    getUser(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <section className="max-container mt-24">
      <PlatformDetailsNavigation path={platform.name} />
      <h1 className="md:text-5xl sm:text-4xl min-[400px]:text-3xl text-2xl font-bold my-6 text-[#e91e3f]">
        Games for {platform.name}
      </h1>
      <PlatformPageFilters />

      <hr className="mt-8" />

      <GamesCount count={games.count} />

      <GamesGrid
        games={games}
        wishlistItems={wishlistItems}
        path={`/discover/platforms/${platformId}`}
      />

      {games.count > 40 && (
        <PaginationCtrl
          page={Number(currentPage)}
          pageSize={40}
          totalCount={games.count}
        />
      )}
    </section>
  );
};

export default PlatformDetailsContainer;
