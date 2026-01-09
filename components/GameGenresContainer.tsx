import { getGenres } from "@/actions/genres-action";
import GameGenres from "./GameGenres";
import SectionHeaderTwo from "./SectionHeaderTwo";
import MBGameGenres from "./MBGameGenres";

const GameGenresContainer = async () => {
  const genres = await getGenres();

  return (
    <section className="max-container mt-24">
      <SectionHeaderTwo header="Discover Different Genres" />
      <GameGenres genres={genres} />
      <MBGameGenres genres={genres} />
    </section>
  );
};

export default GameGenresContainer;
