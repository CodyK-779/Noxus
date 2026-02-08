import {
  getGameDetails,
  getGameScreenShots,
  getGameTrailers,
} from "@/actions/games-action";
import { Deepseek } from "@/components/Deepseek";

export default async function GameDetailsPage() {
  const game = await getGameDetails();
  const screenshots = await getGameScreenShots(3498);
  const trailers = await getGameTrailers(3498);

  // console.log(trailers.results[0].data.max);
  // console.log(game.developers);

  return (
    <div className="mt-20">
      <Deepseek game={game} screenshots={screenshots} trailers={trailers} />
    </div>
  );
}
