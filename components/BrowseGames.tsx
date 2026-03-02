"use client";

import { GamesType, getGames } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import WishlistButton from "./WishlistButton";
import {
  convertGenreArray,
  convertPlatformArray,
  platformIconByKey,
  platformIcons,
} from "./utils/utils";
import { WishlistItemType } from "./utils/interfaceTypes";
import GamesCount from "./GamesCount";
import { Skeleton } from "./ui/skeleton";
import useDebounce from "./utils/useDebounce";
import { useMenu } from "./MenuProvider";

interface Props {
  initialSearch: string;
  count: number;
  wishlistItems: WishlistItemType[] | undefined;
}

const scoreColors = (score: number) => {
  if (score < 49) return "text-red-500";
  if (score < 74) return "text-yellow-500";
  return "text-green-500";
};

const BrowseGames = ({ initialSearch, count, wishlistItems }: Props) => {
  const [games, setGames] = useState<GamesType[]>([]);
  const { browseSearch } = useMenu();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const debouncedValue = useDebounce(browseSearch, 500);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  const fetchGames = useCallback(async () => {
    if (!hasMore || loadingRef.current || loading) return;

    loadingRef.current = true;
    setLoading(true);

    const data = await getGames(initialSearch, page);

    setGames((prev) => [...prev, ...data.results]);
    setHasMore(Boolean(data.next));
    setPage((prev) => prev + 1);

    loadingRef.current = false;
    setLoading(false);
  }, [initialSearch, page, hasMore]);

  useEffect(() => {
    if (games.length === 0) {
      fetchGames();
    }
  }, []);

  useEffect(() => {
    setGames([]);
    setPage(1);
    setHasMore(true);
  }, [initialSearch]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observe = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchGames();
        }
      },
      { rootMargin: "200px" },
    );

    observe.observe(observerRef.current);

    return () => observe.disconnect();
  }, [fetchGames, hasMore]);

  return (
    <div className="col-span-4">
      <GamesCount count={count} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2.5 mt-6">
        {games.map((game) => (
          <div key={game.id} className="relative group min-[400px]:mb-8 mb-4">
            <Link href={`/browse/games/${game.slug}?from=browse`}>
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
              path={"/browse"}
            />

            <div className="flex items-center justify-between mt-2 mb-0.5">
              <p className="font-medium lg:text-sm text-xs text-neutral-400">
                {new Date(game.released).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
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
      </div>

      {/* Sentinel */}
      {hasMore && (
        <div ref={observerRef} className="h-20">
          {loading && (
            <div className=" grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="aspect-[3/4] rounded-md min-[400px]:mb-8 mb-4"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowseGames;
