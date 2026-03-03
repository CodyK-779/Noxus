import { ParentPlatforms } from "@/actions/platforms-action";
import BrowseFilter from "./BrowseFilter";
import BrowseGames from "./BrowseGames";
import { RAWGResponse, WishlistItemType } from "./utils/interfaceTypes";

interface Props {
  search: string;
  count: number;
  platforms: RAWGResponse<ParentPlatforms>;
  wishlistItems: WishlistItemType[] | undefined;
}

const BrowseBody = ({ search, wishlistItems, count, platforms }: Props) => {
  return (
    <section className="max-container lg:grid grid-cols-5 sm:gap-5 min-[400px]:gap-4 gap-3 mt-10">
      <BrowseGames
        initialSearch={search}
        count={count}
        wishlistItems={wishlistItems}
      />
      <BrowseFilter platforms={platforms} />
    </section>
  );
};

export default BrowseBody;
