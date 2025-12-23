import { heroData } from "@/data/hero-data";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showGame: number;
}

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
      <div className="absolute min-[1014px]:bottom-10 bottom-8 min-[1014px]:left-12 left-10 z-10">
        <div className="flex flex-col">
          <div className={`relative ${heroData[showGame].style}`}>
            <Image
              src={heroData[showGame].logo}
              alt="Game Logo"
              fill
              className="w-full h-full object-contain z-10"
            />
          </div>

          <p className="mb-2 min-[1014px]:text-lg text-base font-bold">
            {heroData[showGame].award}
          </p>
          <p className="min-[1014px]:mb-9 mb-7 font-medium max-w-[420px] min-[1014px]:text-base text-sm">
            {heroData[showGame].desc}
          </p>
          <div className="flex items-center gap-4">
            <Link href={heroData[showGame].link}>
              <button className="nox-btn font-medium px-6 min-[1170px]:py-3 min-[1014px]:py-2.5 py-2 min-[1170px]:text-base min-[800px]:text-sm text-xs">
                Learn More
              </button>
            </Link>
            <button className="min-[1170px]:size-11 min-[1014px]:size-10 min-[800px]:size-9 size-8 bg-white rounded-md flex items-center justify-center">
              <Bookmark className="min-[1170px]:size-5 size-4 text-neutral-900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
