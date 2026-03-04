"use server";

import { RAWGResponse } from "@/components/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface TagType {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

export async function getTags(): Promise<RAWGResponse<TagType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/tags?page_size=18&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["tags"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch tags");

  return res.json();
}
