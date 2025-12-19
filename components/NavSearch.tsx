"use client";

import { Search, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useMenu } from "./MenuProvider";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const { closeSearch, setCloseSearch } = useMenu();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const query = inputRef.current?.value || "";

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
      setSearch("");
    }

    router.push(`/browse?${params.toString()}`);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("search");
    setSearch("");

    if (inputRef.current) inputRef.current.value = "";

    router.push(pathname, { scroll: false });
  };

  return (
    <div className="flex items-center">
      <div className="hidden min-[560px]:block cm:w-50 lg:w-72">
        <form className="relative" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Games"
            enterKeyHint="search"
            className="w-full rounded-full font-medium text-[15px] bg-neutral-800 text-neutral-100 pl-4 pr-10 py-2 focus:outline-none"
          />

          {search ? (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute top-[9.4px] right-3 text-neutral-200"
            >
              <XIcon className="size-[22px]" />
            </button>
          ) : (
            <Search
              onClick={handleSubmit}
              className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-neutral-200 cursor-pointer"
            />
          )}
        </form>
      </div>
      <div className="min-[560px]:hidden cursor-pointer">
        <Search className="size-6" />
      </div>
    </div>
  );
};

export default NavSearch;
