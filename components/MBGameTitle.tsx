import { GameDetails } from "@/actions/games-action";
import { Calendar, UsersIcon } from "lucide-react";

interface Props {
  game: GameDetails;
}

const MBGameTitle = ({ game }: Props) => {
  const rating = game.rating ?? 0;

  return (
    <section className="max-container sm:hidden mt-4">
      <h1 className="xl:text-6xl md:text-5xl sm:text-4xl min-[500px]:text-3xl min-[400px]:text-[26px] min-[350px]:text-2xl text-[22px] font-bold md:mb-5 min-[500px]:mb-2.5 min-[375px]:mb-1.5 mb-1">
        {game.name}
      </h1>

      <div className="flex items-center flex-wrap md:gap-5 min-[375px]:gap-2 gap-1.5">
        {/* Ratings */}
        <div className="flex items-center gap-2.5 md:mr-0 mr-3">
          <div className="flex items-center text-white lg:text-[22px] min-[375px]:text-xl text-lg">
            {Array.from({ length: 5 }).map((_, i) => {
              const starPosition = i + 1;

              if (rating >= starPosition) return <span key={i}>★</span>;
              if (rating >= starPosition - 0.5)
                return (
                  <span key={i} className="relative inline-block">
                    <span className="text-neutral-300">☆</span>
                    <span
                      className="absolute left-0 top-0 overflow-hidden text-white"
                      style={{ width: "48%" }}
                    >
                      ★
                    </span>
                  </span>
                );
              return <span key={i}>☆</span>;
            })}
          </div>
          <p className="lg:text-lg sm:text-base min-[375px]:text-sm text-[13px] font-semibold">
            {game.rating.toFixed(1)}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2.5 md:mr-0 mr-3">
          <Calendar className="lg:size-[22px] sm:size-5 min-[375px]:size-4 size-[15px]" />
          <p className="lg:text-lg sm:text-base min-[375px]:text-sm text-[13px] font-medium">
            {new Date(game.released).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Developers */}
        {game.developers.length > 0 && (
          <div className="flex items-center flex-wrap min-[350px]:gap-2.5 gap-2 overflow-hidden">
            <UsersIcon className="lg:size-[22px] sm:size-5 min-[375px]:size-4 size-[15px] shrink-0" />
            {game.developers.map((d, index) => (
              <div
                key={index}
                className="flex lg:text-lg sm:text-base min-[375px]:text-sm text-[13px] font-medium"
              >
                <p>
                  {d.name}
                  {index < game.developers.length - 1 && <span>,</span>}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MBGameTitle;
