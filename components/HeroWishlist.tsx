"use client";

import { WishlistItemType } from "@/components/utils/interfaceTypes";
import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/lib/auth-client";
import { toggleWishList } from "@/actions/wishlist-action";
import { toast } from "sonner";

interface Props {
  gameId: number;
  name: string;
  image?: string;
  slug: string;
  createdAt: string;
  rating: number;
  platforms: string[];
  genres: string[];
  wishlistItems: WishlistItemType[] | undefined;
}

const HeroWishlist = ({
  gameId,
  name,
  image,
  slug,
  createdAt,
  rating,
  platforms,
  genres,
  wishlistItems,
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const wishlisted =
    wishlistItems?.some((item) => item.gameId === gameId) || false;

  const convertGenreArray = (genres: string[]) => {};

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
        rating,
        platforms,
        genres,
        "/",
      );

      if (results?.success) {
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
          className="size-[38px] bg-white rounded-md flex items-center justify-center"
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
