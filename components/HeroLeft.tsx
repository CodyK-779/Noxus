import { heroData } from "@/data/hero-data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { WishlistItemType } from "@/components/utils/interfaceTypes";
import HeroWishlist from "./HeroWishlist";
import { Dispatch, SetStateAction } from "react";

interface Props {
  showGame: number;
  wishlistItems: WishlistItemType[] | undefined;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
}

const logoStyles = (logo: string) => {
  switch (logo) {
    case "/game_images/ER-logo.png":
      return "min-[1014px]:size-60 size-52 min-[850px]:-mb-12 -mb-14";
    case "/game_images/expedition-logo.png":
      return "min-[1170px]:size-48 min-[1014px]:size-44 min-[900px]:size-40 min-[800px]:size-36 size-32 min-[900px]:mb-0 -mb-2";
    case "/game_images/arc-logo.png":
      return "min-[1014px]:size-56 min-[900px]:size-48 min-[850px]:size-44 size-40 -mb-8";
    case "/game_images/B6-logo.png":
      return "min-[1014px]:size-60 min-[850px]:size-52 min-[800px]:size-48 size-44 -mb-14";
    case "/game_images/RE-logo.png":
      return "min-[1014px]:size-56 min-[900px]:size-48 min-[850px]:size-44 size-40 -mb-8";
    default:
      return "min-[1014px]:size-44 min-[900px]:size-40 min-[800px]:size-36 size-32 -mb-1";
  }
};

const HeroLeft = ({ showGame, wishlistItems, setIsPaused }: Props) => {
  return (
    <div
      className="col-span-4 relative overflow-hidden rounded-2xl w-full aspect-video"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={showGame}
          className="absolute inset-0"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src={heroData[showGame].img}
            alt="Game_Background"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover max-[768px]:hidden"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>
      <div className=" absolute min-[1014px]:bottom-10 bottom-8 min-[1014px]:left-12 left-10 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={showGame}
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* LOGO */}
            <motion.div
              className={`relative ${logoStyles(heroData[showGame].logo)}`}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={heroData[showGame].logo}
                alt="Game Logo"
                fill
                sizes="(min-width: 1014px) 240px, 208px"
                className="object-contain z-10"
              />
            </motion.div>

            {/* TEXT + BUTTONS */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="mb-2 min-[1014px]:text-lg text-base font-bold">
                {heroData[showGame].saleText}
              </p>

              <p className="min-[1014px]:mb-9 mb-7 font-medium max-w-[420px] min-[1014px]:text-base text-sm">
                {heroData[showGame].desc}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href={`/browse/games/${heroData[showGame].link}?from=Discover`}
                >
                  <button className="nox-btn font-medium px-6 py-2">
                    Learn More
                  </button>
                </Link>

                <HeroWishlist
                  gameId={heroData[showGame].id}
                  name={heroData[showGame].name}
                  image={heroData[showGame].image}
                  slug={heroData[showGame].link}
                  createdAt={heroData[showGame].date}
                  rating={heroData[showGame].rating}
                  platforms={heroData[showGame].platforms}
                  wishlistItems={wishlistItems}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroLeft;
