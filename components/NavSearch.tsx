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
  const { openSearch, setOpenSearch } = useMenu();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const query = inputRef.current?.value || "";

    if (query) {
      params.set("search", query);
      router.push(`/browse?${params.toString()}`);
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

    if (inputRef.current) inputRef.current.value = "";

    router.push(pathname, { scroll: false });
  };

  const selectedSearch = searchParams.get("search") || "";

  return (
    <div className="flex items-center">
      <div className="hidden min-[580px]:block cm:w-50 lg:w-72">
        <form className="relative" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => setSearch(e.target.value)}
            defaultValue={selectedSearch}
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
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-neutral-200 cursor-pointer" />
          )}
        </form>
      </div>
      <div
        className="min-[580px]:hidden cursor-pointer"
        onClick={() => setOpenSearch(true)}
      >
        <Search className="min-[400px]:size-6 size-5" />
      </div>
    </div>
  );
};

export default NavSearch;
