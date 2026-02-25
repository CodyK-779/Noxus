"use server";

import { RAWGResponse } from "@/components/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface StoresType {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export async function getStores(): Promise<RAWGResponse<StoresType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/stores?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["stores"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch game stores");

  return res.json();
}
