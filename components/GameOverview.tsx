import {
  GameAchievements,
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import GameCarousel from "./GameCarousel";
import GameBody from "./GameBody";
import GameInfo from "./GameInfo";

interface Props {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
  achievements: RAWGResponse<GameAchievements>;
}

const GameOverview = ({ game, screenshots, trailers, achievements }: Props) => {
  return (
    <div className="grid cm:grid-cols-3 grid-cols-1 cm:gap-4">
      <div className="col-span-2 order-2 cm:order-1">
        <GameCarousel screenshots={screenshots} trailers={trailers} />
        <GameBody game={game} achievements={achievements} />
      </div>
      <div className="col-span-1 order-1 cm:order-2">
        <GameInfo game={game} />
      </div>
    </div>
  );
};

export default GameOverview;
