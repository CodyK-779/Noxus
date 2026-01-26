import DateFilter from "./dropdowns/DateFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import MetacriticFilter from "./MetacriticFilter";
import TagFilter from "./dropdowns/TagFilter";

const PlatformPageFilters = () => {
  return (
    <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-5 mb-4">
      <DateFilter />
      <GenreFilter />
      <TagFilter />
      <MetacriticFilter />
    </div>
  );
};

export default PlatformPageFilters;
