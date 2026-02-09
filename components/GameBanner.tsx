import { GameDetails } from "@/actions/games-action";
import { Calendar, UsersIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  game: GameDetails;
}

const GameBanner = ({ game }: Props) => {
  const rating = game.rating ?? 0;

  return (
    <section className="relative w-full xl:h-[660px] aspect-video overflow-hidden min-[400px]:mt-[69.5px] mt-[65.5px]">
      <Image
        src={game.background_image}
        alt={game.name}
        fill
        loading="eager"
        sizes="100vw"
        className="inset-0 object-cover xl:object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950 z-0" />
      <div className="relative max-container h-full flex flex-col justify-end md:pb-14 min-[425px]:pb-8 pb-6">
        {/* Name */}
        <h1 className="xl:text-6xl md:text-5xl sm:text-4xl min-[500px]:text-3xl text-[26px] font-bold md:mb-5 min-[500px]:mb-4 mb-3">
          {game.name}
        </h1>

        <div className="flex items-center flex-wrap md:gap-5 gap-2">
          {/* Ratings */}
          <div className="flex items-center gap-2.5 md:mr-0 mr-3">
            <div className="flex items-center text-white lg:text-[22px] text-xl">
              {Array.from({ length: 5 }).map((_, i) => {
                const starPosition = i + 1;

                if (rating >= starPosition) return <span key={i}>★</span>;
                if (rating >= starPosition - 0.5) return <span key={i}>⯪</span>;
                return <span key={i}>☆</span>;
              })}
            </div>
            <p className="lg:text-lg sm:text-base text-sm font-semibold">
              {game.rating.toFixed(1)}
            </p>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2.5 md:mr-0 mr-3">
            <Calendar className="lg:size-[22px] sm:size-5 size-4" />
            <p className="lg:text-lg sm:text-base text-sm font-medium">
              {new Date(game.released).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Developers */}
          {game.developers.length > 0 && (
            <div className="flex items-center gap-2.5">
              <UsersIcon className="lg:size-[22px] sm:size-5 size-4" />
              {game.developers.map((d, index) => (
                <div
                  key={index}
                  className="flex items-center lg:text-lg sm:text-base text-sm font-medium"
                >
                  <p>{d.name}</p>
                  {index < game.developers.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameBanner;
