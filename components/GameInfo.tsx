"use client";

import { GameDetails } from "@/actions/games-action";
import {
  ArrowRight,
  Award,
  Bookmark,
  Building2,
  Calendar,
  ChevronRight,
  Clock,
  ExternalLink,
  Gamepad2,
  Globe,
  Loader2,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  convertGenreArray,
  convertPlatformArray,
  getStoreLogos,
  platformIconByKey,
  platformIcons,
} from "./utils/utils";
import { Button } from "./ui/button";
import { WishlistItemType } from "./utils/interfaceTypes";
import { toggleWishList } from "@/actions/wishlist-action";
import { toast } from "sonner";
import { useSession } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

interface Props {
  game: GameDetails;
  wishlistItem: WishlistItemType[] | undefined;
}

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

const formatDate = (date: Date, detailed: boolean = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: detailed ? "long" : "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
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

const GameInfo = ({ game, wishlistItem }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [largeScreen, setLargeScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAllStores, setShowAllStores] = useState(false);
  const wishlisted =
    wishlistItem?.some((item) => item.gameId === game.id) || false;
  useEffect(() => {
    const updateSize = () => {
      setLargeScreen(window.innerWidth >= 1024);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleWishlist = async () => {
    if (!session) {
      return router.push("/signIn");
    }

    setLoading(true);

    try {
      const result = await toggleWishList(
        game.id,
        game.name,
        game.background_image,
        game.slug,
        String(game.released),
        game.rating,
        convertPlatformArray(game.platforms),
        convertGenreArray(game.genres),
        `/browse/games/${game.slug}?from=Discover`,
      );

      if (result?.success) {
        if (!wishlisted) toast.success("Game added to wishlist!");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const scoreDetails = getScoreDetails(game.metacritic);

  const gameStores = showAllStores ? game.stores : game.stores.slice(0, 4);

  return (
    <aside className="cm:pl-[18px] mb-8">
      {/* Game cover */}
      <div className="relative hidden cm:block aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 0vw, (min-width: 641px) 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-900">
            <Gamepad2 className="size-12 text-neutral-700" />
          </div>
        )}
      </div>

      {/* Info Cards */}
      <div className="space-y-3 cm:mt-7 mt-0">
        {/* Stat Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Quick Stats
          </h3>

          <div className="space-y-3">
            <InfoRow
              icon={<Award className="cm:size-4 min-[375px]:size-5 size-4" />}
              label="Metacritic"
            >
              {game.metacritic ? (
                <div
                  className={`px-2 py-1 rounded-lg text-xs font-bold ${scoreDetails.bg} ${scoreDetails.color}`}
                >
                  {game.metacritic}
                </div>
              ) : (
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
                  Unavailable
                </p>
              )}
            </InfoRow>

            <InfoRow
              icon={<Clock className="cm:size-4 min-[375px]:size-5 size-4" />}
              label="Avg. Playtime"
            >
              {game.playtime > 0 ? (
                <span className="xl:text-sm cm:text-xs text-sm font-medium text-white">
                  {game.playtime} {game.playtime === 1 ? "hour" : "hours"}
                </span>
              ) : (
                <p className="xl:text-sm cm:text-xs text-sm italic text-neutral-400">
                  Unavailable
                </p>
              )}
            </InfoRow>

            <InfoRow
              icon={
                <Calendar className="cm:size-4 min-[375px]:size-5 size-4" />
              }
              label="Released"
            >
              <span
                className="xl:text-sm cm:text-xs text-sm font-medium text-white"
                title={formatDate(game.released, true)}
              >
                {formatDate(game.released, largeScreen)}
              </span>
            </InfoRow>
          </div>
        </div>

        {/* Genre Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Genres
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {game.genres.length > 0 ? (
              game.genres.map((genre) => (
                <span
                  key={genre.name}
                  className="px-2.5 py-1 font-medium bg-nox rounded-md text-xs"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
                No genres listed
              </span>
            )}
          </div>
        </div>

        {/* Team Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Team
          </h3>

          <div className="xl:space-y-3 cm:space-y-4 space-y-3">
            <div className="team-container">
              <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
                <Users className="cm:size-4 min-[375px]:size-5 size-4 text-purple-500" />
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
                  Developer
                </p>
              </div>
              {game.developers.length > 0 ? (
                <p
                  className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium text-white truncate max-w-[180px]"
                  title={game.developers[0].name}
                >
                  {game.developers[0].name}
                </p>
              ) : (
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
                  Unavailable
                </p>
              )}
            </div>

            <div className="team-container">
              <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
                <Building2 className="cm:size-4 min-[375px]:size-5 size-4 text-blue-500" />
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
                  Publisher
                </p>
              </div>
              {game.developers.length > 0 ? (
                <p
                  className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium text-white truncate max-w-[180px]"
                  title={game.developers[0].name}
                >
                  {game.developers[0].name}
                </p>
              ) : (
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
                  Unavailable
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Platforms Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Platforms
          </h3>

          {game.platforms.length > 0 ? (
            <div className="flex items-center gap-2 flex-wrap">
              {platformIcons(game.platforms).map((platform, index) => (
                <div
                  key={`${platform}-${index}`}
                  className="p-2 bg-neutral-800/80 hover:bg-nox rounded-lg xl:text-lg cm:text-base min-[375px]:text-lg text-base text-neutral-300 hover:text-white transition-colors"
                >
                  {platformIconByKey(platform)}
                </div>
              ))}
            </div>
          ) : (
            <span className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
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
            className="flex items-center justify-between py-4 px-3 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 hover:border-nox/50 transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-neutral-800 rounded-lg">
                <Globe className="xl:size-[18px] cm:size-4 size-[18px] text-neutral-400 group-hover:text-nox" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-500">
                  Official Website
                </p>
                <p className="xl:text-sm cm:text-[13px] text-sm xl:max-w-[200px] cm:max-w-[160px] w-full font-medium truncate text-white group-hover:text-nox transition-colors">
                  {formatWebsite(game.website)}
                </p>
              </div>
            </div>
            <ExternalLink className="size-4 xl:block md:hidden block text-neutral-400 group-hover:text-nox transition-colors" />
          </a>
        )}
      </div>

      {game.stores.length > 0 && (
        <div className="space-y-3 mt-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-nox rounded-full" />
              Available on
            </p>
            <span className="text-xs px-2 py-1 font-medium bg-neutral-800 rounded-full text-neutral-400">
              {game.stores.length}{" "}
              {game.stores.length === 1 ? "store" : "stores"}
            </span>
          </div>

          <div
            className={`grid ${game.stores.length > 1 ? "xl:grid-cols-2 md:grid-cols-1 min-[375px]:grid-cols-2 grid-cols-1" : "grid-cols-1"} gap-2`}
          >
            {gameStores.map((s) => {
              const logo = getStoreLogos(s.store.name);

              return (
                <a
                  key={s.id}
                  href={redirectDomains(s.store.domain)}
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg border bg-neutral-900/60 border-neutral-800  hover:bg-neutral-900 hover:border-nox transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
                >
                  <div className="relative min-[406px]:size-10 min-[375px]:size-9 size-10 rounded-md overflow-hidden bg-white/90">
                    <Image
                      src={`/stores/${logo}`}
                      alt={s.store.name}
                      fill
                      sizes="80px"
                      className="object-contain rounded-lg p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium lg:text-sm cm:text-xs min-[406px]:text-sm text-xs">
                      {s.store.name}
                    </p>
                    <div className="flex items-center gap-1 text-neutral-400 group-hover:text-nox">
                      <p className="text-xs">Visit store</p>
                      <ArrowRight className="size-3 mt-0.5 group-hover:translate-x-1 transition-transform duration-200 ease-in" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Show More Stores Btn */}
          {game.stores.length > 4 && !showAllStores && (
            <button
              onClick={() => setShowAllStores(true)}
              className="w-full py-2.5 mt-2 text-sm text-neutral-400 hover:text-white bg-neutral-900/50 hover:bg-neutral-900 rounded-lg border border-neutral-800 transition-colors flex items-center justify-center gap-1.5 group"
            >
              <span className="font-medium">
                View {game.stores.length - 4} more{" "}
                {game.stores.length - 4 === 1 ? "store" : "stores"}
              </span>
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform mt-[3px]" />
            </button>
          )}
        </div>
      )}

      {/* Wishlist Btn */}
      <Button
        size="lg"
        disabled={loading}
        onClick={handleWishlist}
        className="flex items-center gap-2 w-full mt-6 font-semibold bg-gradient-to-r from-nox to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-nox/25 transition-all hover:scale-[1.02]"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <Bookmark className={`size-4 ${wishlisted && "fill-white"}`} />
            {wishlisted ? "Remove Wishlist" : "Add to Wishlist"}
          </>
        )}
      </Button>
    </aside>
  );
};

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
    <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
      <span className="text-nox">{icon}</span>
      <span className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
        {label}
      </span>
    </div>
    <div className="flex items-center">{children}</div>
  </div>
);

export default GameInfo;
