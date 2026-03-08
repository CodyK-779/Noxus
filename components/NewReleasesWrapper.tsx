import { getNewGames } from "@/actions/games-action";
import { UserType } from "./utils/interfaceTypes";
import NewReleasesContainer from "./NewReleasesContainer";

interface Props {
  userPromise: Promise<UserType | null | undefined>;
}

const NewReleasesWrapper = async ({ userPromise }: Props) => {
  const [newGames, user] = await Promise.all([getNewGames(), userPromise]);
  const wishlistItems = user?.wishlist?.items;

  return (
    <NewReleasesContainer newGames={newGames} wishlistItems={wishlistItems} />
  );
};

export default NewReleasesWrapper;
