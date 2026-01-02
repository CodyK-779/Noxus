"use client";

import { WishlistItemType } from "@/utils/interfaceTypes";
import { Bookmark } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";

interface Props {
  slug: string;
  wishlistItems: WishlistItemType[] | undefined;
}

const HeroWishlist = ({ slug, wishlistItems }: Props) => {
  const [loading, setLoading] = useState(false);
  const [wishlisted, setWishlisted] = useState(
    wishlistItems?.some((item) => item.game.slug === slug) || false
  );

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <button
          className="size-9 bg-white rounded-md flex items-center justify-center"
          disabled={loading}
        >
          <Bookmark
            className={`size-4 text-neutral-900 ${
              wishlisted && "fill-neutral-900"
            }`}
          />
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
