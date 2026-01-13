"use server";

import { RAWGResponse } from "@/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface PlatformsType {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string | null;
}

export async function getPlatforms(): Promise<RAWGResponse<PlatformsType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["platforms"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Platforms");
  }

  return res.json();
}
