import { ParentPlatforms } from "@/actions/platforms-action";
import PlatformFilter from "./dropdowns/PlatformFilter";
import { RAWGResponse } from "@/components/utils/interfaceTypes";
import DateFilter from "./dropdowns/DateFilter";
import TagFilter from "./dropdowns/TagFilter";
import MetacriticFilter from "./MetacriticFilter";

interface Props {
  platforms: RAWGResponse<ParentPlatforms>;
}

const GenrePageFilters = ({ platforms }: Props) => {
  return (
    <div className="max-container mt-6">
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 min-[375px]:mb-8 mb-6">
        <PlatformFilter platforms={platforms} />
        <DateFilter />
        <TagFilter />
        <MetacriticFilter />
      </div>
      <hr />
    </div>
  );
};

export default GenrePageFilters;
