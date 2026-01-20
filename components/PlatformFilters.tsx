import DateFilter from "./dropdowns/DateFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import MetacriticFilter from "./MetacriticFilter";
import TagFilter from "./dropdowns/TagFilter";

const PlatformFilters = () => {
  return (
    <>
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-5 mb-4">
        <DateFilter />
        <GenreFilter />
        <TagFilter />
        <MetacriticFilter />
      </div>
      <p className="text-xs font-medium md:text-start text-center text-neutral-400 mb-6">
        Note: Select the same filter value to cancel
      </p>
      <hr className="h-0.5 bg-neutral-800" />
    </>
  );
};

export default PlatformFilters;
