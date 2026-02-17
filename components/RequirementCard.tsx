"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

interface Values {
  label: string;
  value: string;
}

interface Props {
  data: Values[];
  type: "M" | "R";
}

const RequirementCard = ({ data, type }: Props) => {
  const check = type === "M";

  return (
    <div className={`relative group ${data.length < 1 && "hidden"}`}>
      {/* Background Gradient */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${check ? "from-[#e91e3f]/20 to-orange-500/20" : "from-green-500/20 to-emerald-500/20"} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 px-[18px] py-5 h-full">
        {/* Header with Icon */}
        <div className="flex min-[375px]:flex-row flex-col items-center min-[375px]:gap-3 min-[350px]:gap-2 gap-1.5 mb-6">
          <div
            className={`p-2.5 ${check ? "bg-[#e91e3f]/10" : "bg-green-500/10"} rounded-lg`}
          >
            {check ? (
              <Plus className="min-[400px]:size-5 min-[375px]:size-4 min-[350px]:size-5 size-4 text-[#e91e3f]" />
            ) : (
              <Check className="min-[400px]:size-5 min-[375px]:size-4 min-[350px]:size-5 size-4 text-green-500" />
            )}
          </div>
          <div className="min-[375px]:text-start text-center min-[375px]:mb-0 mb-2.5">
            <h3 className="min-[400px]:text-xl min-[350px]:text-lg text-[17px] font-bold text-white">
              {check ? "Minimum" : "Recommended"}{" "}
              <span className={check ? "text-[#e91e3f]" : "text-green-500"}>
                Requirements
              </span>
            </h3>
            <p className="text-xs font-medium text-neutral-500 min-[400px]:mt-0.5 -mt-0.5">
              {check
                ? "To run the game at basic settings"
                : "For the best gaming experience"}
            </p>
          </div>
        </div>

        {/* Requirements List */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: check ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 pb-3 border-b border-neutral-800/50 last:border-0 last:pb-0"
            >
              {/* Label with icon */}
              <div className="min-w-[100px] flex items-center gap-2">
                <span
                  className={`min-[350px]:size-1.5 size-1 rounded-full ${check ? "bg-[#e91e3f]/50" : "bg-green-500/50"}`}
                />
                <span className="min-[350px]:text-sm text-[13px] font-medium text-neutral-400">
                  {item.label}:
                </span>
              </div>

              {/* Value */}
              <div className="flex-1">
                <p className="min-[350px]:text-sm text-[13px] text-white leading-relaxed">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Box */}
        {data.some((d) => d.label === "Note") && (
          <div
            className={`mt-6 p-3 border ${check ? "bg-[#e91e3f]/5 border-[#e91e3f]/10" : "bg-green-500/5 border-green-500/10"} rounded-lg`}
          >
            <p className="text-xs text-neutral-300">
              <span
                className={`${check ? "text-[#e91e3f]" : "text-green-500"} font-medium`}
              >
                Note:
              </span>{" "}
              {data.find((d) => d.label === "Note")?.value}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequirementCard;
