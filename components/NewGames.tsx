import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import {
  convertGenreArray,
  convertPlatformArray,
  gameRating,
  platformIconByKey,
  platformIcons,
} from "@/components/utils/utils";
import { PaginateType } from "@/components/utils/paginationInterface";
import WishlistButton from "./WishlistButton";
import {
  RAWGResponse,
  WishlistItemType,
} from "@/components/utils/interfaceTypes";

interface Props {
  paginate: PaginateType;
  newGames: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const scoreColors = (score: number) => {
  if (score < 3) return "text-red-500";
  if (score < 4) return "text-yellow-500";
  return "text-green-500";
};

const NewGames = ({ newGames, paginate, wishlistItems }: Props) => {
  return (
    <div className="hidden max-container min-[768px]:grid lg:grid-cols-5 grid-cols-4 gap-4">
      {newGames.results.slice(paginate.start, paginate.end).map((game) => (
        <div key={game.id} className="relative group">
          <Link href={`/browse/games/${game.slug}?from=Discover`}>
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
            genres={convertGenreArray(game.genres)}
            wishlistItems={wishlistItems}
            hidden="hidden"
            path="/"
          />

          <div className="flex items-center justify-between mt-2 mb-0.5">
            <p className="font-medium lg:text-sm text-xs text-neutral-400">
              {new Date(game.released).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p
              className={`${scoreColors(game.rating)} min-[400px]:text-sm text-[13px] font-bold`}
            >
              {gameRating(game.rating)}
            </p>
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

export default NewGames;
