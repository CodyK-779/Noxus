import { getGenres } from "@/actions/genres-action";
import SectionHeaderTwo from "../SectionHeaderTwo";
import GameGenres from "../GameGenres";
import MBGameGenres from "../MBGameGenres";

const GameGenresContainerSkele = async () => {
  const genres = await getGenres();

  return (
    <section className="max-container mt-24">
      <SectionHeaderTwo header="Discover Different Genres" />
      <GameGenres genres={genres} />
      <MBGameGenres genres={genres} />
    </section>
  );
};

export default GameGenresContainerSkele;
