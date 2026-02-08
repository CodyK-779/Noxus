"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  Star,
  Monitor,
  Gamepad,
  Trophy,
  Calendar,
  Users,
  Download,
  ChevronRight,
  Maximize2,
  Heart,
  Share2,
} from "lucide-react";
import {
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";

interface GameDetailsPageProps {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

export const Deepseek = ({
  game,
  screenshots,
  trailers,
}: GameDetailsPageProps) => {
  const [activePlatform, setActivePlatform] = useState<string>("all");
  const [activeMediaTab, setActiveMediaTab] = useState<
    "screenshots" | "trailers"
  >("screenshots");
  const [isFavorite, setIsFavorite] = useState(false);

  // Format date
  const releaseDate = new Date(game.released).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate rating percentage for gradient
  const ratingPercentage = (game.rating / 5) * 100;

  // Get unique platform names
  const platforms = game.platforms.map((p) => p.platform.name);
  const uniquePlatforms = ["all", ...Array.from(new Set(platforms))];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section with Parallax Background */}
      <div className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          {/* Dynamic Gradient Overlay based on rating */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent"
            style={{
              background: `linear-gradient(to top, 
                rgb(3 7 18) 0%, 
                rgba(3, 7, 18, ${0.9 - game.rating / 10}) 30%,
                transparent 70%)`,
            }}
          />
          {/* Animated Light Effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-4xl">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="relative w-20 h-5 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  style={{ width: `${ratingPercentage}%` }}
                />
              </div>
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="font-bold">{game.rating.toFixed(1)}</span>
              {game.metacritic && (
                <>
                  <div className="w-px h-4 bg-gray-600" />
                  <div className="px-2 py-1 bg-green-600 rounded text-xs font-bold">
                    {game.metacritic}
                  </div>
                </>
              )}
            </div>

            {/* Game Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              {game.name}
            </h1>

            {/* Game Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{releaseDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{game.developers[0]?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad className="w-5 h-5" />
                <span>
                  {game.genres
                    .slice(0, 2)
                    .map((g) => g.name)
                    .join(", ")}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Play Now
              </button>
              <button className="px-6 py-3 bg-gray-800 rounded-lg font-bold hover:bg-gray-700 transition-all flex items-center gap-2">
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
                />
                Wishlist
              </button>
              <button className="px-6 py-3 bg-gray-800 rounded-lg font-bold hover:bg-gray-700 transition-all flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Platform Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {uniquePlatforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activePlatform === platform
                      ? "bg-white text-gray-900"
                      : "bg-gray-900/60 hover:bg-gray-800"
                  }`}
                >
                  {platform === "all" ? "All Platforms" : platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description & Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-500" />
                About the Game
              </h2>
              <div
                className="prose prose-invert max-w-none bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
                dangerouslySetInnerHTML={{ __html: game.description }}
              />
            </section>

            {/* Media Section */}
            <section>
              <div className="flex border-b border-gray-800 mb-6">
                <button
                  onClick={() => setActiveMediaTab("screenshots")}
                  className={`px-6 py-3 font-bold text-lg relative ${
                    activeMediaTab === "screenshots"
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Screenshots
                  {activeMediaTab === "screenshots" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                  )}
                </button>
                <button
                  onClick={() => setActiveMediaTab("trailers")}
                  className={`px-6 py-3 font-bold text-lg relative ${
                    activeMediaTab === "trailers"
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Trailers
                  {activeMediaTab === "trailers" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                  )}
                </button>
              </div>

              {activeMediaTab === "screenshots" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.results.slice(0, 4).map((screenshot) => (
                    <div
                      key={screenshot.id}
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={screenshot.image}
                        alt={`${game.name} screenshot`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-8 h-8" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={trailers.results[0].preview}
                      alt={trailers.results[0].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-xl font-bold mb-2">
                          {trailers.results[0].name}
                        </h3>
                        <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Watch Trailer
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* System Requirements */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-green-500" />
                System Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {game.platforms.slice(0, 2).map((platform) => (
                  <div
                    key={platform.platform.id}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">
                      {platform.platform.name}
                    </h3>
                    {platform.requirements?.minimum && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-400 mb-2">
                          Minimum:
                        </h4>
                        <p className="text-gray-300">
                          {platform.requirements.minimum}
                        </p>
                      </div>
                    )}
                    {platform.requirements?.recommended && (
                      <div>
                        <h4 className="font-bold text-gray-400 mb-2">
                          Recommended:
                        </h4>
                        <p className="text-gray-300">
                          {platform.requirements.recommended}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Genres & Tags */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Genres & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {game.genres.map((genre) => (
                  <span
                    key={genre.name}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {genre.name}
                  </span>
                ))}
                {game.tags.slice(0, 8).map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Developers */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Developers</h3>
              <div className="space-y-3">
                {game.developers.map((dev) => (
                  <div key={dev.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="font-bold">{dev.name.charAt(0)}</span>
                    </div>
                    <span>{dev.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Available On</h3>
              <div className="grid grid-cols-2 gap-3">
                {game.platforms.map((p) => (
                  <div
                    key={p.platform.id}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/30 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <Gamepad className="w-4 h-4" />
                    <span className="text-sm">{p.platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Community Stats</h3>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Rating</span>
                    <span>{game.rating.toFixed(1)}/5</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      style={{ width: `${ratingPercentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Over 1M downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Play className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
