"use server";

import { cacheLife } from "next/cache";

interface GenreResults {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

interface RAWGResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export async function getGenres(): Promise<RAWGResponse<GenreResults>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["genres"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json() as Promise<RAWGResponse<GenreResults>>;
}
