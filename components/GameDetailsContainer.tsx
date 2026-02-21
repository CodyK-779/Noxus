import {
  getGameAchievements,
  getGameDetails,
  getGameScreenShots,
  getGameTrailers,
} from "@/actions/games-action";
import GameBanner from "./GameBanner";
import GameNavigation from "./GameNavigation";
import MBGameTitle from "./MBGameTitle";
import GameTabs from "./GameTabs";
import { getUser } from "@/actions/user-action";

interface Props {
  params: Promise<{ slug: string }>;
}

const GameDetailsContainer = async ({ params }: Props) => {
  const gameSlug = (await params).slug;
  const [game, screenshots, trailers, achievements, user] = await Promise.all([
    getGameDetails(gameSlug),
    getGameScreenShots(gameSlug),
    getGameTrailers(gameSlug),
    getGameAchievements(gameSlug),
    getUser(),
  ]);

  const wishlistItem = user?.wishlist?.items;

  return (
    <>
      <GameBanner game={game} />
      <GameNavigation name={game.name} />
      <MBGameTitle game={game} />
      <GameTabs
        game={game}
        screenshots={screenshots}
        trailers={trailers}
        achievements={achievements}
        wishlistItem={wishlistItem}
      />
    </>
  );
};

export default GameDetailsContainer;
