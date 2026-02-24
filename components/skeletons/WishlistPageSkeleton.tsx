import { Calendar, Clock } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const WishlistPageSkeleton = () => {
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
        </h3>
      </div>

      <hr className="my-4 border-neutral-800" />

      <div className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full lg:px-6 px-4 py-4 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl"
          >
            <div className="flex sm:flex-row flex-col sm:gap-4 gap-2">
              {/* Image skeleton */}
              <Skeleton className="lg:w-[300px] sm:w-[250px] w-full h-auto shrink-0 aspect-video rounded-md overflow-hidden" />
              <div className="flex flex-col justify-between w-full">
                <div>
                  {/* Game Name */}
                  <Skeleton className="w-72 lg:h-5 sm:h-4 min-[375px]:h-5 min-[350px]:h-4 h-3.5 mb-5" />
                  <div className="sm:block flex items-center gap-3">
                    {/* Rating */}
                    <Skeleton className="w-32 h-3 mb-3" />
                    {/* Release Date */}
                    <div className="flex items-center sm:gap-2.5 gap-2 md:mr-0 mr-3">
                      <Calendar className="lg:size-3.5 sm:size-3 min-[375px]:size-3.5 size-3 text-neutral-400" />
                      <Skeleton className="w-24 h-2.5" />
                    </div>
                  </div>
                </div>
                {/* Bottom part */}
                <div className="flex justify-between items-end gap-4 w-full sm:mt-0 mt-2">
                  {/* Left side */}
                  <div className="flex flex-col sm:gap-0 gap-0.5">
                    {/* Genres */}
                    <Skeleton className="w-32 lg:h-7 sm:h-6 min-[375px]:h-7 h-6" />
                    {/* Platforms */}
                    <div className="flex items-center gap-1.5 lg:mt-3.5 mt-3">
                      <Skeleton className="w-32 lg:h-4 sm:h-3.5 min-[375px]:h-4 h-3.5" />
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="lg:flex hidden flex-col justify-end items-end gap-3">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="lg:size-3.5 size-3" />
                      <Skeleton className="w-24 h-2.5" />
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="nox-btn lg:text-xs text-[10px] font-semibold px-4 tracking-wide sm:w-fit w-full">
                        Remove
                      </button>
                      <button className="nox-white lg:text-xs text-[10px] sm:w-fit w-full font-bold px-4 tracking-wide">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* MB Buttons */}
                <div className="sm:hidden flex flex-col gap-3 mt-6">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="lg:size-3.5 size-3" />
                    <Skeleton className="w-24 h-2.5" />
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <button className="nox-btn lg:text-xs text-[10px] font-semibold px-4 tracking-wide sm:w-fit w-full">
                      Remove
                    </button>
                    <button className="nox-white lg:text-xs w-full text-[10px] font-bold px-4 tracking-wide">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden sm:flex hidden items-center justify-end gap-3 mt-1">
              <button className="nox-btn lg:text-xs text-[10px] font-semibold px-4 tracking-wide sm:w-fit w-full">
                Remove
              </button>
              <button className="nox-white text-[10px] font-bold px-4 tracking-wide">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WishlistPageSkeleton;
