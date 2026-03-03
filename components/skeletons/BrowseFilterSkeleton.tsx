"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Search, SlidersHorizontal, X } from "lucide-react";
import DropdownSkeleton from "./DropdownSkeleton";
import { Button } from "../ui/button";

const dropdowns = [
  "Release Dates",
  "Filter Platform",
  "Filter Genre",
  "Filter Tags",
  "Filter Scores",
];

const BrowseFilterSkeleton = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const isLargeScreen = window.innerWidth < 1024;

    const updateSize = () => {
      setOpen(isLargeScreen);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const clearSearch = () => {
    setSearch("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="lg:hidden fixed right-6 bottom-6 flex items-center justify-center p-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-neutral-600 shadow-lg z-30 group">
          <SlidersHorizontal className="size-4 min-[500px]:size-5 group-hover:rotate-180 transition-transform duration-300" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-w-md mx-auto px-4 w-full">
          <DrawerHeader>
            <DrawerTitle className="md:text-3xl sm:text-2xl text-xl text-center">
              Filters
            </DrawerTitle>
            <DrawerDescription className="md:text-base text-center">
              Find your ideal games with filters
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center justify-center rounded-xl border bg-neutral-900 p-4 mx-4 mt-4">
            <form
              onSubmit={(e: FormEvent) => e.preventDefault()}
              className="relative w-full"
            >
              <input
                type="text"
                placeholder="Search games"
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                className="min-[350px]:text-sm text-[13px] py-2.5 pl-8 pr-8 text-neutral-100 bg-neutral-950 rounded-lg w-full focus:outline-none"
              />
              <Search className="absolute top-1/2 -translate-y-1/2 text-neutral-100 left-2.5 size-3.5" />
              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer"
                >
                  <X className="size-3.5 text-neutral-100" />
                </button>
              )}
            </form>

            <hr className="my-5 w-full border-neutral-700" />

            <div className="space-y-2 w-full">
              {dropdowns.map((d) => (
                <DropdownSkeleton key={d} label={d} size="w-full" />
              ))}
            </div>
          </div>
          <p className="text-center text-xs mt-1 mb-4 text-neutral-400">
            Note: Clear the search in order to cancel.
          </p>

          <DrawerFooter className="space-y-2">
            <Button className="font-semibold">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="font-semibold">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BrowseFilterSkeleton;
