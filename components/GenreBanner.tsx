import { Gamepad2 } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  count: number;
}

const gameCount = (count: number) => {
  if (count > 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }
  if (count > 1_000) {
    return `${(count / 1_000).toFixed(1)}K`;
  }
};

const GenreBanner = ({ name, image, count }: Props) => {
  return (
    <div className="relative sm:h-[300px] min-[425px]:h-[250px] min-[375px]:h-[225px] h-[200px] overflow-hidden min-[400px]:mt-[71px] mt-[68px]">
      <Image src={image} alt={name} fill className="inset-0 object-cover " />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="relative max-container z-10 h-full flex flex-col justify-end md:pb-10 min-[425px]:pb-8 pb-6">
        <h1 className="md:text-5xl min-[425px]:text-4xl min-[350px]:text-3xl text-2xl font-bold min-[425px]:mb-2 min-[350px]:mb-1.5 mb-1">
          {name} Games
        </h1>
        <div className="flex items-center gap-2 text-neutral-200">
          <Gamepad2 className="md:size-5 min-[350px]:size-[18px] size-3.5" />
          <p className="md:text-base min-[350px]:text-sm text-[13px] font-semibold">
            Total Games: <span className="font-bold">{gameCount(count)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenreBanner;
