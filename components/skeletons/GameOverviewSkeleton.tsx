import GameBodySkeleton from "./GameBodySkeleton";
import GameCarouselSkeleton from "./GameCarouselSkeleton";
import GameInfoSkeleton from "./GameInfoSkeleton";

const GameOverviewSkeleton = () => {
  return (
    <div className="grid cm:grid-cols-3 grid-cols-1 cm:gap-4">
      <div className="col-span-2 order-2 cm:order-1">
        <GameCarouselSkeleton />
        <GameBodySkeleton />
      </div>
      <div className="col-span-1 order-1 cm:order-2">
        <GameInfoSkeleton />
      </div>
    </div>
  );
};

export default GameOverviewSkeleton;
