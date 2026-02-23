import { getUser } from "@/actions/user-action";
import EmptyWishlist from "./EmptyWishlist";
import Image from "next/image";
import { Calendar, Clock, LucideGamepad2 } from "lucide-react";
import { getPlatformKey, platformIconByKey } from "./utils/utils";
import Link from "next/link";
import DeleteWishlist from "./dialogs/DeleteWishlist";

const WishlistPageContainer = async () => {
  const user = await getUser();

  const platformIcons = (platforms: string[]) => {
    const uniquePlatforms = Array.from(
      new Set(platforms.map((p) => getPlatformKey(p))),
    );

    return uniquePlatforms;
  };

  const gameCount = user?.wishlist?.items.length ?? 0;

  return (
    <main className="max-container mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-16 bg-[#e91e3f] rounded-full" />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-[#e91e3f]">Wishlist</span>
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Your personal collection of dream games
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-10">
        <h3 className="text-xl font-bold flex items-center gap-2">
          Wishlisted Games
          <span className="text-sm px-2 py-0.5 bg-[#e91e3f]/10 rounded-full text-[#e91e3f]">
            {gameCount}
          </span>
        </h3>
      </div>

      <hr className="my-4 border-neutral-800" />

      {gameCount > 0 ? (
        <div className="flex flex-col gap-4">
          {user?.wishlist?.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between w-full px-6 py-4 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl"
            >
              {/* Left side */}
              <div className="flex gap-4">
                <div className="relative w-[300px] shrink-0 aspect-video rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-950 border border-neutral-800">
                  {item.game.image ? (
                    <Image
                      src={item.game.image}
                      alt={item.game.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <LucideGamepad2 className="size-12 text-neutral-500" />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-2">
                  {/* Game Name */}
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {item.game.name}
                    </h3>
                    {/* Rating */}
                    <div className="flex items-center gap-2.5 md:mr-0 mr-3">
                      <div className="flex items-center text-yellow-500 text-lg">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const starPosition = i + 1;
                          if (item.game.rating >= starPosition)
                            return <span key={i}>★</span>;
                          if (item.game.rating >= starPosition - 0.5)
                            return <span key={i}>⯪</span>;
                          return <span key={i}>☆</span>;
                        })}
                      </div>
                      <p className="text-sm font-semibold">
                        {item.game.rating.toFixed(item.game.rating > 0 ? 1 : 0)}
                      </p>
                    </div>
                    {/* Release Date */}
                    <div className="flex items-center gap-2.5 md:mr-0 mr-3">
                      <Calendar className="size-3.5 text-neutral-400" />
                      <p className="text-sm font-medium text-neutral-300">
                        {new Date(item.game.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Genres */}
                    {item.game.genres.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {item.game.genres.map((g, index) => (
                          <div
                            key={index}
                            className="px-2.5 py-1 font-medium rounded-md text-xs bg-[#e91e3f]/10 text-[#e91e3f] border border-[#e91e3f]/20"
                          >
                            {g}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm italic text-neutral-400">
                        No genres listed
                      </p>
                    )}
                    {/* Platforms */}
                    {item.game.platforms && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        {platformIcons(item.game.platforms).map((p) => (
                          <div
                            key={p}
                            className="text-lg text-neutral-300 hover:text-white transition-colors"
                          >
                            {platformIconByKey(p)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col justify-end items-end gap-3">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Clock className="size-3.5 " />
                  <p className="text-sm font-medium">
                    Added on{" "}
                    <span>
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <DeleteWishlist id={item.id} />
                  <Link href={`/browse/games/${item.game.slug}?from=wishlist`}>
                    <button className="nox-white text-xs font-bold px-4 tracking-wide">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </main>
  );
};

export default WishlistPageContainer;
