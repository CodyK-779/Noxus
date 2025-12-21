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

export interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  platforms: GamePlatforms[];
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  rating: number;
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

export async function getGameDetails(): Promise<GameDetails> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `https://api.rawg.io/api/games/ghost-of-yotei?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["games", "details"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game details");
  }

  return res.json();
}
