import { PlatformsType } from "@/actions/platforms-action";
import { RAWGResponse } from "@/components/utils/interfaceTypes";
import Image from "next/image";
import Link from "next/link";

interface Props {
  platforms: RAWGResponse<PlatformsType>;
}

const PlatformGrid = ({ platforms }: Props) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 min-[450px]:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
      {platforms.results.map((platform) => (
        <Link key={platform.id} href={`/discover/platforms/${platform.id}`}>
          <div className="relative aspect-square rounded-xl overflow-hidden group">
            <Image
              src={platform.image_background}
              alt={platform.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute md:bottom-4 md:left-4 bottom-3 left-3">
              <p className="font-bold md:text-lg sm:text-base text-sm">
                {platform.name}
              </p>
              <p className="font-bold md:text-base sm:text-sm text-[13px]">
                Games: {platform.games_count.toLocaleString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlatformGrid;
