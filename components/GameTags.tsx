import { TagType } from "@/actions/tags-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import TagList from "./TagList";

interface Props {
  tags: RAWGResponse<TagType>;
}

const GameTags = ({ tags }: Props) => {
  return (
    <div className="hidden min-[768px]:grid grid-cols-3">
      {/* Genre Column 1 */}
      <TagList border padding="px-2" tags={tags.results.slice(0, 6)} />

      {/* Genre Column 2 */}
      <TagList
        border
        padding="lg:px-2 px-1.5"
        tags={tags.results.slice(6, 12)}
      />

      {/* Genre Column 3 */}
      <TagList padding="px-2" tags={tags.results.slice(12, 18)} />
    </div>
  );
};

export default GameTags;
