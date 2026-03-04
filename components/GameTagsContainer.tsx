import { TagType } from "@/actions/tags-action";
import GameTags from "./GameTags";
import SectionHeaderTwo from "./SectionHeaderTwo";
import { RAWGResponse } from "./utils/interfaceTypes";
import MBGameTags from "./MBGameTags";

interface Props {
  tags: RAWGResponse<TagType>;
}

const GameTagsContainer = ({ tags }: Props) => {
  return (
    <section className="max-container mt-24">
      <SectionHeaderTwo header="Discover Game Tags" />
      <GameTags tags={tags} />
      <MBGameTags tags={tags} />
    </section>
  );
};

export default GameTagsContainer;
