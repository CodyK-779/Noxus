"use client";

import { tagData } from "@/data/tag-data";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const getTagLabel = (value: string) => {
  if (!value) return "";

  return tagData.find((t) => t.id === value)?.name || "";
};

const TagFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedTag = searchParams.get("tag") || "";

  const [tag, setTag] = useState({
    name: getTagLabel(selectedTag),
    value: selectedTag,
  });

  const handleSearch = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tag.value !== value) {
      params.set("page", "1");
      params.set("tag", value);
      setTag({ name, value });
    } else {
      params.set("page", "1");
      params.delete("tag");
      setTag({ name: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:min-w-36 max-[639px]:w-full">
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-4 min-[350px]:text-sm text-xs ${tag.name === "" ? "text-muted-foreground" : ""} `}
        >
          <p>{tag.name !== "" ? tag.name : "Filter Tags"}</p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Game Tags</DropdownMenuLabel>
          {tagData.map((t) => (
            <DropdownMenuItem
              key={t.id}
              className="flex items-center justify-between gap-2"
              onClick={() => handleSearch(t.name, t.id)}
            >
              {t.name}
              {tag.value === t.id && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TagFilter;
