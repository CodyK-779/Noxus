import {
  getGameDetails,
  getGameScreenShots,
  getGameTrailers,
} from "@/actions/games-action";
import GameBanner from "./GameBanner";
import { Deepseek } from "./Deepseek";
import Gemini from "./Gemini";
import GPT from "./GPT";
import GameNavigation from "./GameNavigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const GameDetailsContainer = async ({ params }: Props) => {
  const gameSlug = (await params).slug;
  const [game, screenshots, trailers] = await Promise.all([
    getGameDetails(gameSlug),
    getGameScreenShots(gameSlug),
    getGameTrailers(gameSlug),
  ]);

  return (
    <>
      <GameBanner game={game} />
      <GameNavigation name={game.name} />
      {/* <Gemini game={game} screenshots={screenshots} trailers={trailers} /> */}
      {/* <Deepseek game={game} screenshots={screenshots} trailers={trailers} /> */}
      {/* <GPT game={game} screenshots={screenshots} trailers={trailers} /> */}
    </>
  );
};

export default GameDetailsContainer;
