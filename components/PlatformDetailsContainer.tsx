import { getPlatformGames } from "@/actions/games-action";
import { getPlatformDetails } from "@/actions/platforms-action";
import TextExtender from "@/utils/TextExtender";
import PlatformFilters from "./PlatformFilters";
import Image from "next/image";
import PlatformDetailGames from "./PlatformDetailGames";
import { getUser } from "@/actions/user-action";

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
    <div className="max-container mt-24">
      <h1 className="text-5xl font-bold mb-4">Games for {platform.name}</h1>
      {platform.description && (
        <TextExtender description={platform.description} />
      )}
      <PlatformFilters />
      <PlatformDetailGames
        platformId={platformId}
        games={games}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default PlatformDetailsContainer;
