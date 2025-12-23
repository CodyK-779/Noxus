import { heroData } from "@/data/hero-data";
import { Bookmark, ShipWheel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  showGame: number;
}

const marginLeft = (logo: string) => {
  if (logo === "/game_images/ER-logo.png") return "size-60 -mb-12";
  if (logo === "/game_images/expedition-logo.png") return "size-48";
  if (logo === "/game_images/arc-logo.png") return "size-56 -mb-8";
  if (logo === "/game_images/B6-logo.png") return "size-60 -mb-14";
  if (logo === "/game_images/RE-logo.png") return "size-56 -mb-8";

  return "size-44 -mb-1";
};

const HeroLeft = ({ showGame }: Props) => {
  return (
    <div className="col-span-4 relative overflow-hidden rounded-2xl w-full aspect-video">
      <div className="absolute inset-0">
        <Image
          src={heroData[showGame].img}
          alt="Game_Background"
          fill
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-10 left-12 z-10">
        <div className="flex flex-col">
          <div className={`relative ${marginLeft(heroData[showGame].logo)}`}>
            <Image
              src={heroData[showGame].logo}
              alt="Game Logo"
              fill
              className="w-full h-full object-contain z-10"
            />
          </div>

          <p className="mb-2 text-lg font-bold">{heroData[showGame].award}</p>
          <p className="mb-9 font-medium max-w-[420px]">
            {heroData[showGame].desc}
          </p>
          <div className="flex items-center gap-4">
            <Link href={heroData[showGame].link}>
              <button className="nox-btn font-medium px-6 py-3">
                Learn More
              </button>
            </Link>
            <button className="size-11 bg-white rounded-md flex items-center justify-center">
              <Bookmark className="size-5 text-neutral-900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
