"use server";

import { RAWGResponse } from "@/components/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface PlatformsType {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string | null;
}

export interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
  platforms: ChildPlatforms[];
}

interface ChildPlatforms {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface PlatformDetails {
  id: number;
  name: string;
  games_count: number;
  description: string;
}

export async function getPlatforms(): Promise<RAWGResponse<PlatformsType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/platforms?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["platforms"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Platforms");
  }

  return res.json();
}

export async function getParentPlatforms(): Promise<
  RAWGResponse<ParentPlatforms>
> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/platforms/lists/parents?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["parent", "platforms"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to get Parent Platforms");
  }

  return res.json();
}

export async function getPlatformDetails(id: number): Promise<PlatformDetails> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/platforms/${id}?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["platform", "details"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch platform details");
  }

  return res.json();
}
