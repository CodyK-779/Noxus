"use client";

import { useMenu } from "./MenuProvider";
import { useEffect } from "react";
import RecentSearches from "./RecentSearches";

const MBSearchResults = () => {
  const { openSearch, search, setSearch } = useMenu();

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
      className={`fixed inset-0 top-[70px] bg-neutral-950 z-20 min-[580px]:hidden ${!openSearch && "hidden"}`}
    >
      <RecentSearches />
    </div>
  );
};

export default MBSearchResults;
