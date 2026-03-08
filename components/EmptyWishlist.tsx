import { ChevronRight, Heart } from "lucide-react";
import Link from "next/link";

const EmptyWishlist = () => {
  return (
    <div className="sm:min-h-[50vh] mt-20 flex items-center justify-center px-4">
      <div className="text-center sm:max-w-md max-w-sm">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-[#e91e3f]/20 rounded-full blur-2xl" />
          <div className="relative p-5 bg-neutral-900 rounded-full border border-neutral-800">
            <Heart className="sm:size-12 min-[400px]:size-10 size-9 text-neutral-600" />
          </div>
        </div>

        <h2 className="sm:text-3xl min-[400px]:text-2xl text-xl font-semibold text-white mb-2">
          Your wishlist is empty
        </h2>

        <p className="sm:text-base min-[400px]:text-sm text-[13px] text-neutral-400 mb-8">
          Start adding games you're excited about. They'll appear here for easy
          access.
        </p>

        <Link
          href="/browse"
          className="inline-flex items-center gap-2 min-[400px]:px-6 px-4 py-3 bg-nox hover:bg-[#c01030] rounded-xl sm:text-base min-[400px]:text-sm text-[13px] text-white font-medium transition-colors"
        >
          Browse All Games
          <ChevronRight className="min-[400px]:size-4 size-3.5 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default EmptyWishlist;
