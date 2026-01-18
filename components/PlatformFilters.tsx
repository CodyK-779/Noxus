import DateFilter from "./dropdowns/DateFilter";
import GenreFilter from "./dropdowns/GenreFilter";

const PlatformFilters = () => {
  return (
    <>
      <div className="flex items-center gap-4 mt-10 mb-6">
        <DateFilter />
        <GenreFilter />
      </div>
      <hr className="h-0.5 bg-neutral-800" />
    </>
  );
};

export default PlatformFilters;
