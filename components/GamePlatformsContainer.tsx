import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GamePlatforms from "./GamePlatforms";
import MBGamePlatforms from "./MBGamePlatforms";

const GamePlatformsContainer = () => {
  return (
    <section className="max-container mt-24">
      <div className="w-fit flex items-center gap-1.5 group cursor-pointer hover:underline underline-offset-2 mb-6">
        <Link href="/discover/platforms">
          <h1 className="sm:text-2xl min-[400px]:text-[21px] min-[350px]:text-[18px] text-base font-bold">
            Discover Available Platforms
          </h1>
        </Link>

        <ChevronRight className="min-[400px]:mt-[7px] min-[350px]:mt-[3.5px] mt-[4px] min-[400px]:size-7 min-[350px]:size-6 size-5 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
      <GamePlatforms />
      <MBGamePlatforms />
    </section>
  );
};

export default GamePlatformsContainer;
