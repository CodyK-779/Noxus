"use client";

import { metacriticData } from "@/data/metascore-data";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const getScoreLabel = (value: string) => {
  if (!value) return "";

  return metacriticData.find((m) => m.value === value)?.score || "";
};

const MetacriticFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedScore = searchParams.get("metascore") || "";

  const [metaScore, setMetaScore] = useState({
    score: getScoreLabel(selectedScore),
    value: selectedScore,
  });

  const handleSearch = (score: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (metaScore.value !== value) {
      params.set("page", "1");
      params.set("metascore", value);
      setMetaScore({ score, value });
    } else {
      params.set("page", "1");
      params.delete("metascore");
      setMetaScore({ score: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:min-w-36 max-[639px]:w-full">
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-4 min-[350px]:text-sm text-xs ${metaScore.score === "" ? "text-muted-foreground" : ""} `}
        >
          <p>{metaScore.score !== "" ? metaScore.score : "Filter Scores"}</p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Scores</DropdownMenuLabel>
          {metacriticData.map((m) => (
            <DropdownMenuItem
              key={m.score}
              className="flex items-center justify-between gap-2"
              onClick={() => handleSearch(m.score, m.value)}
            >
              {m.score}
              {metaScore.value === m.value && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MetacriticFilter;
