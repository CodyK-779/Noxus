"use client";

import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { WishlistItemType } from "@/components/utils/interfaceTypes";
import { useSession } from "@/app/lib/auth-client";
import { useOptimistic, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toggleWishList } from "@/actions/wishlist-action";
import { toast } from "sonner";

interface Props {
  position: string;
  size: string;
  gameId: number;
  name: string;
  image?: string;
  slug: string;
  createdAt: string;
  rating: number;
  platforms: string[];
  genres: string[];
  wishlistItems: WishlistItemType[] | undefined;
  hidden?: string;
  hero?: boolean;
  path: string;
}

const WishlistButton = ({
  position,
  size,
  gameId,
  name,
  image,
  slug,
  createdAt,
  rating,
  platforms,
  genres,
  wishlistItems,
  hidden,
  hero,
  path,
}: Props) => {
  const { data: session } = useSession();
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const wishlisted =
    wishlistItems?.some((item) => item.game.id === gameId) || false;

  const [hasLiked, setHasLiked] = useOptimistic(wishlisted);

  const handleWishlist = async () => {
    if (!session) {
      return router.push("/signIn");
    }

    startTransition(async () => {
      setHasLiked(!hasLiked);

      const results = await toggleWishList(
        session.user.id,
        gameId,
        name,
        image,
        slug,
        createdAt,
        rating,
        platforms,
        genres,
        path,
      );

      if (results?.success) {
        if (!wishlisted) toast.success("Game added to wishlist!");
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          className={`absolute ${position} ${!hero && !loading && `${hidden}`} items-center justify-center bg-black border border-white p-1 rounded-full ${loading ? "cursor-not-allowed" : "cursor-pointer"} z-10`}
          onClick={handleWishlist}
          disabled={loading}
          aria-busy={loading}
        >
          <Bookmark className={`${size} ${hasLiked && "fill-white"}`} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">
          {loading
            ? "Updating..."
            : hasLiked
              ? "Remove Wishlist"
              : "Add to Wishlist"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WishlistButton;
