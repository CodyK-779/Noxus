import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Bookmark } from "lucide-react";
import { gameRating, platformIconByKey, platformIcons } from "@/utils/utils";
import Link from "next/link";
import { RAWGResponse } from "@/utils/interfaceTypes";

interface Props {
  games: RAWGResponse<GamesType>;
}

const ratingBadge = (rating: number) => {
  if (rating < 3) return "bg-red-500";
  if (rating < 4) return "bg-orange-500";
  return "bg-green-500";
};

const NewGamesGrid = ({ games }: Props) => {
  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
      {games.results.map((game) => (
        <div key={game.id} className="relative group min-[400px]:mb-10 mb-4">
          <Link href={`/browse/${game.slug}`}>
            <div className="relative aspect-[3/4] rounded-md overflow-hidden">
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
              <div
                className={`absolute min-[400px]:top-2.5 min-[400px]:right-2.5 right-2 top-2 sm:hidden group-hover:flex flex items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer`}
              >
                <Bookmark className="min-[400px]:size-3.5 size-3" />
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
                  <p key={p}>{platformIconByKey(p)}</p>
                ))}
              </div>
            )}
            <div
              className={`min-[400px]:px-1.5 px-1 min-[400px]:py-0.5 py:[1.5px] rounded ${ratingBadge(
                game.rating
              )} text-white font-semibold min-[400px]:text-xs text-[10px]`}
            >
              {gameRating(game.rating)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NewGamesGrid;
