"use client";

import { Bookmark } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Props {
  position: string;
  size: string;
}

const WishlistButton = ({ position, size }: Props) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          className={`absolute ${position} items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer z-10`}
        >
          <Bookmark className={size} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">Add to Wishlist</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WishlistButton;
