"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { dates } from "@/data/date-data";
import { useRouter, useSearchParams } from "next/navigation";

const getYearFromRange = (value: string) => {
  if (!value) return "";

  for (const group of Object.values(dates)) {
    const match = group.find((d) => d.range === value);
    if (match) return match.date;
  }

  return "";
};

const DateFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedDate = searchParams.get("date") || "";

  const [releaseDate, setReleaseDate] = useState({
    year: getYearFromRange(selectedDate) || "",
    value: selectedDate,
  });

  const handleSearch = (date: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== releaseDate.value) {
      params.set("page", "1");
      params.set("date", value);
      setReleaseDate({ year: date, value: value });
    } else {
      params.set("page", "1");
      params.delete("date");
      setReleaseDate({ year: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:min-w-36 max-[639px]:w-full">
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-4 min-[350px]:text-sm text-xs ${releaseDate.year === "" ? "text-muted-foreground" : ""} `}
        >
          <p>{releaseDate.year !== "" ? releaseDate.year : "Release Dates"}</p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Dates</DropdownMenuLabel>
          {/* 1st Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>2020-2026</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["2020-2026"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* 2nd Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>2010-2019</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["2010-2019"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* 3rd Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>2000-2009</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["2000-2009"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* 4th Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>1990-1999</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["1990-1999"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* 5th Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>1980-1989</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["1980-1989"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* 6th Date Range */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>1970-1979</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {dates["1970-1979"].map((d) => (
                  <DropdownMenuItem
                    key={d.date}
                    className="flex items-center justify-between gap-2"
                    onClick={() => handleSearch(d.date, d.range)}
                  >
                    {d.date}
                    {releaseDate.value === d.range && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DateFilter;
