import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

interface Values {
  label: string;
  value: string;
}

interface Props {
  data: Values[];
  type: "M" | "V";
  minimum: Values[];
  recommended: Values[];
}

const SystemCard = ({ data, type, minimum, recommended }: Props) => {
  const oneMissing = minimum.length < 1 || recommended.length < 1;

  return (
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
              {/* {type === "M" ? "Minimum" : } <span className="text-[#e91e3f]">Requirements</span> */}
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
  );
};

export default SystemCard;
