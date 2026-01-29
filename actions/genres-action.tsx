"use server";

import { RAWGResponse } from "@/components/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface GenreResults {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

interface GenreDetails {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export async function getGenres(): Promise<RAWGResponse<GenreResults>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/genres?page_size=18&key=${process.env.RAWG_API_KEY}`,
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

export async function getGenreDetails(genreId: number): Promise<GenreDetails> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/genres/${genreId}?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["genre", "details"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch genre details");

  return res.json();
}
