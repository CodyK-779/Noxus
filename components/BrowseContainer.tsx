import { BrowseParams, BrowseSearch } from "@/app/(root)/browse/page";
import BrowseBanner from "@/components/BrowseBanner";
import BrowseBody from "./BrowseBody";
import { getUser } from "@/actions/user-action";
import BrowseFeatured from "./BrowseFeatured";
import { getGames } from "@/actions/games-action";
import { getParentPlatforms } from "@/actions/platforms-action";
import MBBrowseFilter from "./MBBrowseFilter";

interface Props {
  searchParams: Promise<BrowseSearch>;
  params: Promise<BrowseParams>;
}

const BrowseContainer = async ({ searchParams, params }: Props) => {
  const search = (await searchParams).search || "";
  const platformId = (await params).platform || "";
  const genreId = (await params).genre || "";
  const dates = (await params).date || "";
  const tagId = (await params).tag || "";
  const score = (await params).metascore || "";
  const [games, platforms, user] = await Promise.all([
    getGames(search, platformId, genreId, dates, tagId, score),
    getParentPlatforms(),
    getUser(),
  ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <BrowseBanner />
      <BrowseFeatured />
      <BrowseBody
        search={search}
        platforms={platforms}
        wishlistItems={wishlistItems}
        count={games.count}
      />
      <MBBrowseFilter platforms={platforms} />
    </>
  );
};

export default BrowseContainer;
