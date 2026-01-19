import DateFilter from "./dropdowns/DateFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import MetacriticFilter from "./MetacriticFilter";
import TagFilter from "./dropdowns/TagFilter";

const PlatformFilters = () => {
  return (
    <>
      <div className="flex items-center gap-3 mt-10 mb-2">
        <DateFilter />
        <GenreFilter />
        <TagFilter />
        <MetacriticFilter />
      </div>
      <p className="text-xs font-medium text-neutral-400 mb-6">
        Note: Select the same filter value to cancel
      </p>
      <hr className="h-0.5 bg-neutral-800" />
    </>
  );
};

export default PlatformFilters;
