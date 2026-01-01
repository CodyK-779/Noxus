import { GenreResults, RAWGResponse } from "@/actions/genres-action";
import GameGenres from "./GameGenres";
import SectionHeaderTwo from "./SectionHeaderTwo";
import MBGameGenres from "./MBGameGenres";

interface Props {
  genres: RAWGResponse<GenreResults>;
}

const GameGenresContainer = ({ genres }: Props) => {
  return (
    <section className="max-container mt-24">
      <SectionHeaderTwo header="Discover Different Genres" />
      <GameGenres genres={genres} />
      <MBGameGenres genres={genres} />
    </section>
  );
};

export default GameGenresContainer;
