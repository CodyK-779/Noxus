"use client";

import { GamePlatforms } from "@/actions/games-action";
import { parseRequirements } from "./utils/utils";
import EmptyRequirements from "./EmptyRequirements";
import D1 from "./SystemCard";
import { motion } from "framer-motion";
import { Check, Info, Plus } from "lucide-react";

interface Props {
  platforms: GamePlatforms[];
}

const SystemRequirements = ({ platforms }: Props) => {
  const pc = platforms.find((p) => p.platform.slug === "pc");

  if (!pc?.requirements.minimum && !pc?.requirements.recommended)
    return <EmptyRequirements />;

  const minimum = parseRequirements(pc.requirements.minimum);
  const recommended = parseRequirements(pc.requirements.recommended);

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Minimum Requirements */}
        <div className="relative group">
          {/* Background Gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e91e3f]/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-6 h-full">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#e91e3f]/10 rounded-lg">
                <Plus className="size-5 text-[#e91e3f]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Minimum <span className="text-[#e91e3f]">Requirements</span>
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  To run the game at basic settings
                </p>
              </div>
            </div>

            {/* Requirements List */}
            <div className="space-y-4">
              {minimum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 pb-3 border-b border-neutral-800/50 last:border-0 last:pb-0"
                >
                  {/* Label with icon */}
                  <div className="min-w-[100px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e91e3f]/50" />
                    <span className="text-sm font-medium text-neutral-400">
                      {item.label}:
                    </span>
                  </div>

                  {/* Value */}
                  <div className="flex-1">
                    <p className="text-sm text-white leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note Box */}
            {minimum.some((m) => m.label === "Note") && (
              <div className="mt-6 p-3 bg-[#e91e3f]/5 border border-[#e91e3f]/10 rounded-lg">
                <p className="text-xs text-neutral-300">
                  <span className="text-[#e91e3f] font-medium">Note:</span>{" "}
                  {minimum.find((m) => m.label === "Note")?.value}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Requirements */}
        <div className="relative group">
          {/* Background Gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-6 h-full">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-green-500/10 rounded-lg">
                <Check className="size-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Recommended{" "}
                  <span className="text-green-500">Requirements</span>
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  For the best gaming experience
                </p>
              </div>
            </div>

            {/* Requirements List */}
            <div className="space-y-4">
              {recommended.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 pb-3 border-b border-neutral-800/50 last:border-0 last:pb-0"
                >
                  {/* Label with icon */}
                  <div className="min-w-[100px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    <span className="text-sm font-medium text-neutral-400">
                      {item.label}:
                    </span>
                  </div>

                  {/* Value */}
                  <div className="flex-1">
                    <p className="text-sm text-white leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note Box */}
            {recommended.some((r) => r.label === "Note") && (
              <div className="mt-6 p-3 bg-green-500/5 border border-green-500/10 rounded-lg">
                <p className="text-xs text-neutral-300">
                  <span className="text-green-500 font-medium">Note:</span>{" "}
                  {recommended.find((r) => r.label === "Note")?.value}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="mt-6 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Info className="size-4 text-blue-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-400">
              <span className="font-medium text-white">Important Note:</span>{" "}
              Requires a 64-bit processor and operating system. These
              requirements are guidelines and actual performance may vary based
              on system configuration and settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
