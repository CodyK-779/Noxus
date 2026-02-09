"use client";

import React, { useState } from "react";
import {
  Play,
  Monitor,
  Calendar,
  Star,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  Gamepad2,
  Terminal,
} from "lucide-react";
import {
  GameDetails,
  GamePlatforms,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";

interface GamePageProps {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

// --- Components ---

const MetacriticBadge = ({ score }: { score: number }) => {
  let color = "border-green-500 text-green-400";
  if (score < 75) color = "border-yellow-500 text-yellow-400";
  if (score < 50) color = "border-red-500 text-red-400";

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${color} font-bold bg-black/50 backdrop-blur-sm`}
    >
      {score}
    </div>
  );
};

const RequirementsSection = ({ platforms }: { platforms: GamePlatforms[] }) => {
  const [activeTab, setActiveTab] = useState("minimum");

  // Filter only PC requirements for this view usually, or mapping the first available
  const pcPlatform = platforms.find((p) => p.platform.slug === "pc");

  if (!pcPlatform || !pcPlatform.requirements) return null;

  return (
    <div className="mt-8 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Terminal size={20} /> System Requirements
      </h3>

      <div className="flex gap-4 mb-4 border-b border-zinc-700">
        <button
          onClick={() => setActiveTab("minimum")}
          className={`pb-2 text-sm font-medium transition-colors ${activeTab === "minimum" ? "text-blue-400 border-b-2 border-blue-400" : "text-zinc-400 hover:text-white"}`}
        >
          Minimum
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`pb-2 text-sm font-medium transition-colors ${activeTab === "recommended" ? "text-blue-400 border-b-2 border-blue-400" : "text-zinc-400 hover:text-white"}`}
        >
          Recommended
        </button>
      </div>

      <div className="text-sm text-zinc-300 leading-relaxed font-mono whitespace-pre-line">
        {activeTab === "minimum"
          ? pcPlatform.requirements.minimum || "No minimum requirements listed."
          : pcPlatform.requirements.recommended ||
            "No recommended requirements listed."}
      </div>
    </div>
  );
};

export default function Gemini({ game, screenshots, trailers }: GamePageProps) {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeMedia, setActiveMedia] = useState(
    trailers.results[0]?.data.max || screenshots.results[0]?.image,
  );
  const [isVideo, setIsVideo] = useState(trailers.results.length > 0);

  const handleMediaSelect = (url: string, isVid: boolean) => {
    setActiveMedia(url);
    setIsVideo(isVid);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* --- Hero Background --- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent z-10" />
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-full object-cover opacity-60 blur-sm scale-105"
        />

        <div className="absolute bottom-0 left-0 z-20 container mx-auto px-4 pb-12 flex flex-col gap-4">
          {/* Breadcrumbs / Meta */}
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-blue-400">
            <span>
              {new Date(game.released).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            <span>{game.developers[0]?.name}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
            {game.name}
          </h1>

          <div className="flex items-center gap-4 mt-2">
            {game.metacritic && <MetacriticBadge score={game.metacritic} />}
            <div className="flex items-center gap-1 text-yellow-400">
              <Star fill="currentColor" size={20} />
              <span className="text-xl font-bold text-white">
                {game.rating}
              </span>
              <span className="text-zinc-500 text-sm">/ 5</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- Main Content (Left Column) --- */}
          <div className="lg:col-span-8 space-y-10">
            {/* Media Gallery */}
            <div className="space-y-4">
              <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800 relative group">
                {isVideo ? (
                  <video
                    src={activeMedia}
                    controls
                    className="w-full h-full object-cover"
                    poster={trailers.results[0]?.preview}
                  />
                ) : (
                  <img
                    src={activeMedia}
                    alt="Active Media"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
                {trailers.results.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleMediaSelect(t.data.max, true)}
                    className={`relative flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all snap-start ${isVideo && activeMedia === t.data.max ? "border-blue-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={t.preview}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play
                        size={20}
                        className="fill-white text-white drop-shadow-md"
                      />
                    </div>
                  </button>
                ))}
                {screenshots.results.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleMediaSelect(s.image, false)}
                    className={`relative flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all snap-start ${!isVideo && activeMedia === s.image ? "border-blue-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={s.image}
                      alt="Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">
                About the Game
              </h2>
              <div
                className={`relative overflow-hidden transition-all duration-500 ${isDescExpanded ? "max-h-full" : "max-h-48"}`}
              >
                <p className="text-zinc-300 leading-7 text-lg whitespace-pre-line">
                  {game.description ||
                    game.description.replace(/(<([^>]+)>)/gi, "")}
                </p>
                {!isDescExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#121212] to-transparent" />
                )}
              </div>
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                {isDescExpanded ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>

            {/* System Requirements */}
            <RequirementsSection platforms={game.platforms} />

            {/* Tags Cloud */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {game.tags.slice(0, 10).map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full hover:bg-zinc-700 transition-colors cursor-default"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- Sidebar (Right Column) --- */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-6 space-y-6">
              {/* Logo / Title Small (Visible on scroll usually, simplified here) */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">Free</span>{" "}
                  {/* Mock Price */}
                  <span className="px-2 py-1 bg-blue-600 text-xs font-bold rounded uppercase">
                    Base Game
                  </span>
                </div>

                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg mb-3 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  Download Now
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
                    <Share2 size={18} /> Share
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
                    <Heart size={18} /> Wishlist
                  </button>
                </div>

                {/* Meta Grid */}
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-500">Developer</span>
                    <span className="text-zinc-200 font-medium">
                      {game.developers.map((d) => d.name).join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-500">Release Date</span>
                    <span className="text-zinc-200 font-medium">
                      {new Date(game.released).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-500">Platform</span>
                    <div className="flex gap-2 text-zinc-200">
                      {game.platforms.map((p) =>
                        p.platform.slug === "pc" ? (
                          <Monitor key={p.platform.id} size={16} />
                        ) : p.platform.slug === "playstation" ? (
                          <Gamepad2 key={p.platform.id} size={16} />
                        ) : (
                          <span key={p.platform.id} className="text-xs">
                            {p.platform.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-md">
                <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-4">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <a
                      href={`#${genre.name}`}
                      key={genre.name}
                      className="text-zinc-300 hover:text-white underline decoration-zinc-600 hover:decoration-blue-500 underline-offset-4 transition-all"
                    >
                      {genre.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
