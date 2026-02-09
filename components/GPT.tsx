"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";

interface Props {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

export default function GPT({ game, screenshots, trailers }: Props) {
  // 🛡 Normalize trailers to a safe array
  const safeTrailers: GameTrailers[] = Array.isArray(trailers) ? trailers : [];

  // 🛡 Pick first trailer or null
  const trailer: GameTrailers | null =
    safeTrailers.length > 0 ? safeTrailers[0] : null;

  // 🛡 Safely resolve video source
  const trailerSrc: string | null =
    trailer &&
    trailer.data &&
    typeof trailer.data === "object" &&
    (trailer.data.max || trailer.data[480])
      ? trailer.data.max || trailer.data[480]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* HERO */}
      <section className="relative w-full h-[725px]">
        <Image
          src={game.background_image}
          alt={game.name}
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-6 pb-16 grid gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {game.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                <span>Released {new Date(game.released).getFullYear()}</span>
                <span className="flex items-center gap-1">
                  <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                  {game.rating}
                </span>
                {game.metacritic ? (
                  <span className="rounded bg-green-600/20 px-2 py-0.5 text-green-400">
                    Metacritic {game.metacritic}
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {game.genres.map((g) => (
                  <span
                    key={g.name}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>

            {/* TRAILER */}
            {trailerSrc ? (
              <div className="hidden md:block">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                  <video
                    src={trailerSrc}
                    poster={trailer?.preview}
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-neutral-400">
                Trailer not available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-6 py-16 grid gap-16 lg:grid-cols-3">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <div
              className="prose prose-invert max-w-none text-neutral-300"
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {screenshots.results.map((shot) => (
                <div
                  key={shot.id}
                  className="relative aspect-video overflow-hidden rounded-lg border border-white/10"
                >
                  <Image
                    src={shot.image}
                    alt="Screenshot"
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-4">Available On</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              {game.platforms.map((p) => (
                <li key={p.platform.id}>{p.platform.name}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              {game.developers.map((d) => (
                <li key={d.name}>{d.name}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {game.tags.slice(0, 10).map((t) => (
                <span
                  key={t.name}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

/*
TEST CASES (manual):
1. trailers = undefined → page renders without crash
2. trailers = null → page renders without crash
3. trailers = [] → "Trailer not available" shown
4. trailers[0].data missing → fallback message shown
5. trailers[0].data.max exists → video renders
*/
