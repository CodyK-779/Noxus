import { GamePlatforms, GamesType } from "@/actions/games-action";
import { RAWGResponse } from "@/actions/genres-action";
import Image from "next/image";
import { PaginateType } from "./NewReleases";
import { Dispatch, SetStateAction } from "react";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Props {
  paginate: PaginateType;
  setPaginate: Dispatch<SetStateAction<PaginateType>>;
  newGames: RAWGResponse<GamesType>;
}

const getPlatformKey = (name: string) => {
  if (name.includes("PC")) return "pc";
  if (name.includes("PlayStation") || name.includes("PS")) return "playstation";
  if (name.includes("Nintendo")) return "nintendo";
  if (name.includes("Xbox")) return "xbox";
  if (name.includes("macOs") || name.includes("iOs")) return "ios";
  if (name.includes("Android")) return "android";
  if (name.includes("Game Boy")) return "gameboy";
  return null;
};

const platformIconByKey = (key: string | null) => {
  switch (key) {
    case "pc":
      return <i className="ri-windows-fill"></i>;
    case "playstation":
      return <i className="ri-playstation-line"></i>;
    case "nintendo":
      return <i className="ri-switch-line"></i>;
    case "xbox":
      return <i className="ri-xbox-fill"></i>;
    case "ios":
      return <i className="ri-apple-fill"></i>;
    case "android":
      return <i className="ri-android-fill"></i>;
    case "gameboy":
      return <i className="ri-gamepad-fill"></i>;
    default:
      return null;
  }
};

const platformIcons = (platform: GamePlatforms[]) => {
  const uniquePlatforms = Array.from(
    new Set(
      platform.map((p) => getPlatformKey(p.platform.name)).filter(Boolean)
    )
  );

  return uniquePlatforms;
};

const gameRating = (rating: number) => {
  if (rating < 1) {
    return rating.toFixed(0);
  }

  return rating.toFixed(1);
};

const ratingBadge = (rating: number) => {
  if (rating < 3) return "bg-red-500";
  if (rating < 4) return "bg-orange-500";
  return "bg-green-500";
};

const NewGames = ({ newGames, paginate, setPaginate }: Props) => {
  return (
    <div className="hidden max-container min-[768px]:grid lg:grid-cols-5 grid-cols-4 gap-4">
      {newGames.results.slice(paginate.start, paginate.end).map((game) => (
        <div key={game.id} className="relative group">
          <Link href={`/browse/${game.slug}`}>
            <div className="relative aspect-[3/4] rounded-md overflow-hidden ">
              {game.background_image ? (
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 80vw"
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/image-placeholder.webp"
                  alt="Image placeholder"
                  fill
                  sizes="(max-width: 768px) 80vw"
                  className="object-cover"
                />
              )}
            </div>
          </Link>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="absolute top-2.5 right-2.5 hidden group-hover:flex items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer">
                <Bookmark className="size-4" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">Add to Wishlist</p>
            </TooltipContent>
          </Tooltip>

          <p className="mt-2 mb-0.5 font-medium lg:text-sm text-xs text-neutral-400">
            {new Date(game.released).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </p>

          <p className="lg:text-base text-sm font-bold">{game.name}</p>
          <div className="flex items-center justify-between">
            {game.platforms && (
              <div className="flex items-center gap-1">
                {platformIcons(game.platforms).map((p) => (
                  <div key={p}>{platformIconByKey(p)}</div>
                ))}
              </div>
            )}
            <div
              className={`px-1.5 py-0.5 rounded ${ratingBadge(
                game.rating
              )} text-white font-semibold text-xs`}
            >
              {gameRating(game.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewGames;
