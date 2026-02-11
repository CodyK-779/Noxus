import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import {
  convertPlatformArray,
  gameRating,
  platformIconByKey,
  platformIcons,
} from "@/components/utils/utils";
import { useSwiperSlide } from "swiper/react";
import WishlistButton from "./WishlistButton";
import { WishlistItemType } from "@/components/utils/interfaceTypes";

interface Props {
  data: GamesType;
  wishlistItems: WishlistItemType[] | undefined;
}

const scoreColors = (score: number) => {
  if (score < 3) return "text-red-500";
  if (score < 4) return "text-yellow-500";
  return "text-green-500";
};

const MBNewGameCard = ({ data, wishlistItems }: Props) => {
  const swiper = useSwiperSlide();
  const isActive = swiper.isActive;

  return (
    <div className="relative group">
      <Link href={`/browse/games/${data.slug}?from=Discover`}>
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
        path="/"
      />

      <div className="flex items-center justify-between mt-2 mb-0.5">
        <p className="font-medium lg:text-sm text-xs text-neutral-400">
          {new Date(data.released).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p
          className={`${scoreColors(data.rating)} min-[400px]:text-sm text-[13px] font-bold`}
        >
          {gameRating(data.rating)}
        </p>
      </div>

      <p className="sm:text-lg min-[400px]:text-[15px] min-[350px]:text-sm text-[13px] font-bold">
        {data.name}
      </p>

      {data.platforms && (
        <div className="flex items-center gap-1 mt-1">
          {platformIcons(data.platforms).map((p) => (
            <div key={p}>{platformIconByKey(p)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MBNewGameCard;
