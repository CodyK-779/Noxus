import { getHighRatedGames } from "@/actions/games-action";
import { UserType } from "./utils/interfaceTypes";
import HeroSection from "./HeroSection";
import HighRatedContainer from "./HighRatedContainer";

interface Props {
  userPromise: Promise<UserType | null | undefined>;
}

const HeroAndHRContainer = async ({ userPromise }: Props) => {
  const [games, user] = await Promise.all([getHighRatedGames(), userPromise]);
  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <HeroSection wishlistItems={wishlistItems} />
      <HighRatedContainer games={games} wishlistItems={wishlistItems} />
    </>
  );
};

export default HeroAndHRContainer;
