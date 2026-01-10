"use client";

import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { WishlistItemType } from "@/utils/interfaceTypes";
import { useSession } from "@/app/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toggleWishList } from "@/actions/wishlist-action";

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
  wishlistItems: WishlistItemType[] | undefined;
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
  wishlistItems,
}: Props) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [wishlisted, setWishlisted] = useState(
    wishlistItems?.some((item) => item.gameId === gameId) || false
  );

  const handleWishlist = async () => {
    if (!session) {
      return router.push("/signIn");
    }

    setLoading(true);

    try {
      const results = await toggleWishList(
        gameId,
        name,
        image,
        slug,
        createdAt,
        rating,
        platforms,
        "/"
      );

      if (results.success) {
        setWishlisted(!wishlisted);
      } else {
        console.error("Failed to update wishlist:", results.error);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      setWishlisted(
        wishlistItems?.some((item) => item.gameId === gameId) || false
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          className={`absolute ${position} items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer z-10`}
          onClick={handleWishlist}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className={`${size} animate-spin`} />
          ) : (
            <Bookmark className={`${size} ${wishlisted && "fill-white"}`} />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">
          {wishlisted ? "Remove Wishlist" : "Add to Wishlist"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WishlistButton;
