import { GenreResults, RAWGResponse } from "@/actions/genres-action";
import GenreList from "./GenreList";

interface Props {
  genres: RAWGResponse<GenreResults>;
}

const GameGenres = ({ genres }: Props) => {
  return (
    <div className="hidden min-[768px]:grid grid-cols-3">
      {/* Genre Column 1 */}
      <GenreList border padding="px-2" genres={genres.results.slice(0, 6)} />

      {/* Genre Column 2 */}
      <GenreList
        border
        padding="lg:px-2 px-1.5"
        genres={genres.results.slice(6, 12)}
      />

      {/* Genre Column 3 */}
      <GenreList padding="px-2" genres={genres.results.slice(12, 18)} />
    </div>
  );
};

export default GameGenres;
