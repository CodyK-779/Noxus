import { GamesType } from "@/actions/games-action";
import { RAWGResponse } from "@/actions/genres-action";
import Image from "next/image";
import Link from "next/link";
import {
  convertPlatformArray,
  gameRating,
  platformIconByKey,
  platformIcons,
} from "@/utils/utils";
import { PaginateType } from "@/utils/paginationInterface";
import WishlistButton from "./WishlistButton";
import { WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  paginate: PaginateType;
  newGames: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const ratingBadge = (rating: number) => {
  if (rating < 3) return "bg-red-500";
  if (rating < 4) return "bg-orange-500";
  return "bg-green-500";
};

const NewGames = ({ newGames, paginate, wishlistItems }: Props) => {
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

          <WishlistButton
            position="top-2.5 right-2.5 hidden group-hover:flex"
            size="size-4"
            gameId={game.id}
            name={game.name}
            image={game.background_image}
            slug={game.slug}
            rating={game.rating}
            createdAt={game.released.toString()}
            platforms={convertPlatformArray(game.platforms)}
            wishlistItems={wishlistItems}
          />

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
