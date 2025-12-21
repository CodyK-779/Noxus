import { heroRight } from "@/data/hero-data";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowGame: Dispatch<SetStateAction<number>>;
}

const HeroRight = ({ setShowGame }: Props) => {
  return (
    <div className="col-span-1 flex flex-col gap-0.5">
      {heroRight.map((data, index) => (
        <div
          key={data.name}
          className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-neutral-800"
        >
          <div className="relative min-w-[50px] aspect-[2/3] rounded-md overflow-hidden">
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
