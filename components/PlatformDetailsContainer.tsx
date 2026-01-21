import { getPlatformGames } from "@/actions/games-action";
import { getPlatformDetails } from "@/actions/platforms-action";
import PlatformFilters from "./PlatformFilters";
import PlatformDetailGames from "./PlatformDetailGames";
import { getUser } from "@/actions/user-action";
import BackButton from "./BackButton";

interface Props {
  params: Promise<{ id: number }>;
  searchParams: Promise<{
    date: string;
    genre: string;
    tag: string;
    metascore: string;
  }>;
}

const PlatformDetailsContainer = async ({ params, searchParams }: Props) => {
  const platformId = (await params).id;
  const dates = (await searchParams).date || "";
  const genreId = (await searchParams).genre || "";
  const tagId = (await searchParams).tag || "";
  const score = (await searchParams).metascore || "";
  const [platform, games, user] = await Promise.all([
    getPlatformDetails(platformId),
    getPlatformGames(platformId, dates, genreId, tagId, score),
    getUser(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <section className="max-container mt-24">
      <BackButton path="/discover/platforms" />
      <h1 className="md:text-5xl sm:text-4xl min-[400px]:text-3xl text-2xl font-bold mb-4 mt-6 text-[#e91e3f]">
        Games for {platform.name}
      </h1>
      <PlatformFilters />
      <PlatformDetailGames
        platformId={platformId}
        games={games}
        wishlistItems={wishlistItems}
      />
    </section>
  );
};

export default PlatformDetailsContainer;
