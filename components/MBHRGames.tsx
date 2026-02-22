import { GamesType } from "@/actions/games-action";
import { WishlistItemType } from "@/components/utils/interfaceTypes";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import { useSwiperSlide } from "swiper/react";
import {
  convertGenreArray,
  convertPlatformArray,
  platformIconByKey,
  platformIcons,
} from "@/components/utils/utils";

interface Props {
  game: GamesType;
  wishlistItems: WishlistItemType[] | undefined;
}

const scoreColors = (score: number) => {
  if (score < 49) return "text-red-500";
  if (score < 74) return "text-yellow-500";
  return "text-green-500";
};

const MBHRGames = ({ game, wishlistItems }: Props) => {
  const swiper = useSwiperSlide();
  const isActive = swiper.isActive;

  return (
    <div className="relative group">
      <Link href={`/browse/games/${game.slug}?from=Discover`}>
        <div className="relative aspect-[3/4] rounded-md overflow-hidden">
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
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
        gameId={game.id}
        name={game.name}
        image={game.background_image}
        slug={game.slug}
        rating={game.rating}
        platforms={convertPlatformArray(game.platforms)}
        genres={convertGenreArray(game.genres)}
        createdAt={game.released.toString()}
        wishlistItems={wishlistItems}
        path="/"
      />

      <div className="flex items-center justify-between mt-2 mb-0.5">
        <p className="font-medium lg:text-sm text-xs text-neutral-400">
          {new Date(game.released).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        {game.metacritic && (
          <p
            className={`${scoreColors(game.metacritic)} min-[400px]:text-sm text-[13px] font-semibold`}
          >
            {game.metacritic}
          </p>
        )}
      </div>

      <p className="sm:text-lg min-[400px]:text-[15px] min-[350px]:text-sm text-[13px] font-bold">
        {game.name}
      </p>

      {game.platforms && (
        <div className="flex items-center gap-1 mt-1">
          {platformIcons(game.platforms).map((p) => (
            <div key={p}>{platformIconByKey(p)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MBHRGames;
