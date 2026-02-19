"use client";

import { GameDetails } from "@/actions/games-action";
import Image from "next/image";
import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { getStoreLogos, platformIconByKey, platformIcons } from "./utils/utils";
import { useEffect, useState } from "react";

interface Props {
  game: GameDetails;
}

const scoreColors = (score: number) => {
  if (score < 49) return "text-red-500";
  if (score < 74) return "text-yellow-500";
  return "text-green-500";
};

const formatWebsite = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const redirectDomains = (link: string) => {
  if (link === "store.steampowered.com" || "store.playstation.com") {
    return `https://${link}`;
  } else {
    return `https://www.${link}`;
  }
};

const GameInfo = ({ game }: Props) => {
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    setLargeScreen(false);

    const updateSize = () => {
      setLargeScreen(window.innerWidth >= 1024);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="md:pl-[18px] mb-8">
      <div className="relative hidden md:block aspect-video overflow-hidden rounded-lg">
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 0vw, (min-width: 641px) 33vw"
            className="object-cover"
          />
        ) : (
          <Image
            src="/no-image.jpg"
            alt="Image Placeholder"
            fill
            sizes="(max-width: 640px) 0vw, (min-width: 641px) 33vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="md:mt-8 mt-0 flex flex-col gap-4">
        {/* Metascore */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Metacrictic
          </p>
          {game.metacritic ? (
            <p
              className={`xl:text-base text-sm font-medium ${scoreColors(game.metacritic)}`}
            >
              {game.metacritic}
            </p>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Playtime */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Average Playtime
          </p>
          {game.playtime > 0 ? (
            <p className="xl:text-base text-sm font-medium">
              {game.playtime} hours
            </p>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Genre */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Genre
          </p>
          {game.genres.length > 0 ? (
            <div className="flex items-center flex-wrap gap-1 xl:text-base text-sm font-medium">
              {game.genres.map((g, index) => (
                <p key={g.name}>
                  {g.name}
                  {index < game.genres.length - 1 && <span>,</span>}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Developer */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Developer
          </p>
          {game.developers.length > 0 ? (
            <p className="xl:text-base text-sm xl:max-w-[70%] md:max-w-[50%] md:truncate font-medium">
              {game.developers[0].name}
            </p>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Publisher */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Publisher
          </p>
          {game.publishers.length > 0 ? (
            <p className="xl:text-base text-sm xl:max-w-[70%] md:max-w-[50%] md:truncate font-medium">
              {game.publishers[0].name}
            </p>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Release Date
          </p>
          <p className="xl:text-base text-sm font-medium">
            {new Date(game.released).toLocaleDateString("en-US", {
              month: largeScreen ? "long" : "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Platforms */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Platforms
          </p>
          {game.platforms.length > 0 ? (
            <div className="flex items-center gap-1">
              {platformIcons(game.platforms).map((p) => (
                <div key={p} className="lg:text-lg text-base">
                  {platformIconByKey(p)}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>

        {/* Website */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-600">
          <p className="xl:text-base text-sm font-medium text-neutral-400">
            Website
          </p>

          {game.website ? (
            <a
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-[50%] truncate xl:text-base text-sm font-medium transition hover:underline"
              title={game.website}
            >
              {formatWebsite(game.website)}
            </a>
          ) : (
            <p className="text-sm italic text-neutral-400">Unavailable</p>
          )}
        </div>
      </div>

      {/* Game Stores */}
      <div className="flex flex-col gap-8 mt-4">
        {game.stores.length > 0 && (
          <div className="flex flex-col">
            <p className="font-semibold mb-3">Available on:</p>
            <div
              className={`grid ${game.stores.length > 1 ? "xl:grid-cols-2 md:grid-cols-1 grid-cols-2" : "grid-cols-1"} gap-2`}
            >
              {game.stores.map((s) => {
                const logo = getStoreLogos(s.store.name);

                return (
                  <a
                    key={s.id}
                    href={redirectDomains(s.store.domain)}
                    className="group flex items-center gap-2.5 p-2.5 rounded-lg border bg-neutral-900/60 border-neutral-800  hover:bg-neutral-900 hover:border-[#e91e3f] transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
                  >
                    <div className="relative size-10 rounded-md overflow-hidden bg-white/90">
                      <Image
                        src={`/stores/${logo}`}
                        alt={s.store.name}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">{s.store.name}</p>
                      <div className="flex items-center gap-1 text-neutral-400 group-hover:text-[#e91e3f]">
                        <p className="text-xs">Visit store</p>
                        <ArrowRight className="size-3 mt-0.5 group-hover:translate-x-1 transition-transform duration-200 ease-in" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <Button
          size="lg"
          className="flex items-center gap-2 w-full font-semibold bg-[#e91e3f] hover:bg-[#960f26] text-white"
        >
          <Bookmark className="size-4" />
          Wishlist
        </Button>
      </div>
    </section>
  );
};

export default GameInfo;
