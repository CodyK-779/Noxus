"use client";

import { useMenu } from "./MenuProvider";
import { Suspense, useEffect } from "react";
import RecentSearches from "./RecentSearches";
import MBSearchSuggestions from "./MBSearchSuggestions";

const MBSearchResults = () => {
  const { openSearch, search } = useMenu();

  useEffect(() => {
    if (openSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openSearch]);

  return (
    <div
      className={`fixed inset-0 min-[350px]:top-[70px] top-[65px] bg-neutral-950 z-20 min-[580px]:hidden ${!openSearch && "hidden"}`}
    >
      <div className="h-full overflow-auto pb-10">
        <Suspense
          fallback={
            <p className="max-container font-bold">No Recent Searches</p>
          }
        >
          {search ? <MBSearchSuggestions /> : <RecentSearches />}
        </Suspense>
      </div>
    </div>
  );
};

export default MBSearchResults;
