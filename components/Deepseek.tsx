"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Star,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Lock,
  Unlock,
  Medal,
  Crown,
  Gem,
  Target,
  Calendar,
  Users,
  BarChart3,
  Grid3X3,
  LayoutList,
  Download,
  Share2,
} from "lucide-react";

interface GameAchievements {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: string;
}

interface RAWGResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

interface Props {
  achievements: RAWGResponse<GameAchievements>;
  gameName: string;
  gameId: number;
}

// Rarity classifications
const getRarityDetails = (percent: number) => {
  if (percent >= 50)
    return {
      tier: "Common",
      color: "text-gray-400",
      bg: "bg-gray-500/10",
      border: "border-gray-500/30",
      icon: <Trophy className="w-3.5 h-3.5" />,
      progressColor: "bg-gray-500",
      gradient: "from-gray-500/20 to-transparent",
    };
  if (percent >= 25)
    return {
      tier: "Rare",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      icon: <Star className="w-3.5 h-3.5" />,
      progressColor: "bg-blue-500",
      gradient: "from-blue-500/20 to-transparent",
    };
  if (percent >= 10)
    return {
      tier: "Epic",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      icon: <Gem className="w-3.5 h-3.5" />,
      progressColor: "bg-purple-500",
      gradient: "from-purple-500/20 to-transparent",
    };
  return {
    tier: "Legendary",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    icon: <Crown className="w-3.5 h-3.5" />,
    progressColor: "bg-yellow-500",
    gradient: "from-yellow-500/20 to-transparent",
  };
};

export default function Deepseek({ achievements, gameName, gameId }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<
    "rarity-desc" | "rarity-asc" | "name-asc" | "name-desc"
  >("rarity-desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedAchievement, setSelectedAchievement] =
    useState<GameAchievements | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Enhance achievements with rarity
  const enhancedAchievements = useMemo(() => {
    return achievements.results.map((achievement) => ({
      ...achievement,
      percentNum: parseFloat(achievement.percent),
      rarity: getRarityDetails(parseFloat(achievement.percent)),
    }));
  }, [achievements.results]);

  // Filter and sort achievements
  const filteredAchievements = useMemo(() => {
    let filtered = enhancedAchievements.filter((achievement) => {
      const matchesSearch =
        achievement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesRarity =
        selectedRarity === "all" ||
        achievement.rarity.tier.toLowerCase() === selectedRarity;
      return matchesSearch && matchesRarity;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rarity-desc":
          return a.percentNum - b.percentNum;
        case "rarity-asc":
          return b.percentNum - a.percentNum;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [enhancedAchievements, searchTerm, selectedRarity, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
  const paginatedAchievements = filteredAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Stats
  const stats = useMemo(() => {
    const total = achievements.count;
    const averageUnlock =
      enhancedAchievements.reduce((acc, curr) => acc + curr.percentNum, 0) /
      total;
    const rarest = enhancedAchievements.reduce((prev, curr) =>
      prev.percentNum < curr.percentNum ? prev : curr,
    );
    const mostCommon = enhancedAchievements.reduce((prev, curr) =>
      prev.percentNum > curr.percentNum ? prev : curr,
    );

    const rarityCounts = {
      common: enhancedAchievements.filter((a) => a.rarity.tier === "Common")
        .length,
      rare: enhancedAchievements.filter((a) => a.rarity.tier === "Rare").length,
      epic: enhancedAchievements.filter((a) => a.rarity.tier === "Epic").length,
      legendary: enhancedAchievements.filter(
        (a) => a.rarity.tier === "Legendary",
      ).length,
    };

    return { total, averageUnlock, rarest, mostCommon, rarityCounts };
  }, [enhancedAchievements, achievements.count]);

  if (!achievements.count) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e91e3f]/20 to-purple-500/20 rounded-full blur-3xl" />
              <Award className="w-24 h-24 text-neutral-800 mx-auto relative z-10" />
            </div>
            <h2 className="text-3xl font-bold text-white mt-6 mb-3">
              No Achievements Yet
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto">
              {gameName} doesn't have any achievement data available on RAWG
              yet.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#e91e3f]/10 rounded-xl">
              <Trophy className="w-6 h-6 text-[#e91e3f]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {gameName} Achievements
              </h1>
              <p className="text-neutral-400 mt-1">
                {achievements.count} total achievements •{" "}
                {stats.averageUnlock.toFixed(1)}% average unlock rate
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={<Award className="w-5 h-5" />}
              label="Total"
              value={stats.total.toString()}
              color="from-blue-500 to-blue-600"
            />
            <StatCard
              icon={<BarChart3 className="w-5 h-5" />}
              label="Avg. Unlock"
              value={`${stats.averageUnlock.toFixed(1)}%`}
              color="from-green-500 to-green-600"
            />
            <StatCard
              icon={<Crown className="w-5 h-5" />}
              label="Rarest"
              value={`${stats.rarest.percentNum.toFixed(1)}%`}
              subvalue={stats.rarest.name}
              color="from-yellow-500 to-yellow-600"
            />
            <StatCard
              icon={<Users className="w-5 h-5" />}
              label="Most Common"
              value={`${stats.mostCommon.percentNum.toFixed(1)}%`}
              subvalue={stats.mostCommon.name}
              color="from-purple-500 to-purple-600"
            />
          </div>

          {/* Rarity Distribution */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <RarityBar
              label="Common"
              count={stats.rarityCounts.common}
              total={stats.total}
              color="bg-gray-500"
            />
            <RarityBar
              label="Rare"
              count={stats.rarityCounts.rare}
              total={stats.total}
              color="bg-blue-500"
            />
            <RarityBar
              label="Epic"
              count={stats.rarityCounts.epic}
              total={stats.total}
              color="bg-purple-500"
            />
            <RarityBar
              label="Legendary"
              count={stats.rarityCounts.legendary}
              total={stats.total}
              color="bg-yellow-500"
            />
          </div>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#e91e3f] transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-300 hover:text-white transition-colors lg:w-auto"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {showFilters ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* View Toggle */}
            <div className="flex gap-1 p-1 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#e91e3f] text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-700"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-[#e91e3f] text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-700"
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Rarity Filter */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">
                      Rarity
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["all", "common", "rare", "epic", "legendary"].map(
                        (rarity) => (
                          <button
                            key={rarity}
                            onClick={() => setSelectedRarity(rarity)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                              selectedRarity === rarity
                                ? rarity === "all"
                                  ? "bg-neutral-700 text-white"
                                  : `${getRarityDetails(rarity === "common" ? 60 : rarity === "rare" ? 30 : rarity === "epic" ? 15 : 5).bg} ${getRarityDetails(rarity === "common" ? 60 : rarity === "rare" ? 30 : rarity === "epic" ? 15 : 5).color} border ${getRarityDetails(rarity === "common" ? 60 : rarity === "rare" ? 30 : rarity === "epic" ? 15 : 5).border}`
                                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white border border-neutral-700"
                            }`}
                          >
                            {rarity}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#e91e3f]"
                    >
                      <option value="rarity-desc">Rarest First</option>
                      <option value="rarity-asc">Most Common First</option>
                      <option value="name-asc">Name A-Z</option>
                      <option value="name-desc">Name Z-A</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-sm text-neutral-400 mb-4">
          <span>
            Showing {paginatedAchievements.length} of{" "}
            {filteredAchievements.length} achievements
          </span>
          {filteredAchievements.length === 0 && (
            <span className="text-[#e91e3f]">No matches found</span>
          )}
        </div>

        {/* Achievements Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                onClick={() => setSelectedAchievement(achievement)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {paginatedAchievements.map((achievement, index) => (
              <AchievementListItem
                key={achievement.id}
                achievement={achievement}
                index={index}
                onClick={() => setSelectedAchievement(achievement)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
            >
              Previous
            </button>
            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? "bg-[#e91e3f] text-white"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Achievement Detail Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <AchievementModal
              achievement={selectedAchievement}
              onClose={() => setSelectedAchievement(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Stat Card Component
const StatCard = ({ icon, label, value, subvalue, color }: any) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-4"
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-neutral-400 text-sm">{label}</span>
      <div
        className={`p-1.5 rounded-lg bg-gradient-to-r ${color} bg-opacity-20`}
      >
        {icon}
      </div>
    </div>
    <div className="text-xl font-bold text-white">{value}</div>
    {subvalue && (
      <div className="text-xs text-neutral-500 truncate mt-1" title={subvalue}>
        {subvalue}
      </div>
    )}
  </motion.div>
);

// Rarity Bar Component
const RarityBar = ({ label, count, total, color }: any) => {
  const percentage = (count / total) * 100;
  return (
    <div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-800">
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="text-neutral-400">{label}</span>
        <span className="text-white font-medium">{count}</span>
      </div>
      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Grid Card Component
const AchievementCard = ({ achievement, index, onClick }: any) => {
  const rarity = achievement.rarity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 hover:border-[#e91e3f]/30 transition-all cursor-pointer overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      <div className="relative p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className={`relative w-16 h-16 rounded-lg overflow-hidden ring-2 ring-neutral-800 group-hover:ring-[#e91e3f]/50 transition-all`}
            >
              <Image
                src={achievement.image}
                alt={achievement.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold text-white truncate group-hover:text-[#e91e3f] transition-colors">
                {achievement.name}
              </h4>
              <span
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${rarity.bg} ${rarity.color} border ${rarity.border} flex-shrink-0`}
              >
                {rarity.icon}
                <span>{rarity.tier}</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 line-clamp-2 mt-1">
              {achievement.description}
            </p>

            {/* Progress */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-neutral-500">Unlocked by</span>
                <span className="text-white font-medium">
                  {achievement.percentNum.toFixed(1)}%
                </span>
              </div>
              <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.percentNum}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${rarity.progressColor}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// List Item Component
const AchievementListItem = ({ achievement, index, onClick }: any) => {
  const rarity = achievement.rarity;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ x: 4 }}
      onClick={onClick}
      className="group bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 hover:border-[#e91e3f]/30 transition-all cursor-pointer"
    >
      <div className="p-4">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="relative w-12 h-12 rounded-lg overflow-hidden ring-2 ring-neutral-800 group-hover:ring-[#e91e3f]/50 transition-all flex-shrink-0">
            <Image
              src={achievement.image}
              alt={achievement.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-semibold text-white group-hover:text-[#e91e3f] transition-colors">
                {achievement.name}
              </h4>
              <span
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${rarity.bg} ${rarity.color} border ${rarity.border}`}
              >
                {rarity.icon}
                <span>{rarity.tier}</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 line-clamp-1">
              {achievement.description}
            </p>
          </div>

          {/* Percentage */}
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold text-white">
              {achievement.percentNum.toFixed(1)}%
            </div>
            <div className="text-xs text-neutral-500">unlocked</div>
          </div>

          {/* Progress Bar */}
          <div className="w-24">
            <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${rarity.progressColor}`}
                style={{ width: `${achievement.percentNum}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Modal Component
const AchievementModal = ({ achievement, onClose }: any) => {
  const percent = parseFloat(achievement.percent);
  const rarity = getRarityDetails(percent);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl max-w-2xl w-full border border-neutral-800 overflow-hidden"
      >
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src={achievement.image}
            alt={achievement.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${rarity.bg} ${rarity.color} border ${rarity.border}`}
              >
                {rarity.icon}
                {rarity.tier}
              </span>
              <span className="text-sm text-neutral-400">
                {percent.toFixed(1)}% unlocked
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              {achievement.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-neutral-300 leading-relaxed mb-6">
            {achievement.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <Lock className="w-5 h-5 text-neutral-600 mb-2" />
              <div className="text-2xl font-bold text-white">
                {(((100 - percent) / 100) * 1000000).toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500">
                Players haven't unlocked
              </div>
            </div>
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <Unlock className="w-5 h-5 text-green-500 mb-2" />
              <div className="text-2xl font-bold text-white">
                {((percent / 100) * 1000000).toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500">
                Players have unlocked
              </div>
            </div>
          </div>

          {/* Global Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400">Global Unlock Rate</span>
              <span className="text-white font-semibold">
                {percent.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full ${rarity.progressColor}`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 px-4 py-2 bg-[#e91e3f] hover:bg-[#c01030] rounded-lg text-white font-medium transition-colors">
              Track Achievement
            </button>
            <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
