"use client";

import { WishlistItemType } from "@/components/utils/interfaceTypes";
import { Bookmark, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { startTransition, useOptimistic, useState, useTransition } from "react";
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
  const [loading, startTransition] = useTransition();
  const wishlisted =
    wishlistItems?.some((item) => item.gameId === gameId) || false;

  const [hasLiked, setHasLiked] = useOptimistic(wishlisted);

  const handleWishlist = async () => {
    if (!session) {
      router.push("/signIn");
      return;
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
        "/",
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
          className={`size-[38px] bg-white rounded-md flex items-center justify-center ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handleWishlist}
          disabled={loading}
        >
          <Bookmark
            className={`size-4 text-neutral-900 ${
              hasLiked && "fill-neutral-900"
            }`}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">
          {hasLiked ? "Remove Wishlist" : "Add to Wishlist"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default HeroWishlist;
