import { GameAchievements, GameDetails } from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import Image from "next/image";
import NoAchievements from "./NoAchievements";
import { Trophy } from "lucide-react";

interface Props {
  game: GameDetails;
  achievements: RAWGResponse<GameAchievements>;
}

const fixPercent = (percent: number) => {
  if (percent > 0) return percent.toFixed(0);
  else return percent.toFixed(1);
};

const GameAchievementsTab = ({ game, achievements }: Props) => {
  if (achievements.results.length === 0)
    return <NoAchievements name={game.name} />;

  return (
    <>
      {/* Header */}
      <div className="hidden md:flex w-full rounded-xl overflow-hidden">
        <div className="relative w-[40%] aspect-video">
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 0vw, (min-width: 641px) 33vw"
            className="object-cover"
          />
        </div>
        <div className="w-[60%] flex items-center pl-20 bg-neutral-900">
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-sm font-medium text-neutral-400">
              Available Achievements
            </p>
            <h2 className="lg:text-3xl text-2xl font-bold">
              {achievements.count} Achievements
            </h2>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-3 md:mt-16 mt-0 mb-8">
        <Trophy className="size-6 text-[#e91e3f]" />
        <h3 className="text-2xl font-bold">
          Achievements{" "}
          <span className="text-[22px]">({achievements.count})</span>
        </h3>
      </div>

      {/* Achievements */}
      {achievements.results.map((a) => (
        <div key={a.id}>
          <div className="flex items-center sm:gap-7 min-[375px]:gap-5 gap-4">
            <div className="relative md:size-28 sm:size-24 min-[375px]:size-20 size-16 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shrink-0">
              {a.image ? (
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                  <Trophy className="size-10 text-neutral-700" />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-bold md:text-lg min-[375px]:text-base text-sm">
                {a.name}
              </p>
              <p className="font-medium sm:block hidden text-base text-neutral-400">
                {a.description}
              </p>

              <p className="sm:mt-1.5 min-[375px]:mt-1 mt-0.5 font-medium md:text-base min-[375px]:text-sm text-xs text-neutral-400">
                {fixPercent(Number(a.percent))}% of players unlock
              </p>
            </div>
          </div>
          <p className="sm:hidden mt-2.5 font-medium md:text-base text-sm text-neutral-400">
            {a.description}
          </p>
          <hr className="sm:my-6 my-5" />
        </div>
      ))}
    </>
  );
};

export default GameAchievementsTab;
