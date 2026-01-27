// import { getGenreDetails } from "@/actions/genres-action";
// import TextExtender from "@/components/TextExtender";

// export default async function GenreDetailsPage({
//   params,
// }: {
//   params: Promise<{ id: number }>;
// }) {
//   const genreId = (await params).id;

//   const genre = await getGenreDetails(genreId);

//   // return <div className="mt-20">{genre.name} Games</div>;

//   return (
//     <>
//       <div className="relative h-[300px] overflow-hidden mt-[72px]">
//         <img
//           src={genre.image_background}
//           alt={genre.name}
//           className="absolute inset-0 w-full h-full object-cover scale-105"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
//         <div className="relative z-10 h-full flex flex-col justify-end p-6">
//           <h1 className="text-4xl font-bold">{genre.name}</h1>
//           <p className="mt-2 text-sm text-neutral-300">
//             {genre.games_count.toLocaleString()} games available
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 max-w-3xl">
//         <h2 className="text-lg font-semibold mb-2">About this genre</h2>

//         <TextExtender description={genre.description} />
//       </div>
//       <div className="mt-10 flex items-center justify-between">
//         <p className="text-sm text-neutral-400">
//           Showing games from the{" "}
//           <span className="text-white">{genre.name}</span> genre
//         </p>

//         <p className="text-sm font-medium">{500} results</p>
//       </div>
//     </>
//   );
// }

// app/genres/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  TrendingUp,
  Users,
  Calendar,
  Star,
  ChevronRight,
  Trophy,
  Sparkles,
  Filter,
  Grid,
  List,
} from "lucide-react";

interface GenreDetails {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  parent_platforms: Array<{
    platform: { id: number; name: string; slug: string };
  }>;
  genres: Array<{ name: string }>;
}

interface PageProps {
  params: {
    slug: string;
  };
}

const genreData: GenreDetails = {
  id: 4,
  name: "Action",
  slug: "action",
  games_count: 45213,
  image_background:
    "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
  description:
    "The action genre emphasizes physical challenges and coordination. Players must have quick reflexes to overcome obstacles, defeat enemies, and complete objectives. These games often feature combat, platforming, and fast-paced gameplay with a focus on hand-eye coordination and reaction time.",
};

const topGames: Game[] = [
  {
    id: 1,
    name: "Elden Ring",
    slug: "elden-ring",
    background_image: "/games/elden-ring.jpg",
    released: "2022-02-25",
    rating: 4.7,
    rating_top: 5,
    metacritic: 96,
    parent_platforms: [{ platform: { id: 4, name: "PC", slug: "pc" } }],
    genres: [{ name: "Action RPG" }],
  },
  {
    id: 2,
    name: "God of War Ragnarök",
    slug: "god-of-war-ragnarok",
    background_image: "/games/gow-ragnarok.jpg",
    released: "2022-11-09",
    rating: 4.8,
    rating_top: 5,
    metacritic: 94,
    parent_platforms: [
      { platform: { id: 18, name: "PlayStation 5", slug: "playstation5" } },
    ],
    genres: [{ name: "Action Adventure" }],
  },
  // Add more games...
];

export default function GenrePage({ params }: PageProps) {
  const genre = genreData; // In real app, fetch by slug

  // Calculate some stats
  const currentYear = new Date().getFullYear();
  const yearlyAverage = Math.floor(genre.games_count / 30); // Approx games per year
  const topRatedCount = Math.floor(genre.games_count * 0.15); // 15% of games
  const newReleases = Math.floor(genre.games_count * 0.05); // 5% from last 2 years

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white mt-[72px]">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16 md:pb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {genre.image_background && (
            <Image
              src={genre.image_background}
              alt={genre.name}
              fill
              className="object-cover object-center"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/genres" className="hover:text-white transition-colors">
              Genres
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{genre.name}</span>
          </nav>

          {/* Genre Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 mb-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                <Gamepad2 className="w-4 h-4" />
                <span className="text-sm font-bold">GAME GENRE</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {genre.name}
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                {genre.description}
              </p>
            </div>

            {/* Genre Stats Card */}
            {/* <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 min-w-[320px]">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-400">
                  {genre.games_count.toLocaleString()}
                </div>
                <div className="text-gray-400">Total Games</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {topRatedCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Top Rated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {yearlyAverage}+
                  </div>
                  <div className="text-sm text-gray-400">Per Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {newReleases.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Recent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">1980s</div>
                  <div className="text-sm text-gray-400">Since</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Genre Features */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-transparent rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div className="font-bold">Fast-Paced</div>
              </div>
              <p className="text-gray-400 text-sm">
                Emphasizes quick reflexes, rapid decision-making, and intense
                gameplay sequences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-transparent rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Trophy className="w-5 h-5 text-purple-400" />
                </div>
                <div className="font-bold">Skill-Based</div>
              </div>
              <p className="text-gray-400 text-sm">
                Rewards player mastery through precise controls, timing, and
                strategic thinking.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-transparent rounded-xl p-6 border border-pink-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <div className="font-bold">Immersive</div>
              </div>
              <p className="text-gray-400 text-sm">
                Creates engaging experiences through dynamic environments and
                responsive gameplay.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Top {genre.name} Games
            </h2>
            <p className="text-gray-400">
              Curated selection of the highest-rated games in this genre
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                <option>Sort: Rating</option>
                <option>Sort: Release Date</option>
                <option>Sort: Popularity</option>
                <option>Sort: Name</option>
              </select>
            </div>

            <div className="flex bg-gray-900 rounded-lg p-1">
              <button className="p-2 rounded bg-gray-800">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-2 rounded">
                <List className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {topGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Subgenres Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">
                Popular {genre.name} Subgenres
              </h3>
              <p className="text-gray-400">Explore related gameplay styles</p>
            </div>
            <Link
              href="/genres"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {getSubgenres(genre.name).map((subgenre, index) => (
              <Link
                key={index}
                href={`/genres/${subgenre.slug}`}
                className="group relative bg-gray-900/50 rounded-xl p-4 text-center hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-800"
              >
                <div className="text-3xl mb-3">{subgenre.icon}</div>
                <h4 className="font-bold text-sm mb-1">{subgenre.name}</h4>
                <p className="text-xs text-gray-400">
                  {subgenre.count.toLocaleString()} games
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Genre Evolution */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 p-8">
          <h3 className="text-2xl font-bold mb-6">Genre Evolution</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Historical Timeline
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    1980s
                  </div>
                  <div>
                    <div className="font-medium">Arcade Origins</div>
                    <p className="text-sm text-gray-400">
                      Simple mechanics, high score focus, side-scrolling
                      adventures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    1990s
                  </div>
                  <div>
                    <div className="font-medium">3D Revolution</div>
                    <p className="text-sm text-gray-400">
                      Transition to 3D graphics, complex controls, cinematic
                      experiences
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    2000s
                  </div>
                  <div>
                    <div className="font-medium">Open World Era</div>
                    <p className="text-sm text-gray-400">
                      Massive environments, non-linear gameplay, sandbox
                      elements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Current Trends
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Open World Design</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">RPG Elements</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Co-op Multiplayer</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Narrative Focus</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500"
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Game Card Component
function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`}>
      <div className="group relative bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all hover:scale-[1.02] border border-gray-800">
        {/* Game Image */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-lg">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-white">
                {game.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Metacritic Badge */}
          {game.metacritic && (
            <div className="absolute top-3 right-3 z-10">
              <div
                className={`px-2 py-1 rounded-lg font-bold text-sm ${
                  game.metacritic >= 90
                    ? "bg-green-600"
                    : game.metacritic >= 75
                      ? "bg-yellow-600"
                      : "bg-orange-600"
                }`}
              >
                {game.metacritic}
              </div>
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {game.name}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
            <span>
              {game.released ? new Date(game.released).getFullYear() : "TBA"}
            </span>
            <div className="flex items-center gap-1">
              {game.parent_platforms?.slice(0, 3).map((p) => (
                <span key={p.platform.id} className="text-xs">
                  {getPlatformIcon(p.platform.name)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {game.genres?.slice(0, 2).map((genre) => (
              <span
                key={genre.name}
                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-colors pointer-events-none" />
      </div>
    </Link>
  );
}

// Helper functions
function getSubgenres(genreName: string) {
  const subgenres: Record<
    string,
    Array<{ name: string; slug: string; icon: string; count: number }>
  > = {
    Action: [
      { name: "Action RPG", slug: "action-rpg", icon: "⚔️", count: 5234 },
      {
        name: "Action Adventure",
        slug: "action-adventure",
        icon: "🗺️",
        count: 8213,
      },
      { name: "Beat 'em up", slug: "beat-em-up", icon: "👊", count: 987 },
      {
        name: "Hack and Slash",
        slug: "hack-and-slash",
        icon: "⚔️",
        count: 1543,
      },
      { name: "Platformer", slug: "platformer", icon: "🕹️", count: 3210 },
      { name: "Shooter", slug: "shooter", icon: "🔫", count: 12543 },
    ],
    RPG: [
      { name: "Action RPG", slug: "action-rpg", icon: "⚔️", count: 5234 },
      { name: "JRPG", slug: "jrpg", icon: "🎎", count: 2134 },
      { name: "MMORPG", slug: "mmorpg", icon: "🌐", count: 543 },
      { name: "Roguelike", slug: "roguelike", icon: "🌀", count: 1876 },
      { name: "Tactical RPG", slug: "tactical-rpg", icon: "♟️", count: 765 },
      {
        name: "Open World RPG",
        slug: "open-world-rpg",
        icon: "🗺️",
        count: 4321,
      },
    ],
    Strategy: [
      {
        name: "Real-time",
        slug: "real-time-strategy",
        icon: "⏱️",
        count: 3210,
      },
      {
        name: "Turn-based",
        slug: "turn-based-strategy",
        icon: "🔄",
        count: 1987,
      },
      { name: "4X", slug: "4x-strategy", icon: "🌍", count: 543 },
      { name: "Tower Defense", slug: "tower-defense", icon: "🏰", count: 876 },
      {
        name: "Grand Strategy",
        slug: "grand-strategy",
        icon: "👑",
        count: 432,
      },
      { name: "Tactical", slug: "tactical-strategy", icon: "🎯", count: 1543 },
    ],
  };

  return subgenres[genreName] || [];
}

function getPlatformIcon(platformName: string): string {
  const icons: Record<string, string> = {
    PC: "🖥️",
    PlayStation: "🎮",
    Xbox: "📦",
    Nintendo: "🔴",
    iOS: "📱",
    Android: "🤖",
    macOS: "🍎",
    Linux: "🐧",
  };
  return icons[platformName] || "🎮";
}
