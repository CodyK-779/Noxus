"use server";

import { RAWGResponse } from "@/components/utils/interfaceTypes";
import { cacheLife } from "next/cache";

export interface GamePlatforms {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  requirements: {
    minimum: string;
    recommended: string;
  };
}

export interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: GamePlatforms[];
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  rating: number;
  metacritic: number;
  released: Date;
  platforms: GamePlatforms[];
  genres: { name: string }[];
  tags: { name: string }[];
  developers: { name: string }[];
}

export interface GameScreenShots {
  id: number;
  image: string;
}

export interface GameTrailers {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export async function getGames(): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/games?&page_size=50&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["games"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}

export async function getGameDetails(slug: string): Promise<GameDetails> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/games/${slug}?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["games", "details"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game details");
  }

  return res.json();
}

export async function getNewGames(
  page?: string,
  platformId?: string,
  genreId?: string,
  tagId?: string,
  score?: string,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const dates = `${formatDate(thirtyDaysAgo)},${formatDate(today)}`;

  const res = await fetch(
    `${process.env.RAWG_URL}/games?${platformId && `&platforms=${platformId}`}${genreId && `&genres=${genreId}`}${tagId && `&tags=${tagId}`}${score && `&metacritic=${score}`}&page=${page ? page : "1"}&page_size=40&dates=${dates}&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["new", "games"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch new games");
  }

  return res.json();
}

export async function getUpcomingGames(
  page?: string,
  platformId?: string,
  genreId?: string,
  tagId?: string,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("days");

  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 6);

  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  const dates = `${formatDate(today)},${formatDate(nextMonth)}`;

  const res = await fetch(
    `${process.env.RAWG_URL}/games?${platformId && `&platforms=${platformId}`}${genreId && `&genres=${genreId}`}${tagId && `&tags=${tagId}`}&dates=${dates}&page=${page ? page : "1"}&page_size=40&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["upcoming", "games"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to get upcoming games.");
  }

  return res.json();
}

export async function getHighRatedGames(
  dates?: string,
  platformId?: string,
  genreId?: string,
  tagId?: string,
  page?: string,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/games?metacritic=80,100${dates && `&dates=${dates}`}${platformId && `&platforms=${platformId}`}${genreId && `&genres=${genreId}`}${tagId && `&tags=${tagId}`}&page=${page ? page : "1"}&page_size=40&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["top", "games"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to get High rated games");
  }

  return res.json();
}

export async function getPlatformGames(
  platformId: number,
  dates?: string,
  genreId?: string,
  tagId?: string,
  score?: string,
  page?: string,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/games?platforms=${platformId}&dates=${dates}${genreId && `&genres=${genreId}`}${tagId && `&tags=${tagId}`}&metacritic=${score}&page=${page ? page : "1"}&page_size=40&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["platform", "games"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to get Platform Games");
  }

  return res.json();
}

export async function getGenreGames(
  genreId: number,
  platformId?: string,
  dates?: string,
  tagId?: string,
  score?: string,
  page?: string,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `${process.env.RAWG_URL}/games?${platformId && `&platforms=${platformId}`}${dates && `&dates=${dates}`}${tagId && `&tags=${tagId}`}${score && `&metacritic=${score}`}&genres=${genreId}&page=${page ? page : "1"}&page_size=40&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["genre", "games"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch Genre Games");

  return res.json();
}

export async function searchSuggestions(
  search: string,
  size: number,
): Promise<RAWGResponse<GamesType>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/games?search=${encodeURIComponent(search)}&page_size=${size}&key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["game", "suggestions"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch search suggestions");

  return res.json();
}

export async function getGameScreenShots(
  slug: string,
): Promise<RAWGResponse<GameScreenShots>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/games/${slug}/screenshots?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["game", "screenshots"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch game screenshots");

  return res.json();
}

export async function getGameTrailers(
  slug: string,
): Promise<RAWGResponse<GameTrailers>> {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `${process.env.RAWG_URL}/games/${slug}/movies?key=${process.env.RAWG_API_KEY}`,
    {
      next: {
        tags: ["game", "trailers"],
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch game trailers");

  return res.json();
}
