import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { platformIcons, platformIconByKey } from "@/utils/utils";
import { Bookmark } from "lucide-react";
import { RAWGResponse } from "@/utils/interfaceTypes";

interface Props {
  games: RAWGResponse<GamesType>;
}

const UpcomingGamesGrid = ({ games }: Props) => {
  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
      {games.results.map((game) => (
        <div key={game.id} className="relative group min-[400px]:mb-10 mb-4">
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

          <p className="mt-2 mb-0.5 font-medium sm:text-sm min-[400px]:text-xs min-[350px]:text-[11px] text-[10px] text-neutral-400">
            Available in{" "}
            {new Date(game.released).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p className="lg:text-base min-[350px]:text-sm text-[13px] font-bold">
            {game.name}
          </p>
          {game.platforms && (
            <div className="flex items-center gap-1 mt-1">
              {platformIcons(game.platforms).map((p) => (
                <div key={p}>{platformIconByKey(p)}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default UpcomingGamesGrid;
