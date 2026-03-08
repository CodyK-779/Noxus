import { getTags } from "@/actions/tags-action";
import GameTags from "./GameTags";
import SectionHeaderTwo from "./SectionHeaderTwo";
import MBGameTags from "./MBGameTags";

const GameTagsContainer = async () => {
  const tags = await getTags();

  return (
    <section className="max-container mt-24">
      <SectionHeaderTwo header="Discover Game Tags" />
      <GameTags tags={tags} />
      <MBGameTags tags={tags} />
    </section>
  );
};

export default GameTagsContainer;
