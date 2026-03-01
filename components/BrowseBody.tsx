import BrowseGames from "./BrowseGames";
import { WishlistItemType } from "./utils/interfaceTypes";

interface Props {
  search: string;
  wishlistItems: WishlistItemType[] | undefined;
}

const BrowseBody = ({ search, wishlistItems }: Props) => {
  return (
    <section className="max-container grid grid-cols-5 sm:gap-5 min-[400px]:gap-4 gap-3 mt-4">
      <BrowseGames search={search} wishlistItems={wishlistItems} />
    </section>
  );
};

export default BrowseBody;
