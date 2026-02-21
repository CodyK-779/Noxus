"use client";

import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { WishlistItemType } from "@/components/utils/interfaceTypes";
import { useSession } from "@/app/lib/auth-client";
import { useState } from "react";
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
  wishlistItems,
  hidden,
  hero,
  path,
}: Props) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const wishlisted =
    wishlistItems?.some((item) => item.game.id === gameId) || false;

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
        path,
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
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          className={`absolute ${position} ${!hero && !loading && `${hidden}`} items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer z-10`}
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
