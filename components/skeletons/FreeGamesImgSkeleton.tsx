import { Bookmark, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  desc: string;
  slug: string;
}

const FreeGamesImgSkeleton = ({ image, title, desc, slug }: Props) => {
  return (
    <div className="flex md:flex-row flex-col xl:gap-10 lg:gap-8 gap-6 items-center">
      <div className="relative w-full md:w-[58%] aspect-video rounded-lg overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1280px) 55vw, 900px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl min-[350px]:text-xl text-lg font-bold">
          {title}
        </h3>

        <p className="lg:text-base md:text-sm sm:text-base min-[350px]:text-sm text-[13px] font-medium text-neutral-400 mt-2 min-[350px]:mt-2.5 lg:mt-3">
          {desc}
        </p>

        <div className="flex items-center gap-3 mt-7">
          <Link href={`/browse/games/${slug}?from=free_games`}>
            <button className="nox-btn flex items-center gap-2 text-[10px] min-[350px]:text-[11px] sm:text-xs md:text-[11px] lg:text-xs xl:text-[13px] font-bold px-4 tracking-wide">
              <Eye className="size-3.5" />
              View Details
            </button>
          </Link>
          <button className="nox-white flex items-center gap-2 text-[10px] min-[350px]:text-[11px] sm:text-xs md:text-[11px] lg:text-xs xl:text-[13px] font-bold px-4 tracking-wide">
            <Bookmark className="size-3.5" />
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeGamesImgSkeleton;
