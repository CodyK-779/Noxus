import { GamesType } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { platformIcons, platformIconByKey } from "@/utils/utils";
import { Bookmark } from "lucide-react";
import { useSwiperSlide } from "swiper/react";

interface Props {
  data: GamesType;
}

const MBUpcomingGames = ({ data }: Props) => {
  const swiper = useSwiperSlide();
  const isActive = swiper.isActive;

  return (
    <div key={data.id} className="relative group">
      <Link href={`/browse/${data.slug}`}>
        <div className="relative aspect-[3/4] rounded-md overflow-hidden ">
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

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div
            className={`absolute top-2.5 right-2.5 ${
              isActive ? "flex" : "hidden"
            } items-center justify-center bg-black border border-white p-1 rounded-full cursor-pointer`}
          >
            <Bookmark className="sm:size-4 size-3.5" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">Add to Wishlist</p>
        </TooltipContent>
      </Tooltip>

      <p className="mt-2 mb-0.5 font-medium sm:text-sm text-xs text-neutral-400">
        Available in{" "}
        {new Date(data.released).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

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

export default MBUpcomingGames;
