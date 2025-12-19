"use server";

import { cacheLife } from "next/cache";
import { RAWGResponse } from "./genres-action";

interface GamePlatforms {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  platforms: GamePlatforms[];
}

export async function getGames(): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `https://api.rawg.io/api/games?page_size=50&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["games"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json();
}
