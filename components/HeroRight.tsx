import { heroRight } from "@/data/hero-data";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  setShowGame: Dispatch<SetStateAction<number>>;
}

const HeroRight = ({ setShowGame }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {heroRight.map((data, index) => (
        <div
          key={data.name}
          className="flex items-center gap-4 border border-white px-3 py-4 rounded-md hover:bg-neutral-800"
        >
          {/* <AspectRatio ratio={2 / 3} className="overflow-hidden rounded-md">
            <Image
              src={data.img}
              alt={data.name}
              fill
              // sizes="(max-width: 768px) 100vw, 200px"
              className="object-cover"
            />
          </AspectRatio> */}
          <div className="relative w-12 aspect-[2/3] rounded-md overflow-hidden">
            <Image
              src={data.img}
              alt={data.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
          <p className="font-medium">{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroRight;
