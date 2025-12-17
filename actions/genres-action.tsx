"use server";

import { cacheLife } from "next/cache";

export async function getGenres() {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        revalidate: 3600,
        tags: ["genres"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json();
}
