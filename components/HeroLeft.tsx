import { heroData } from "@/data/hero-data";
import Image from "next/image";

interface Props {
  showGame: number;
}

const HeroLeft = ({ showGame }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl w-full aspect-video">
      <div className="absolute inset-0 z-10">
        <Image
          src={heroData[showGame].img}
          alt="Game_Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroLeft;
