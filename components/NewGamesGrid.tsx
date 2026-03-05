import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import {
  convertGenreArray,
  convertPlatformArray,
  gameRating,
  platformIconByKey,
  platformIcons,
} from "@/components/utils/utils";
import Link from "next/link";
import {
  RAWGResponse,
  WishlistItemType,
} from "@/components/utils/interfaceTypes";
import WishlistButton from "./WishlistButton";
import EmptyResults from "./EmptyResults";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
  bo2025?: boolean;
}

const scoreColors = (score: number) => {
  if (score < 3) return "text-red-500";
  if (score < 4) return "text-yellow-500";
  return "text-green-500";
};

const NewGamesGrid = ({ games, wishlistItems, bo2025 }: Props) => {
  const revalidatePath = bo2025 ? "best_2025" : "new-releases";

  return (
    <>
      {games.count > 0 ? (
        <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
          {games.results.map((game) => (
            <div
              key={game.id}
              className="relative group min-[400px]:mb-10 mb-4"
            >
              <Link href={`/browse/games/${game.slug}?from=new-releases`}>
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

              <WishlistButton
                position="min-[400px]:top-2.5 min-[400px]:right-2.5 right-2 top-2 group-hover:flex"
                size="min-[400px]:size-3.5 size-3"
                wishlistItems={wishlistItems}
                gameId={game.id}
                name={game.name}
                slug={game.slug}
                image={game.background_image}
                rating={game.rating}
                platforms={convertPlatformArray(game.platforms)}
                genres={convertGenreArray(game.genres)}
                createdAt={String(game.released)}
                hidden="sm:hidden"
                path={`/discover/${revalidatePath}`}
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

              <p className="lg:text-base min-[350px]:text-sm text-xs font-bold">
                {game.name}
              </p>

              {game.platforms && (
                <div className="flex items-center gap-1 max-[350px]:mt-0.5">
                  {platformIcons(game.platforms).map((p) => (
                    <p key={p} className="max-[350px]:text-sm">
                      {platformIconByKey(p)}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      ) : (
        <EmptyResults />
      )}
    </>
  );
};

export default NewGamesGrid;
