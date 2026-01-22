import { GamesType } from "@/actions/games-action";
import { RAWGResponse, WishlistItemType } from "@/utils/interfaceTypes";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import {
  convertPlatformArray,
  platformIconByKey,
  platformIcons,
} from "@/utils/utils";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
  paginate: {
    start: number;
    end: number;
  };
}

const scoreColors = (score: number) => {
  if (score < 49) return "text-red-500";
  if (score < 74) return "text-yellow-500";
  return "text-green-500";
};

const HighRatedGames = ({ games, wishlistItems, paginate }: Props) => {
  return (
    <div className="hidden max-container min-[768px]:grid lg:grid-cols-5 grid-cols-4 gap-4">
      {games.results.slice(paginate.start, paginate.end).map((game) => (
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

          <WishlistButton
            position="top-2.5 right-2.5 group-hover:flex"
            size="size-4"
            gameId={game.id}
            name={game.name}
            image={game.background_image}
            slug={game.slug}
            rating={game.rating}
            createdAt={game.released.toString()}
            platforms={convertPlatformArray(game.platforms)}
            wishlistItems={wishlistItems}
            hidden="hidden"
            path="/"
          />

          <div className="flex items-center justify-between mt-2 mb-0.5">
            <p className="font-medium lg:text-sm text-xs text-neutral-400">
              {new Date(game.released).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </p>
            {game.metacritic && (
              <p
                className={`${scoreColors(game.metacritic)} min-[400px]:text-sm text-[13px] font-semibold`}
              >
                {game.metacritic}
              </p>
            )}
          </div>

          <p className="lg:text-base text-sm font-bold">{game.name}</p>
          {game.platforms && (
            <div className="flex items-center gap-1">
              {platformIcons(game.platforms).map((p) => (
                <div key={p}>{platformIconByKey(p)}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HighRatedGames;
