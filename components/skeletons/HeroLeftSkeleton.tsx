import { heroData } from "@/data/hero-data";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  showGame: number;
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

const HeroLeftSkeleton = ({ showGame, setIsPaused }: Props) => {
  return (
    <div
      className="col-span-4 relative overflow-hidden rounded-2xl w-full aspect-video"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Static content - no animations */}
      <div className="absolute inset-0">
        <Image
          src={heroData[showGame].img}
          alt="Game_Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute min-[1014px]:bottom-10 bottom-8 min-[1014px]:left-12 left-10 z-10">
        <div className="flex flex-col">
          {/* LOGO */}
          <div className={`relative ${logoStyles(heroData[showGame].logo)}`}>
            <Image
              src={heroData[showGame].logo}
              alt="Game Logo"
              fill
              sizes="(min-width: 1014px) 240px, 208px"
              className="object-contain z-10"
            />
          </div>

          {/* TEXT + BUTTONS */}
          <div>
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

              <button className="size-9 bg-white rounded-md flex items-center justify-center opacity-50">
                <Loader2 className="size-4 text-neutral-900 animate-spin" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftSkeleton;
