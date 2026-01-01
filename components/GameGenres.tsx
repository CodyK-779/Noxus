import { GenreResults, RAWGResponse } from "@/actions/genres-action";
import Image from "next/image";

interface Props {
  genres: RAWGResponse<GenreResults>;
}

const GameGenres = ({ genres }: Props) => {
  return (
    <div className="hidden min-[768px]:grid grid-cols-3">
      {/* Genre Column 1 */}
      <div className="flex flex-col border-r px-2">
        {genres.results.slice(0, 6).map((genre) => (
          <div
            key={genre.id}
            className="flex items-center gap-4 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200"
          >
            <div className="relative lg:size-14 size-12 rounded overflow-hidden">
              <Image
                src={genre.image_background}
                alt={genre.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="lg:text-base text-sm font-semibold">{genre.name}</p>
              <p className="font-medium lg:text-sm text-[13px]">
                Game Count: {genre.games_count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Genre Column 2 */}
      <div className="flex flex-col border-r lg:px-2 px-1.5">
        {genres.results.slice(6, 12).map((genre) => (
          <div
            key={genre.id}
            className="flex items-center gap-4 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
          >
            <div className="relative lg:size-14 size-12 rounded overflow-hidden">
              <Image
                src={genre.image_background}
                alt={genre.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="lg:text-base text-sm font-semibold">{genre.name}</p>
              <p className="font-medium lg:text-sm text-[13px]">
                Game Count: {genre.games_count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Genre Column 3 */}
      <div className="flex flex-col px-2">
        {genres.results.slice(12, 18).map((genre) => (
          <div
            key={genre.id}
            className="flex items-center gap-4 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200"
          >
            <div className="relative lg:size-14 size-12 rounded overflow-hidden">
              <Image
                src={genre.image_background}
                alt={genre.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="lg:text-base text-sm font-semibold">{genre.name}</p>
              <p className="font-medium lg:text-sm text-[13px]">
                Game Count: {genre.games_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGenres;
