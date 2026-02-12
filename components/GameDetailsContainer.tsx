import {
  getGameAchievements,
  getGameAddons,
  getGameDetails,
  getGameScreenShots,
  getGameTrailers,
} from "@/actions/games-action";
import GameBanner from "./GameBanner";
import { Deepseek } from "./Deepseek";
import Gemini from "./Gemini";
import GPT from "./GPT";
import GameNavigation from "./GameNavigation";
import MBGameTitle from "./MBGameTitle";
import GameTabs from "./GameTabs";
import TabsCustomUnderlineDemo from "./shadcn-studio/tabs/tabs-26";

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
      <GameTabs />
      {/* <TabsCustomUnderlineDemo /> */}
    </>
  );
};

export default GameDetailsContainer;

{
  /* <Gemini game={game} screenshots={screenshots} trailers={trailers} /> */
}
{
  /* <Deepseek game={game} screenshots={screenshots} trailers={trailers} /> */
}
{
  /* <GPT game={game} screenshots={screenshots} trailers={trailers} /> */
}
