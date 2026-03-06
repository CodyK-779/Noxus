"use client";

import { Eye, Bookmark, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WishlistItemType } from "./utils/interfaceTypes";
import { useState } from "react";
import { free_game_data } from "@/data/free-data";
import { useSession } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { toggleWishList } from "@/actions/wishlist-action";
import { toast } from "sonner";

interface Props {
  image: string;
  title: string;
  desc: string;
  slug: string;
  game: "valorant" | "wuwa";
  wishlistItems: WishlistItemType[] | undefined;
}

const FreeGamesImages = ({
  image,
  title,
  desc,
  slug,
  game,
  wishlistItems,
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const data =
    game === "valorant" ? free_game_data.valorant : free_game_data.wuwa;

  const wishlisted =
    wishlistItems?.some((item) => item.gameId === data.id) || false;

  const handleWishlist = async () => {
    if (!session) {
      router.push("/signIn");
      return;
    }

    setLoading(true);

    try {
      const results = await toggleWishList(
        data.id,
        data.name,
        data.image,
        data.slug,
        data.date,
        data.rating,
        data.platforms,
        data.genres,
        "/discover/free_games",
      );

      if (results.success) {
        if (!wishlisted) toast.success("Game added to wishlist!");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex md:flex-row flex-col xl:gap-10 lg:gap-8 gap-6 items-center">
      <div className="relative w-full md:w-[58%] aspect-video rounded-lg overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1280px) 55vw, 900px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl min-[350px]:text-xl text-lg font-bold">
          {title}
        </h3>

        <p className="lg:text-base md:text-sm sm:text-base min-[350px]:text-sm text-[13px] font-medium text-neutral-400 mt-2 min-[350px]:mt-2.5 lg:mt-3">
          {desc}
        </p>

        <div className="flex items-center gap-3 mt-7">
          <Link href={`/browse/games/${slug}?from=free_games`}>
            <button className="nox-btn flex items-center gap-2 text-[10px] min-[350px]:text-[11px] sm:text-xs md:text-[11px] lg:text-xs xl:text-[13px] font-bold px-4 tracking-wide">
              <Eye className="size-3.5" />
              View Details
            </button>
          </Link>
          <button
            disabled={loading}
            onClick={handleWishlist}
            className="nox-white flex items-center gap-2 text-[10px] min-[350px]:text-[11px] sm:text-xs md:text-[11px] lg:text-xs xl:text-[13px] font-bold px-4 tracking-wide"
          >
            {loading ? (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Bookmark
                  className={`size-3.5 ${wishlisted && "fill-black"}`}
                />
                Wishlist
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeGamesImages;
