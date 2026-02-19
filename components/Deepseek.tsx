"use client";

import { GameDetails } from "@/actions/games-action";
import Image from "next/image";
import {
  ArrowRight,
  Bookmark,
  Globe,
  Calendar,
  Gamepad2,
  Users,
  Building2,
  Star,
  ExternalLink,
  ChevronRight,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "./ui/button";
import { getStoreLogos, platformIconByKey, platformIcons } from "./utils/utils";
import { useEffect, useState } from "react";

interface Props {
  game: GameDetails;
}

// Score colors with better visual indicators
const getScoreDetails = (score: number) => {
  if (!score || score === 0)
    return {
      color: "text-neutral-500",
      bg: "bg-neutral-500/10",
      label: "No score",
    };
  if (score < 50)
    return { color: "text-red-500", bg: "bg-red-500/10", label: "Mixed" };
  if (score < 75)
    return {
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      label: "Average",
    };
  return { color: "text-green-500", bg: "bg-green-500/10", label: "Great" };
};

// Format website URL
const formatWebsite = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace("www.", "");
  } catch {
    return url;
  }
};

// Format date nicely
const formatDate = (date: Date, detailed: boolean = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: detailed ? "long" : "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

// Get store redirect URL
const getStoreUrl = (domain: string) => {
  if (
    domain.includes("store.steampowered.com") ||
    domain.includes("store.playstation.com")
  ) {
    return `https://${domain}`;
  }
  return `https://www.${domain}`;
};

const redirectDomains = (link: string) => {
  if (link === "store.steampowered.com" || "store.playstation.com") {
    return `https://${link}`;
  } else {
    return `https://www.${link}`;
  }
};

const Deepseek = ({ game }: Props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showAllStores, setShowAllStores] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scoreDetails = getScoreDetails(game.metacritic);

  return (
    <aside className="md:pl-[18px] mb-8 space-y-6">
      {/* Game Image Card */}
      <div className="relative hidden md:block aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
        {game.background_image ? (
          <>
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              sizes="(max-width: 640px) 0vw, (min-width: 641px) 33vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-900">
            <Gamepad2 className="w-12 h-12 text-neutral-700" />
          </div>
        )}
      </div>

      {/* Info Cards */}
      <div className="space-y-3">
        {/* Quick Stats Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-4">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            Quick Stats
          </h3>

          <div className="space-y-3">
            {/* Metacritic */}
            <InfoRow icon={<Award className="w-4 h-4" />} label="Metacritic">
              {game.metacritic ? (
                <div
                  className={`px-2 py-1 rounded-lg text-sm font-bold ${scoreDetails.bg} ${scoreDetails.color}`}
                >
                  {game.metacritic}
                </div>
              ) : (
                <span className="text-sm italic text-neutral-600">
                  Unavailable
                </span>
              )}
            </InfoRow>

            {/* Playtime */}
            <InfoRow icon={<Clock className="w-4 h-4" />} label="Avg. Playtime">
              {game.playtime > 0 ? (
                <span className="text-sm font-medium text-white">
                  {game.playtime} {game.playtime === 1 ? "hour" : "hours"}
                </span>
              ) : (
                <span className="text-sm italic text-neutral-600">
                  Unavailable
                </span>
              )}
            </InfoRow>

            {/* Release Date */}
            <InfoRow icon={<Calendar className="w-4 h-4" />} label="Released">
              <span
                className="text-sm font-medium text-white"
                title={formatDate(game.released, true)}
              >
                {formatDate(game.released, isLargeScreen)}
              </span>
            </InfoRow>
          </div>
        </div>

        {/* Genres Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-4">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            Genres
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {game.genres.length > 0 ? (
              game.genres.map((genre) => (
                <span
                  key={genre.name}
                  className="px-2.5 py-1 bg-neutral-800/80 rounded-lg text-xs text-neutral-300 border border-neutral-700"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="text-sm italic text-neutral-600">
                No genres listed
              </span>
            )}
          </div>
        </div>

        {/* Developer & Publisher Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-4">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            Team
          </h3>

          <div className="space-y-3">
            {/* Developer */}
            <InfoRow
              icon={<Users className="w-4 h-4 text-purple-500" />}
              label="Developer"
            >
              {game.developers.length > 0 ? (
                <span
                  className="text-sm font-medium text-white truncate max-w-[180px]"
                  title={game.developers[0].name}
                >
                  {game.developers[0].name}
                </span>
              ) : (
                <span className="text-sm italic text-neutral-600">
                  Unavailable
                </span>
              )}
            </InfoRow>

            {/* Publisher */}
            <InfoRow
              icon={<Building2 className="w-4 h-4 text-blue-500" />}
              label="Publisher"
            >
              {game.publishers.length > 0 ? (
                <span
                  className="text-sm font-medium text-white truncate max-w-[180px]"
                  title={game.publishers[0].name}
                >
                  {game.publishers[0].name}
                </span>
              ) : (
                <span className="text-sm italic text-neutral-600">
                  Unavailable
                </span>
              )}
            </InfoRow>
          </div>
        </div>

        {/* Platforms Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Platforms
            </h3>
            <span className="text-xs px-2 py-0.5 bg-neutral-800 rounded-full text-neutral-400">
              {game.platforms.length}
            </span>
          </div>

          {game.platforms.length > 0 ? (
            <div className="flex items-center gap-2 flex-wrap">
              {platformIcons(game.platforms).map((platform, index) => (
                <div
                  key={`${platform}-${index}`}
                  className="p-2 bg-neutral-800/80 rounded-lg text-lg text-neutral-300 hover:text-[#e91e3f] hover:bg-neutral-800 transition-colors"
                >
                  {platformIconByKey(platform)}
                </div>
              ))}
            </div>
          ) : (
            <span className="text-sm italic text-neutral-600">
              No platforms listed
            </span>
          )}
        </div>

        {/* Website Card */}
        {game.website && (
          <a
            href={game.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 hover:border-[#e91e3f]/30 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-800 rounded-lg">
                <Globe className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Official Website
                </p>
                <p className="text-sm font-medium text-white group-hover:text-[#e91e3f] transition-colors">
                  {formatWebsite(game.website)}
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-[#e91e3f] transition-colors" />
          </a>
        )}
      </div>

      {/* Game Stores Section */}
      {game.stores.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-[#e91e3f] rounded-full" />
              Available on
            </p>
            <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">
              {game.stores.length}{" "}
              {game.stores.length === 1 ? "store" : "stores"}
            </span>
          </div>

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

          {/* Show More Button */}
          {game.stores.length > 4 && !showAllStores && (
            <button
              onClick={() => setShowAllStores(true)}
              className="w-full py-2.5 text-sm text-neutral-400 hover:text-white bg-neutral-900/50 hover:bg-neutral-900 rounded-xl border border-neutral-800 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>View {game.stores.length - 4} more stores</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        size="lg"
        className="w-full font-semibold bg-gradient-to-r from-[#e91e3f] to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-[#e91e3f]/25 transition-all hover:scale-[1.02]"
      >
        <Bookmark className="size-4 mr-2" />
        Add to Wishlist
      </Button>
    </aside>
  );
};

// Reusable InfoRow component
const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-neutral-400">
      <span className="text-[#e91e3f]">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </div>
    <div className="flex items-center">{children}</div>
  </div>
);

export default Deepseek;
