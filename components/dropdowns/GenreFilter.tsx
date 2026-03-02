"use client";

import { Check, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { genreData } from "@/data/genre-data";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const getGenreLabel = (value: string) => {
  if (!value) return "";

  return genreData.find((g) => g.id === value)?.name || "";
};

const GenreFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedGenre = searchParams.get("genre") || "";

  const [genre, setGenre] = useState({
    name: getGenreLabel(selectedGenre),
    value: selectedGenre,
  });

  const handleSearch = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (genre.value !== value) {
      params.set("page", "1");
      params.set("genre", value);
      setGenre({ name, value });
    } else {
      params.set("page", "1");
      params.delete("genre");
      setGenre({ name: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:min-w-36 max-[639px]:w-full">
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-4 min-[350px]:text-sm text-xs ${genre.name === "" ? "text-muted-foreground" : ""} `}
        >
          <p className="truncate">
            {genre.name !== "" ? genre.name : "Filter Genre"}
          </p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Genres</DropdownMenuLabel>
          {genreData.map((g) => (
            <DropdownMenuItem
              key={g.id}
              className="flex items-center justify-between gap-2"
              onClick={() => handleSearch(g.name, g.id)}
            >
              {g.name}
              {genre.value === g.id && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreFilter;
