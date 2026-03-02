"use client";

import { ParentPlatforms } from "@/actions/platforms-action";
import DateFilter from "./dropdowns/DateFilter";
import GenreFilter from "./dropdowns/GenreFilter";
import PlatformFilter from "./dropdowns/PlatformFilter";
import TagFilter from "./dropdowns/TagFilter";
import MetacriticFilter from "./MetacriticFilter";
import { RAWGResponse } from "./utils/interfaceTypes";
import { Search, X } from "lucide-react";
import { useMenu } from "./MenuProvider";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  platforms: RAWGResponse<ParentPlatforms>;
}

const BrowseFilter = ({ platforms }: Props) => {
  const { browseSearch, filterRef, setBrowseSearch } = useMenu();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!browseSearch) return;

    const params = new URLSearchParams(searchParams.toString());

    if (params.has("search")) {
      params.delete("search");

      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [browseSearch]);

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    const search = searchParams.get("search");

    if (search) {
      params.delete("search");
      setBrowseSearch("");
      if (filterRef.current) filterRef.current.value = "";
      router.push("/browse", { scroll: false });
    }

    setBrowseSearch("");
    if (filterRef.current) filterRef.current.value = "";
  };

  return (
    <div className="sticky h-fit lg:block hidden col-span-1 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 py-4 px-3 mt-6">
      <h3 className="text-xl font-semibold">Filters</h3>
      <div className="relative mt-5">
        <input
          type="text"
          onChange={(e) => setBrowseSearch(e.target.value)}
          ref={filterRef}
          placeholder="Game name"
          className="w-full text-sm bg-neutral-800 text-neutral-100 pl-8 pr-8 py-2 focus:outline-none rounded-md"
        />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5 text-neutral-200" />

        {browseSearch && (
          <button onClick={clearSearch}>
            <X className="absolute right-2 top-1/2 -translate-y-1/2 size-3.5 text-neutral-200 cursor-pointer" />
          </button>
        )}
      </div>

      <hr className="my-6" />

      <div className="flex flex-col mt-5 gap-3">
        <PlatformFilter platforms={platforms} />
        <DateFilter />
        <GenreFilter />
        <TagFilter />
        <MetacriticFilter />
      </div>
    </div>
  );
};

export default BrowseFilter;
