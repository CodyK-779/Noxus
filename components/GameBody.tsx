"use client";

import { GameAchievements, GameDetails } from "@/actions/games-action";
import TextExtender from "./TextExtender";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { RAWGResponse } from "./utils/interfaceTypes";
import GameAchievementSection from "./GameAchievement";
import SystemRequirements from "./SystemRequirements";

interface Props {
  game: GameDetails;
  achievements: RAWGResponse<GameAchievements>;
}

interface DeveloperData {
  id: number;
  name: string;
  image: string;
  role: string;
}

const GameBody = ({ game, achievements }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const visibleTags =
    isMobile && !expanded ? game.tags.slice(0, 20) : game.tags;

  const remainingTags = game.tags.length - 20;

  const mergedData = useMemo(() => {
    const merged = new Map<string, DeveloperData>();

    if (game.developers.length > 0) {
      game.developers.forEach((d) => {
        merged.set(d.name, {
          id: d.id,
          name: d.name,
          image: d.image_background,
          role: "Developer",
        });
      });
    }

    if (game.publishers.length > 0) {
      game.publishers.forEach((p) => {
        if (merged.has(p.name)) {
          const existing = merged.get(p.name)!;

          merged.set(p.name, { ...existing, role: "Developer & Publisher" });
        } else {
          merged.set(p.name, {
            id: p.id,
            name: p.name,
            image: p.image_background,
            role: "Publisher",
          });
        }
      });
    }

    return Array.from(merged.values());
  }, [game.developers, game.publishers]);

  return (
    <>
      {/* Description */}
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-2">
        <span className="text-[#e91e3f]">▸</span> About This Game
      </h1>
      <TextExtender description={game.description} />

      <hr className="my-6" />

      {/* Genres */}
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-[18px]">
        <span className="text-[#e91e3f]">▸</span> Tags
      </h1>

      {game.tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag, index) => (
            <div
              key={index}
              className="font-medium sm:text-sm text-xs px-2 sm:py-0.5 py-1 rounded bg-neutral-800 text-white"
            >
              {tag.name}
            </div>
          ))}

          {isMobile && !expanded && remainingTags > 0 && (
            <button
              onClick={() => setExpanded(true)}
              className="font-medium text-xs px-2 py-1 rounded text-white bg-[#e91e3f] hover:bg-[#960f26] transition"
            >
              +{remainingTags} more
            </button>
          )}
        </div>
      ) : (
        <p className="text-sm text-neutral-400 italic">
          No tags available yet.
        </p>
      )}

      <hr className="mt-8 mb-6" />

      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-[18px]">
        <span className="text-[#e91e3f]">▸</span> Platforms
      </h1>

      {game.platforms ? (
        <div className="flex flex-wrap gap-2">
          {game.platforms.map((p) => (
            <div
              key={p.platform.id}
              className="font-medium sm:text-sm text-xs px-2 sm:py-0.5 py-1 rounded bg-neutral-800 text-white"
            >
              {p.platform.name}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-neutral-400 italic">
          No platforms available yet.
        </p>
      )}

      <hr className="mt-8 mb-6" />

      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-5">
        <span className="text-[#e91e3f]">▸</span> Developers and Publishers
      </h1>

      {mergedData.length > 0 ? (
        <div
          className={`grid ${mergedData.length > 2 ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : "md:grid-cols-2 grid-cols-1"} gap-3`}
        >
          {mergedData.map((data) => (
            <div
              key={data.id}
              className="group flex items-center md:gap-2.5 gap-3 lg:p-3 md:px-3 md:py-2 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
            >
              <div className="relative lg:size-11 md:size-10 min-[375px]:size-11 size-10 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 text-white font-semibold flex items-center justify-center">
                {data.image ? (
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-sm">
                    {data.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="flex flex-col min-[375px]:gap-0 gap-0.5 leading-tight">
                <p className="lg:text-sm md:text-xs min-[375px]:text-sm text-xs font-semibold text-white group-hover:text-[#e91e3f] transition-colors">
                  {data.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="lg:size-[5px] md:size-1 min-[375px]:size-[5px] size-1 rounded-full bg-[#e91e3f]" />
                  <p className="lg:text-xs md:text-[11px] min-[375px]:text-xs text-[11px] font-medium text-neutral-300">
                    {data.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-neutral-400 italic">
          No Developers & Publishers available yet.
        </p>
      )}

      {achievements.results.length > 0 && (
        <>
          <hr className="mt-10 mb-6" />
          <GameAchievementSection achievements={achievements} />
        </>
      )}

      <hr className="my-6" />

      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-6 underline underline-offset-8 decoration-[#e91e3f]">
        System Requirements
      </h1>

      <SystemRequirements platforms={game.platforms} />
    </>
  );
};

export default GameBody;
