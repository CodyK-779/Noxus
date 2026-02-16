import {
  GameAchievements,
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import GameCarousel from "./GameCarousel";
import GameBody from "./GameBody";

interface Props {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
  achievements: RAWGResponse<GameAchievements>;
}

const GameOverview = ({ game, screenshots, trailers, achievements }: Props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <div className="col-span-2">
        <GameCarousel screenshots={screenshots} trailers={trailers} />
        <GameBody game={game} achievements={achievements} />
      </div>
    </div>
  );
};

export default GameOverview;
