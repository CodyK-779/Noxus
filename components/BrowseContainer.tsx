import { BrowseSearch } from "@/app/(root)/browse/page";
import BrowseBanner from "@/components/BrowseBanner";
import BrowseBody from "./BrowseBody";
import { getUser } from "@/actions/user-action";
import BrowseFeatured from "./BrowseFeatured";
import { getGames } from "@/actions/games-action";

interface Props {
  searchParams: Promise<BrowseSearch>;
}

const BrowseContainer = async ({ searchParams }: Props) => {
  const search = (await searchParams).search || "";
  const [games, user] = await Promise.all([getGames(search), getUser()]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <BrowseBanner />
      <BrowseFeatured />
      <BrowseBody
        search={search}
        wishlistItems={wishlistItems}
        count={games.count}
      />
    </>
  );
};

export default BrowseContainer;
