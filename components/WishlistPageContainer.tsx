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
        <div className="w-1.5 min-[375px]:h-16 h-14 bg-[#e91e3f] rounded-full" />
        <div>
          <h1 className="md:text-5xl min-[375px]:text-4xl text-3xl font-bold">
            My <span className="text-[#e91e3f]">Wishlist</span>
          </h1>
          <p className="text-neutral-400 min-[375px]:text-sm text-xs mt-1">
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
              className="w-full lg:px-6 px-4 py-4 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl"
            >
              <div className="flex sm:flex-row flex-col sm:gap-4 gap-2">
                <div className="relative lg:w-[300px] sm:w-[250px] w-full shrink-0 aspect-video rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-950 border border-neutral-800">
                  {item.game.image ? (
                    <Image
                      src={item.game.image}
                      alt={item.game.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <LucideGamepad2 className="sm:size-12 min-[425px]:size-16 min-[350px]:size-12 size-10 text-neutral-500" />
                  )}
                </div>
                <div className="flex flex-col justify-between w-full">
                  {/* Top part */}
                  <div>
                    {/* Game Name */}
                    <h3 className="lg:text-xl sm:text-lg min-[375px]:text-xl min-[350px]:text-lg text-base font-semibold lg:mb-1 mb-0 line-clamp-1">
                      {item.game.name}
                    </h3>
                    {/* Rating */}
                    <div className="sm:block flex items-center gap-1">
                      <div className="flex items-center sm:gap-2.5 gap-2 md:mr-0 mr-3">
                        <div className="flex items-center text-yellow-500 lg:text-lg sm:text-base min-[375px]:text-lg text-base">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const starPosition = i + 1;
                            if (item.game.rating >= starPosition)
                              return <span key={i}>★</span>;
                            if (item.game.rating >= starPosition - 0.5)
                              return <span key={i}>⯪</span>;
                            return <span key={i}>☆</span>;
                          })}
                        </div>
                        <p className="lg:text-sm sm:text-xs min-[375px]:text-sm text-xs font-semibold">
                          {item.game.rating.toFixed(
                            item.game.rating > 0 ? 1 : 0,
                          )}
                        </p>
                      </div>
                      {/* Release Date */}
                      <div className="flex items-center sm:gap-2.5 gap-2 md:mr-0 mr-3">
                        <Calendar className="lg:size-3.5 sm:size-3 min-[375px]:size-3.5 size-3 text-neutral-400" />
                        <p className="lg:text-sm sm:text-xs min-[375px]:text-sm text-xs font-medium text-neutral-300">
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
                  </div>
                  {/* Bottom part */}
                  <div className="flex justify-between items-end gap-4 w-full sm:mt-0 mt-2">
                    {/* Left side */}
                    <div className="flex flex-col sm:gap-0 gap-0.5">
                      {/* Genres */}
                      {item.game.genres.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {item.game.genres.map((g, index) => (
                            <div
                              key={index}
                              className="px-2.5 py-1 font-medium rounded-md lg:text-xs sm:text-[11px] min-[375px]:text-xs text-[11px] bg-[#e91e3f]/10 text-[#e91e3f] border border-[#e91e3f]/20"
                            >
                              {g}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="lg:text-sm sm:text-xs min-[375px]:text-sm text-xs italic text-neutral-400">
                          No genres listed
                        </p>
                      )}
                      {/* Platforms */}
                      {item.game.platforms && (
                        <div className="flex items-center gap-1.5 lg:mt-1.5 mt-1">
                          {platformIcons(item.game.platforms).map((p) => (
                            <div
                              key={p}
                              className="lg:text-lg sm:text-base min-[375px]:text-lg text-base text-neutral-300 hover:text-white transition-colors"
                            >
                              {platformIconByKey(p)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right side */}
                    <div className="lg:flex hidden flex-col justify-end items-end gap-3">
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <Clock className="lg:size-3.5 size-3" />
                        <p className="lg:text-sm text-xs font-medium">
                          Added on{" "}
                          <span>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "numeric",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DeleteWishlist id={item.id} />
                        <Link
                          href={`/browse/games/${item.game.slug}?from=wishlist`}
                        >
                          <button className="nox-white lg:text-xs text-[10px] sm:w-fit w-full font-bold px-4 tracking-wide">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* MB Buttons */}
                  <div className="sm:hidden flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="lg:size-3.5 size-3" />
                      <p className="lg:text-sm text-xs font-medium">
                        Added on{" "}
                        <span>
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <DeleteWishlist id={item.id} />
                      <Link
                        className="w-full"
                        href={`/browse/games/${item.game.slug}?from=wishlist`}
                      >
                        <button className="nox-white lg:text-xs w-full text-[10px] font-bold px-4 tracking-wide">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden sm:flex hidden items-center justify-end gap-3 mt-1">
                <DeleteWishlist id={item.id} />
                <Link href={`/browse/games/${item.game.slug}?from=wishlist`}>
                  <button className="nox-white text-[10px] font-bold px-4 tracking-wide">
                    View Details
                  </button>
                </Link>
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
