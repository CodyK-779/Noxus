"use client";

import { GameScreenShots, GameTrailers } from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import GameCarousel from "./GameCarousel";

interface Props {
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

const GameOverview = ({ screenshots, trailers }: Props) => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
      <div className="col-span-2">
        <GameCarousel screenshots={screenshots} trailers={trailers} />
      </div>
    </div>
  );
};

export default GameOverview;
