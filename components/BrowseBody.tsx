import BrowseGames from "./BrowseGames";
import { WishlistItemType } from "./utils/interfaceTypes";

interface Props {
  search: string;
  wishlistItems: WishlistItemType[] | undefined;
  count: number;
}

const BrowseBody = ({ search, wishlistItems, count }: Props) => {
  return (
    <section className="max-container grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 mt-10">
      <BrowseGames
        search={search}
        count={count}
        wishlistItems={wishlistItems}
      />
      <div className="col-span-1 border mt-6"></div>
    </section>
  );
};

export default BrowseBody;
