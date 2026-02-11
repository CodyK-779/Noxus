import { getGenreDetails } from "@/actions/genres-action";
import GenreBanner from "./GenreBanner";
import GenreBody from "./GenreBody";
import { getUser } from "@/actions/user-action";
import { getParentPlatforms } from "@/actions/platforms-action";
import GenrePageFilters from "./GenrePageFilters";
import GamesCount from "./GamesCount";
import { getGenreGames } from "@/actions/games-action";
import GamesGrid from "./GamesGrid";
import { PaginationCtrl } from "./PaginationCtrl";
import { GenreSearchParams } from "@/app/(root)/discover/genre/[id]/page";

interface Props {
  params: Promise<{ id: number }>;
  searchParams: Promise<GenreSearchParams>;
}

const GenreDetailsContainer = async ({ params, searchParams }: Props) => {
  const genreId = (await params).id;
  const currentPage = (await searchParams).page || "1";
  const platformId = (await searchParams).platform || "";
  const dates = (await searchParams).date || "";
  const tagId = (await searchParams).tag || "";
  const score = (await searchParams).metascore || "";
  const [genre, games, user, platforms] = await Promise.all([
    getGenreDetails(genreId),
    getGenreGames(genreId, platformId, dates, tagId, score, currentPage),
    getUser(),
    getParentPlatforms(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <GenreBanner
        name={genre.name}
        image={genre.image_background}
        count={genre.games_count}
      />
      <GenreBody name={genre.name} desc={genre.description} />
      <GenrePageFilters platforms={platforms} />

      <div className="max-container">
        <GamesCount count={games.count} />
        <GamesGrid
          games={games}
          wishlistItems={wishlistItems}
          path={`/discover/genre/${genreId}`}
          from={genre.name}
        />
      </div>

      {games.count > 40 && (
        <PaginationCtrl
          page={Number(currentPage)}
          pageSize={40}
          totalCount={games.count}
        />
      )}
    </>
  );
};

export default GenreDetailsContainer;
