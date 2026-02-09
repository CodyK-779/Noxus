import { getHighRatedGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import HeroSection from "./HeroSection";
import HighRatedContainer from "./HighRatedContainer";

const HeroAndHRGames = async () => {
  const [user, games] = await Promise.all([getUser(), getHighRatedGames()]);
  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <HeroSection wishlistItems={wishlistItems} />
      <HighRatedContainer games={games} wishlistItems={wishlistItems} />
    </>
  );
};

export default HeroAndHRGames;
