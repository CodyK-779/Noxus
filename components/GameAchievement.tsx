"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import { RAWGResponse } from "./utils/interfaceTypes";
import { GameAchievements } from "@/actions/games-action";
import { getRarityDetails } from "./utils/utils";
import { TabsList, TabsTrigger } from "./ui/tabs";

interface Props {
  achievements: RAWGResponse<GameAchievements>;
}

export default function GameAchievementSection({ achievements }: Props) {
  const [paginate, setPaginate] = useState({ start: 0, end: 4 });

  useEffect(() => {
    const updatePaginate = () => {
      const lg = window.innerWidth >= 1024;
      const md = window.innerWidth >= 768;
      const sm = window.innerWidth >= 400;

      if (lg)
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 10 }));
      else if (md)
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 8 }));
      else if (sm)
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 6 }));
      else setPaginate((prev) => ({ start: prev.start, end: prev.start + 6 }));
    };

    updatePaginate();

    window.addEventListener("resize", updatePaginate);

    return () => window.removeEventListener("resize", updatePaginate);
  }, []);

  const stats = useMemo(() => {
    if (!achievements.results.length) return null;

    const percentages = achievements.results.map((a) => Number(a.percent));
    const average = percentages.reduce((a, b) => a + b, 0) / percentages.length;
    const rarest = Math.min(...percentages);
    const mostCommon = Math.max(...percentages);
    const rarestAchievement = achievements.results.find(
      (a) => Number(a.percent) === rarest,
    );
    const mostCommonAchievement = achievements.results.find(
      (a) => Number(a.percent) === mostCommon,
    );

    return {
      total: achievements.count,
      average: average.toFixed(1),
      rarest: {
        name: rarestAchievement?.name,
        percent: rarest.toFixed(1),
      },
      mostCommon: {
        name: mostCommonAchievement?.name,
        percent: mostCommon.toFixed(1),
      },
    };
  }, [achievements]);

  return (
    <>
      {/* Header with stats */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold">
          <span className="text-[#e91e3f]">▸</span> Achievements
        </h1>

        {stats && (
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded-lg border border-neutral-800">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-neutral-300">
                {stats.average}% avg. unlock
              </span>
            </div>
            <div className="h-4 w-px bg-neutral-800" />
            <div className="text-neutral-400">
              <span className="text-yellow-400 font-medium">
                {stats.rarest.percent}%
              </span>{" "}
              rarest
            </div>
          </div>
        )}
      </div>
      {/* Achievements Grid */}
      <div className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {achievements.results
          .slice(paginate.start, paginate.end)
          .map((achievement) => {
            const percent = Number(achievement.percent);
            const rarity = getRarityDetails(percent);

            return (
              <div
                key={achievement.id}
                className="group relative cursor-pointer"
              >
                {/* Achievement Card */}
                <div className="relative aspect-square rounded-md overflow-hidden bg-neutral-900  transition-all duration-300">
                  <Image
                    src={achievement.image}
                    alt={achievement.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Rarity Badge */}
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full  ${rarity.bgColor} ${rarity.color} border ${rarity.borderColor} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}
                  >
                    {rarity.icon}
                    <p className="text-xs font-medium">{rarity.label}</p>
                  </div>

                  {/* Percentage Circle */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 flex items-center justify-center">
                    <div className="relative w-8 h-8">
                      <svg className="w-8 h-8 transform -rotate-90">
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          fill="none"
                          stroke="#262626"
                          strokeWidth="2"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          fill="none"
                          stroke={rarity.barColor.replace("bg-", "")}
                          strokeWidth="2"
                          strokeDasharray={`${2 * Math.PI * 14}`}
                          strokeDashoffset={`${2 * Math.PI * 14 * (1 - percent / 100)}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                        {percent.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement Info */}
                <div className="mt-3">
                  <h3 className="font-medium text-sm truncate group-hover:text-[#e91e3f] transition-colors">
                    {achievement.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 mt-0.5">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <TabsList className="bg-transparent p-0 h-auto border-0 mt-10">
        <TabsTrigger value="achievements" className="p-0">
          <div className="flex items-center min-[375px]:gap-2 gap-1.5 group hover:text-[#e91e3f] transition-colors">
            <p className="min-[375px]:text-base text-sm">
              Show all {achievements.count} achievements
            </p>
            <ArrowRight className="min-[375px]:size-5 size-4 mt-[3px] group-hover:translate-x-1 transition-transform" />
          </div>
        </TabsTrigger>
      </TabsList>
    </>
  );
}
