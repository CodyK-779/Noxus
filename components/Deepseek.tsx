import { getFreeGames } from "@/actions/games-action";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Download,
  Gamepad2,
  Calendar,
  Award,
  ChevronRight,
  Sparkles,
  Crown,
  Zap,
  Users,
  TrendingUp,
  Gift,
  Rocket,
} from "lucide-react";

interface GamePlatforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: GamePlatforms[];
  genres: { name: string }[];
}

const FreeGamesContainer = async () => {
  const [gamesData] = await Promise.all([getFreeGames()]);
  const games = gamesData.results;

  // Categorize free games
  const topRatedFree = games.filter((game) => game.rating >= 4).slice(0, 4);

  const recentlyAdded = games
    .sort(
      (a, b) => new Date(b.released).getTime() - new Date(a.released).getTime(),
    )
    .slice(0, 4);

  const popularFree = games.sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-black mt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e91e3f20,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#9333ea20,_transparent_70%)]" />

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#e91e3f]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <Gift className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">
                  100% Free Games
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <div className="w-1.5 h-16 bg-[#e91e3f] rounded-full" />
                <div>
                  <h1 className="md:text-6xl min-[375px]:text-4xl text-3xl font-bold">
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      Discover
                    </span>
                    <br />
                    <span className="text-[#e91e3f]">Free Games</span>
                  </h1>
                </div>
              </div>

              <p className="text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                Explore our curated collection of free and free-to-play games
                across all platforms. From competitive shooters to relaxing
                simulators, jump in without spending a dime.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <StatCard
                  icon={<Gamepad2 className="w-5 h-5" />}
                  value={games.length}
                  label="Free Games"
                />
                <StatCard
                  icon={<Users className="w-5 h-5" />}
                  value="10M+"
                  label="Players"
                />
                <StatCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  value="24/7"
                  label="Updates"
                />
              </div>
            </div>

            {/* Right Content - 3D Floating Cards */}
            <div className="flex-1 relative h-[400px] hidden lg:block">
              <div className="absolute top-0 right-0 w-64 h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700 rotate-6 transform hover:rotate-12 transition-all duration-500 overflow-hidden">
                <Image
                  src={games[0]?.background_image || "/placeholder.jpg"}
                  alt={games[0]?.name}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold truncate">
                    {games[0]?.name}
                  </p>
                  <p className="text-green-500 text-sm">Free to Play</p>
                </div>
              </div>
              <div className="absolute top-20 right-40 w-56 h-72 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700 -rotate-6 transform hover:-rotate-12 transition-all duration-500 overflow-hidden">
                <Image
                  src={games[1]?.background_image || "/placeholder.jpg"}
                  alt={games[1]?.name}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold truncate">
                    {games[1]?.name}
                  </p>
                  <p className="text-green-500 text-sm">Free to Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <CategoryCard
            icon={<Rocket className="w-6 h-6" />}
            title="Battle Royale"
            count="24 games"
            color="red"
          />
          <CategoryCard
            icon={<Zap className="w-6 h-6" />}
            title="Competitive"
            count="36 games"
            color="purple"
          />
          <CategoryCard
            icon={<Crown className="w-6 h-6" />}
            title="MMORPG"
            count="18 games"
            color="yellow"
          />
        </div>
      </div>

      {/* Top Rated Free Games */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Top Rated Free Games
            </h2>
          </div>
          <Link
            href="/discover/free-games/top-rated"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topRatedFree.map((game, index) => (
            <FreeGameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Recently Added Free Games
            </h2>
          </div>
          <Link
            href="/discover/free-games/recent"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentlyAdded.map((game, index) => (
            <FreeGameCard
              key={game.id}
              game={game}
              index={index}
              showBadge="New"
            />
          ))}
        </div>
      </section>

      {/* All Free Games Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Gamepad2 className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            All Free Games ({games.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {popularFree.map((game, index) => (
            <FreeGameGridCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* View More Button */}
        {games.length > 8 && (
          <div className="flex justify-center mt-10">
            <button className="group px-8 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-white font-medium transition-all hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Load More Games
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e91e3f20,_transparent_70%)]" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex p-3 bg-[#e91e3f]/10 rounded-xl mb-4">
              <Gift className="w-6 h-6 text-[#e91e3f]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Never Miss a Free Game
            </h3>
            <p className="text-neutral-400 mb-6">
              Get notified when new free games are added. We'll send you weekly
              updates about the best free games across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#e91e3f]"
              />
              <button className="px-6 py-3 bg-[#e91e3f] hover:bg-[#c01030] rounded-lg text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }: any) => (
  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-800">
    <div className="text-[#e91e3f] mb-2">{icon}</div>
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-xs text-neutral-500">{label}</div>
  </div>
);

// Category Card Component
const CategoryCard = ({ icon, title, count, color }: any) => {
  const colors = {
    red: "bg-[#e91e3f]/10 text-[#e91e3f] border-[#e91e3f]/30",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    yellow: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  };

  return (
    <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-6 hover:border-opacity-50 transition-all cursor-pointer overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colors[color].split(" ")[0]} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
      <div className="relative">
        <div className={`inline-flex p-3 rounded-xl ${colors[color]} mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-neutral-400">{count} games</p>
      </div>
    </div>
  );
};

// Free Game Card (Horizontal/Compact)
const FreeGameCard = ({ game, index, showBadge }: any) => (
  <Link href={`/game/${game.slug}`}>
    <div
      className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 overflow-hidden hover:border-[#e91e3f]/30 transition-all hover:shadow-xl hover:shadow-black/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-40">
        <Image
          src={game.background_image || "/placeholder.jpg"}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

        {showBadge && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 rounded-lg text-xs font-bold text-white">
            {showBadge}
          </div>
        )}

        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-white font-bold truncate">{game.name}</h3>
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
            <span className="text-white">{game.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

// Free Game Grid Card (Detailed)
const FreeGameGridCard = ({ game, index }: any) => (
  <Link href={`/game/${game.slug}`}>
    <div
      className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 overflow-hidden hover:border-[#e91e3f]/30 transition-all hover:shadow-xl hover:shadow-black/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-32">
        <Image
          src={game.background_image || "/placeholder.jpg"}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-white group-hover:text-[#e91e3f] transition-colors line-clamp-1">
          {game.name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
            <span className="text-xs text-white">{game.rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-neutral-500">
            {new Date(game.released).getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-2">
          {game.platforms.slice(0, 2).map((p: any) => (
            <span
              key={p.platform.id}
              className="px-1.5 py-0.5 bg-neutral-800 rounded text-[10px] text-neutral-400"
            >
              {p.platform.name}
            </span>
          ))}
          {game.platforms.length > 2 && (
            <span className="text-[10px] text-neutral-500">
              +{game.platforms.length - 2}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full font-medium">
            Free
          </span>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            Play now <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default FreeGamesContainer;
