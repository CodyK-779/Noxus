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

const GenreFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [genre, setGenre] = useState({
    name: "",
    value: "",
  });

  const handleSearch = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (genre.value !== value) {
      params.set("genre", value);
      setGenre({ name, value });
    } else {
      params.delete("genre");
      setGenre({ name: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="min-w-36">
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-2 ${genre.name === "" ? "text-muted-foreground" : ""} `}
        >
          <p>{genre.name !== "" ? genre.name : "Select Genre"}</p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Genres</DropdownMenuLabel>
        <DropdownMenuGroup>
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
