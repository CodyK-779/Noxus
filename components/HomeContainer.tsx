import {
  getHighRatedGames,
  getNewGames,
  getUpcomingGames,
} from "@/actions/games-action";
import HeroSection from "./HeroSection";
import HighRatedContainer from "./HighRatedContainer";
import { getUser } from "@/actions/user-action";
import GameGenresContainer from "./GameGenresContainer";
import { getGenres } from "@/actions/genres-action";
import NewReleasesContainer from "./NewReleasesContainer";
import GamePlatformsContainer from "./GamePlatformsContainer";
import UpcomingContainer from "./UpcomingContainer";
import GameTagsContainer from "./GameTagsContainer";
import { getTags } from "@/actions/tags-action";

const HomeContainer = async () => {
  const [hrGames, genres, newGames, upcomingGames, tags, user] =
    await Promise.all([
      getHighRatedGames(),
      getGenres(),
      getNewGames(),
      getUpcomingGames(),
      getTags(),
      getUser(),
    ]);

  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <HeroSection wishlistItems={wishlistItems} />
      <HighRatedContainer games={hrGames} wishlistItems={wishlistItems} />
      <GameGenresContainer genres={genres} />
      <NewReleasesContainer newGames={newGames} wishlistItems={wishlistItems} />
      <GamePlatformsContainer />
      <UpcomingContainer games={upcomingGames} wishlistItems={wishlistItems} />
      <GameTagsContainer tags={tags} />
    </>
  );
};

export default HomeContainer;
