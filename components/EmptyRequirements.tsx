import { Monitor } from "lucide-react";

const EmptyRequirements = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-12 text-center border border-neutral-800">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e91e3f]/20 to-purple-500/20 rounded-full blur-3xl" />
        <Monitor className="w-16 h-16 text-neutral-700 mx-auto mb-4 relative z-10" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        No Requirements Listed
      </h3>
      <p className="text-neutral-400 max-w-md mx-auto">
        System requirements haven't been added for this game yet.
      </p>
    </div>
  );
};

export default EmptyRequirements;
