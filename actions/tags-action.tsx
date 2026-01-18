"use server";

import { RAWGResponse } from "@/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface TagType {
  id: number;
  name: string;
}

export async function getTags(): Promise<RAWGResponse<TagType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/tags?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["tags"],
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch tags");

  return res.json();
}
