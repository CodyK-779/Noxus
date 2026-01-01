import { GenreResults, RAWGResponse } from "@/actions/genres-action";
import GameGenres from "./GameGenres";
import GameGenresHeader from "./GameGenresHeader";

interface Props {
  genres: RAWGResponse<GenreResults>;
}

const GameGenresContainer = ({ genres }: Props) => {
  return (
    <section className="max-container mt-24">
      <GameGenresHeader />
      <GameGenres genres={genres} />
    </section>
  );
};

export default GameGenresContainer;
