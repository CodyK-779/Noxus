"use client";

import { ParentPlatforms } from "@/actions/platforms-action";
import { RAWGResponse } from "@/components/utils/interfaceTypes";
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
import { Button } from "../ui/button";
import { Check, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  platforms: RAWGResponse<ParentPlatforms>;
  browseFilter?: boolean;
}

const count = 40;

const PlatformFilter = ({ platforms, browseFilter }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedPlatform = searchParams.get("platform") || "";

  const getPlatformLabel = (value: string) => {
    if (!value) return "";

    const platformId = Number(value);

    for (const parent of platforms.results) {
      const match = parent.platforms.find((p) => p.id === platformId);

      if (parent.id === platformId) return parent.name;
      if (match) return match.name;
    }

    return "";
  };

  const [platformValue, setPlatformValue] = useState({
    label: getPlatformLabel(selectedPlatform),
    value: selectedPlatform,
  });

  const handleSearch = (label: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (platformValue.value !== value) {
      params.set("page", "1");
      params.set("platform", value);
      setPlatformValue({ label, value });
    } else {
      params.set("page", "1");
      params.delete("platform");
      setPlatformValue({ label: "", value: "" });
    }

    router.push(`?${params.toString()}`, { scroll: browseFilter });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={`${browseFilter ? "w-full" : "sm:min-w-36"} max-[639px]:w-full`}
      >
        <Button
          variant="outline"
          className={`flex items-center justify-between gap-4 min-[350px]:text-sm text-xs ${platformValue.label === "" ? "text-muted-foreground" : ""} `}
        >
          <p className="truncate">
            {platformValue.label !== ""
              ? platformValue.label
              : "Filter Platform"}
          </p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Platforms</DropdownMenuLabel>
          {platforms.results.map((p) =>
            p.platforms.length === 1 ? (
              <DropdownMenuItem
                key={p.platforms[0].id}
                className="flex items-center justify-between gap-2"
                onClick={() =>
                  handleSearch(p.platforms[0].name, String(p.platforms[0].id))
                }
              >
                {p.platforms[0].name}
                {platformValue.value === String(p.platforms[0].id) && (
                  <Check className="size-4" />
                )}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={p.platforms[0].id}>
                <DropdownMenuSubTrigger>
                  {p.platforms[0].name}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="w-44">
                    {p.platforms.map((platform) => (
                      <DropdownMenuItem
                        key={platform.id}
                        className="flex items-center justify-between gap-2"
                        onClick={() =>
                          handleSearch(platform.name, String(platform.id))
                        }
                      >
                        {platform.name}
                        {platformValue.value === String(platform.id) && (
                          <Check className="size-4" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ),
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PlatformFilter;
