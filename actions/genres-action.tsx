"use server";

import { RAWGResponse } from "@/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface GenreResults {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

export async function getGenres(): Promise<RAWGResponse<GenreResults>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `https://api.rawg.io/api/genres?page_size=18&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["genres"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json() as Promise<RAWGResponse<GenreResults>>;
}
