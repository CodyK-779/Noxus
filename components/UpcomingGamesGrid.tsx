import { GamesType } from "@/actions/games-action";
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
import EmptyResults from "./EmptyResults";
import { LucideGamepad2 } from "lucide-react";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const UpcomingGamesGrid = ({ games, wishlistItems }: Props) => {
  return (
    <>
      {games.count > 0 ? (
        <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
          {games.results.map((game) => (
            <div
              key={game.id}
              className="relative group min-[400px]:mb-10 mb-4"
            >
              <Link href={`/browse/games/${game.slug}?from=upcoming`}>
                <div className="relative aspect-[3/4] rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#e91e3f]/20">
                  {game.background_image ? (
                    <>
                      <Image
                        src={game.background_image}
                        alt={game.name}
                        fill
                        sizes="(max-width: 768px) 80vw"
                        className="object-cover"
                      />
                      <LucideGamepad2 className="sm:size-12 min-[425px]:size-16 min-[350px]:size-12 size-10 text-neutral-500" />
                    </>
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
                wishlistItems={wishlistItems}
                gameId={game.id}
                name={game.name}
                slug={game.slug}
                image={game.background_image}
                rating={game.rating}
                platforms={convertPlatformArray(game.platforms)}
                genres={convertGenreArray(game.genres)}
                createdAt={String(game.released)}
                path="/discover/upcoming_games"
                hidden="hidden"
              />

              <p className="mt-2 mb-0.5 font-medium sm:text-sm min-[400px]:text-xs min-[350px]:text-[11px] text-[10px] text-neutral-400">
                Available in{" "}
                {new Date(game.released).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

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

export default UpcomingGamesGrid;
