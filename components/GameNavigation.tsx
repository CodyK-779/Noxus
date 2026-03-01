"use client";

import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { platformsArray } from "@/data/platform-data";
import { genresArray } from "@/data/genre-data";

interface Props {
  name: string;
  skeleton?: boolean;
}

const GameNavigation = ({ name, skeleton }: Props) => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "";
  const router = useRouter();

  return (
    <div className="max-container flex items-center min-[375px]:gap-2 gap-1.5 min-[400px]:text-sm text-xs font-medium text-gray-400">
      {from === "Discover" && (
        <>
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {from}
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}

      {from === "wishlist" && (
        <>
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Wishlist
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}

      {from === "browse" && (
        <>
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Browse
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}

      {from === "search" && (
        <>
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Go Back
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}

      {/* HR Route */}
      {from === "high-ratings" && (
        <>
          <Link href="/" className="hover:text-white transition-colors">
            Discover
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            High-ratings
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}
      {/* New Games Route */}
      {from === "new-releases" && (
        <>
          <Link href="/" className="hover:text-white transition-colors">
            Discover
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            New-releases
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}
      {/* Upcomings Route */}
      {from === "upcoming" && (
        <>
          <Link href="/" className="hover:text-white transition-colors">
            Discover
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Upcoming-games
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}
      {/* Platforms Route */}
      {platformsArray.includes(from) && (
        <>
          <Link href="/" className="hover:text-white transition-colors">
            Discover
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <Link
            href="/discover/platforms"
            className="hover:text-white transition-colors"
          >
            Platforms
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {from}
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}
      {/* Genres Route */}
      {genresArray.includes(from) && (
        <>
          <Link href="/" className="hover:text-white transition-colors">
            Discover
          </Link>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          <div
            onClick={() => router.back()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {from}
          </div>
          <ChevronRight className="min-[400px]:size-4 size-3.5 min-[400px]:mt-0 mt-[3px] shrink-0" />
          {!skeleton ? (
            <p className="text-white cursor-pointer truncate">{name}</p>
          ) : (
            <Skeleton className="w-20 h-3" />
          )}
        </>
      )}
    </div>
  );
};

export default GameNavigation;
