"use client";

import { WishlistItemType } from "@/utils/interfaceTypes";
import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/lib/auth-client";
import { toggleWishList } from "@/actions/wishlist-action";

interface Props {
  gameId: number;
  name: string;
  image?: string;
  slug: string;
  createdAt: string;
  wishlistItems: WishlistItemType[] | undefined;
}

const HeroWishlist = ({
  gameId,
  name,
  image,
  slug,
  createdAt,
  wishlistItems,
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [wishlisted, setWishlisted] = useState(
    wishlistItems?.some((item) => item.gameId === gameId) || false
  );

  const handleWishlist = async () => {
    if (!session) {
      router.push("/signIn");
      return;
    }

    setLoading(true);

    try {
      const results = await toggleWishList(
        gameId,
        name,
        image,
        slug,
        createdAt,
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
          className="size-9 bg-white rounded-md flex items-center justify-center"
          onClick={handleWishlist}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin text-neutral-900" />
          ) : (
            <Bookmark
              className={`size-4 text-neutral-900 ${
                wishlisted && "fill-neutral-900"
              }`}
            />
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

export default HeroWishlist;
