import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import {
  convertPlatformArray,
  gameRating,
  platformIconByKey,
  platformIcons,
} from "@/utils/utils";
import { useSwiperSlide } from "swiper/react";
import WishlistButton from "./WishlistButton";
import { WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  data: GamesType;
  wishlistItems: WishlistItemType[] | undefined;
}

const ratingBadge = (rating: number) => {
  if (rating < 3) return "bg-red-500";
  if (rating < 4) return "bg-orange-500";
  return "bg-green-500";
};

const MBNewGameCard = ({ data, wishlistItems }: Props) => {
  const swiper = useSwiperSlide();
  const isActive = swiper.isActive;

  return (
    <div className="relative group">
      <Link href={`/browse/${data.slug}`}>
        <div className="relative aspect-[3/4] rounded-md overflow-hidden">
          {data.background_image ? (
            <Image
              src={data.background_image}
              alt={data.name}
              fill
              sizes="(max-width: 768px) 80vw"
              className="object-cover"
            />
          ) : (
            <Image
              src="/image-placeholder.webp"
              alt="Image placeholder"
              fill
              sizes="(max-width: 768px) 80vw"
              className="object-cover"
            />
          )}
        </div>
      </Link>

      <WishlistButton
        position={`top-2.5 right-2.5 ${isActive ? "flex" : "hidden"}`}
        size="sm:size-4 size-3.5"
        gameId={data.id}
        name={data.name}
        image={data.background_image}
        slug={data.slug}
        rating={data.rating}
        platforms={convertPlatformArray(data.platforms)}
        createdAt={data.released.toString()}
        wishlistItems={wishlistItems}
      />

      <p className="mt-2 mb-0.5 font-medium sm:text-sm text-xs text-neutral-400">
        {new Date(data.released).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </p>

      <p className="sm:text-lg min-[400px]:text-[15px] min-[350px]:text-sm text-[13px] font-bold">
        {data.name}
      </p>

      <div className="flex items-center justify-between mt-1">
        {data.platforms && (
          <div className="flex items-center gap-1">
            {platformIcons(data.platforms).map((p) => (
              <div key={p}>{platformIconByKey(p)}</div>
            ))}
          </div>
        )}
        <div
          className={`px-1.5 py-0.5 rounded ${ratingBadge(
            data.rating
          )} text-white font-semibold sm:text-sm min-[375px]:text-xs text-[11px]`}
        >
          {gameRating(data.rating)}
        </div>
      </div>
    </div>
  );
};

export default MBNewGameCard;
