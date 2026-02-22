import { GamesType } from "@/actions/games-action";
import { PaginateType } from "@/components/utils/paginationInterface";
import Image from "next/image";
import Link from "next/link";
import {
  platformIcons,
  platformIconByKey,
  convertPlatformArray,
  convertGenreArray,
} from "@/components/utils/utils";
import {
  RAWGResponse,
  WishlistItemType,
} from "@/components/utils/interfaceTypes";
import WishlistButton from "./WishlistButton";

interface Props {
  paginate: PaginateType;
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const UpcomingGames = ({ paginate, games, wishlistItems }: Props) => {
  return (
    <div className="hidden max-container min-[768px]:grid lg:grid-cols-5 grid-cols-4 gap-4">
      {games.results.slice(paginate.start, paginate.end).map((game) => (
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

          <p className="mt-2 mb-0.5 font-medium lg:text-sm text-xs text-neutral-400">
            Available in{" "}
            {new Date(game.released).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p className="lg:text-base text-sm font-bold">{game.name}</p>
          {game.platforms && (
            <div className="flex items-center gap-1 mt-1">
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

export default UpcomingGames;
