import { GenreResults } from "@/actions/genres-action";
import Image from "next/image";

interface Props {
  border?: boolean;
  padding: string;
  genres: GenreResults[];
}

const MBGenreList = ({ border, padding, genres }: Props) => {
  return (
    <div
      className={`flex flex-col ${
        border ? "border-r border-neutral-700" : ""
      } ${padding}`}
    >
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="flex items-center min-[400px]:gap-4 gap-3 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
        >
          <div className="relative min-[400px]:size-14 size-12 rounded overflow-hidden">
            <Image
              src={genre.image_background}
              alt={genre.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="min-[400px]:text-base text-sm font-semibold">
              {genre.name}
            </p>
            <p className="font-medium min-[400px]:text-sm text-[13px]">
              Game Count: {genre.games_count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MBGenreList;
