import { getNewGames } from "@/actions/games-action";
import { getUser } from "@/actions/user-action";
import HeroSection from "./HeroSection";
import NewReleasesContainer from "./NewReleasesContainer";

const HeroAndNewReleases = async () => {
  const [user, newGames] = await Promise.all([getUser(), getNewGames()]);
  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <HeroSection wishlistItems={wishlistItems} />
      <NewReleasesContainer newGames={newGames} wishlistItems={wishlistItems} />
    </>
  );
};

export default HeroAndNewReleases;
