"use client";

import { ArrowLeftIcon, Search } from "lucide-react";
import { useMenu } from "./MenuProvider";
import { FormEvent, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addRecentSearch, getRecentSearches } from "./utils/resendSearches";

const MobileNavSearch = () => {
  const {
    openSearch,
    search,
    setOpenSearch,
    setSearch,
    setRecents,
    mbInputRef,
  } = useMenu();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (openSearch) {
      if (mbInputRef.current) mbInputRef.current.value = "";
      mbInputRef.current?.focus();
    }
  }, [openSearch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const query = mbInputRef.current?.value || "";

    if (query) {
      params.set("search", query);
      router.push(`/browse?${params.toString()}`, { scroll: false });
      addRecentSearch(query);
      setRecents(getRecentSearches());
      setSearch("");
      setOpenSearch(false);
    } else {
      params.delete("search");
      setSearch("");
      router.push(pathname);
    }
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    setSearch("");

    if (mbInputRef.current) {
      mbInputRef.current.value = "";
      mbInputRef.current.focus();
    }
    router.push(pathname, { scroll: false });
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
    setSearch("");
    if (mbInputRef.current) mbInputRef.current.value = "";
  };

  const selectedSearch = searchParams.get("search") || "";

  return (
    <div className="min-[580px]:hidden max-container flex items-center gap-2">
      <div className="cursor-pointer" onClick={handleCloseSearch}>
        <ArrowLeftIcon className="min-[350px]:size-6 size-5" />
      </div>
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          ref={mbInputRef}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Games"
          defaultValue={selectedSearch}
          enterKeyHint="search"
          className="w-full min-[350px]:text-base text-[15px] min-[350px]:py-1.5 py-1 border border-neutral-200 bg-neutral-900 rounded-full min-[350px]:pl-11 pl-9 min-[350px]:pr-11 pr-10 focus:outline-none"
        />
        <Search className="absolute text-neutral-300 min-[350px]:top-[8.5px] top-[9px] min-[350px]:left-3 left-2.5 min-[350px]:size-5 size-4" />
        {search && (
          <div
            className="absolute min-[350px]:top-1.5 top-[5.5px] min-[350px]:right-2 right-[7px] cursor-pointer"
            onClick={clearSearch}
          >
            <div className="min-[350px]:size-6 size-5 font-orbitron rounded-full min-[350px]:text-sm text-xs bg-neutral-700 grid place-content-center">
              x
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MobileNavSearch;
