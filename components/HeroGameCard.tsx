import { HeroMobile } from "@/data/hero-data";
import Image from "next/image";
import Link from "next/link";
import { useSwiperSlide } from "swiper/react";
import WishlistButton from "./WishlistButton";
import { WishlistItemType } from "@/components/utils/interfaceTypes";

interface Props {
  data: HeroMobile;
  isActive: boolean;
  wishlistItems: WishlistItemType[] | undefined;
}

const logoStyles = (logo: string) => {
  switch (logo) {
    case "/game_images/ER-logo.png":
      return "sm:size-64 min-[450px]:size-52 min-[375px]:size-44 min-[350px]:size-40 size-36 sm:-mb-[70px] min-[450px]:-mb-14 min-[350px]:-mb-12 -mb-11";
    case "/game_images/expedition-logo.png":
      return "sm:size-48 min-[450px]:size-44 min-[400px]:size-36 min-[350px]:size-32 size-24 min-[450px]:-mb-2.5 -mb-2";
    case "/game_images/arc-logo.png":
      return "sm:size-52 min-[450px]:size-48 min-[400px]:size-44 min-[375px]:size-40 min-[350px]:size-36 size-32 min-[450px]:-mb-11 min-[400px]:-mb-10 min-[375px]:-mb-9 min-[350px]:-mb-8 -mb-7";
    case "/game_images/B6-logo.png":
      return "sm:size-56 min-[450px]:size-52 min-[400px]:size-48 min-[375px]:size-44 min-[350px]:size-40 size-36 min-[450px]:-mb-16 min-[375px]:-mb-14 min-[350px]:-mb-12 -mb-11";
    case "/game_images/RE-logo.png":
      return "sm:size-52 min-[450px]:size-48 min-[400px]:size-44 min-[375px]:size-40 min-[350px]:size-36 size-32 min-[450px]:-mb-10 min-[375px]:-mb-8 -mb-7";
    default:
      return "sm:size-48 min-[450px]:size-44 min-[400px]:size-36 min-[375px]:size-32 min-[350px]:size-28 size-24 min-[400px]:-mb-4 min-[350px]:-mb-3 -mb-2";
  }
};

const HeroGameCard = ({ data, isActive, wishlistItems }: Props) => {
  return (
    <div className="min-[768px]:hidden">
      <Link href={`/browse/${data.link}`}>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group">
          <Image
            src={data.img}
            alt="Game Cover"
            fill
            sizes="(max-width: 768px) 80vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
          <div
            className={`absolute min-[450px]:bottom-7 min-[450px]:left-7 bottom-6 left-6 z-10 pr-4 transition-all duration-300 ${
              isActive
                ? "opacity-100 translate-y-0 delay-100"
                : "opacity-0 translate-y-8 invisible"
            }`}
          >
            <div className={`relative ${logoStyles(data.logo)}`}>
              <Image
                src={data.logo}
                alt="Game Logo"
                fill
                sizes="(min-width: 1014px) 240px, 208px"
                className="object-contain"
              />
            </div>
            <p className="mb-2.5 sm:text-xl min-[450px]:text-lg min-[350px]:text-base text-sm font-semibold">
              {data.saleText}
            </p>
            <p className="font-medium sm:w-[300px] w-full sm:text-lg min-[450px]:text-base min-[350px]:text-sm text-xs">
              {data.desc}
            </p>
          </div>
        </div>
      </Link>
      <WishlistButton
        position="min-[350px]:top-5 min-[350px]:right-5 top-4 right-4 flex"
        size="sm:size-5 min-[350px]:size-4 size-3.5"
        gameId={data.id}
        name={data.name}
        image={data.image}
        slug={data.link}
        rating={data.rating}
        platforms={data.platforms}
        createdAt={data.date}
        wishlistItems={wishlistItems}
        path="/"
        hero
      />
    </div>
  );
};

export default HeroGameCard;
