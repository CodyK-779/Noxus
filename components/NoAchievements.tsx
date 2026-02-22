"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Props {
  name: string;
}

const NoAchievements = ({ name }: Props) => {
  return (
    <div className="min-h-screen sm:py-12 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e91e3f]/20 to-purple-500/20 rounded-full blur-3xl" />
            <Award className="sm:size-24 size-20 text-neutral-800 mx-auto relative z-10" />
          </div>
          <h2 className="sm:text-3xl min-[350px]:text-2xl text-xl font-bold text-white sm:mt-6 mt-4 sm:mb-3 mb-2">
            No Achievements Yet
          </h2>
          <p className="sm:text-base font-medium min-[350px]:text-sm text-[13px] text-neutral-400 max-w-md mx-auto">
            {name} doesn't have any achievement data available yet.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NoAchievements;
