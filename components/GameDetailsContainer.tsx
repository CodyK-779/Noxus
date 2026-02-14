import {
  getGameAchievements,
  getGameAddons,
  getGameDetails,
  getGameScreenShots,
  getGameTrailers,
} from "@/actions/games-action";
import GameBanner from "./GameBanner";
import GameNavigation from "./GameNavigation";
import MBGameTitle from "./MBGameTitle";
import GameTabs from "./GameTabs";

interface Props {
  params: Promise<{ slug: string }>;
}

const GameDetailsContainer = async ({ params }: Props) => {
  const gameSlug = (await params).slug;
  const [game, screenshots, trailers, achievements, adds] = await Promise.all([
    getGameDetails(gameSlug),
    getGameScreenShots(gameSlug),
    getGameTrailers(gameSlug),
    getGameAchievements(gameSlug),
    getGameAddons(gameSlug),
  ]);

  return (
    <>
      <GameBanner game={game} />
      <GameNavigation name={game.name} />
      <MBGameTitle game={game} />
      <GameTabs screenshots={screenshots} trailers={trailers} />
    </>
  );
};

export default GameDetailsContainer;
