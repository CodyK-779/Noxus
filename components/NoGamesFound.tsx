import { SearchX, Filter, RefreshCw, Gamepad2 } from "lucide-react";

interface EmptyResultsProps {
  searchQuery?: string;
  onResetFilters?: () => void;
}

export default function NoGamesFound({
  searchQuery,
  onResetFilters,
}: EmptyResultsProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Icon Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 flex items-center justify-center">
            <div className="relative">
              <Gamepad2 className="w-16 h-16 text-gray-600" />
              <SearchX className="absolute -top-2 -right-2 w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-full -z-10" />
        </div>

        {/* Message */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {/* {searchQuery ? "No Games Found" : "No Games Match Your Search"} */}
          No Games Found
        </h3>

        <p className="text-gray-400 mb-8 leading-relaxed">
          {searchQuery ? (
            <>
              We couldn't find any games matching "
              <span className="text-white font-medium">{searchQuery}</span>".
              Try adjusting your search terms or browse our collection below.
            </>
          ) : (
            "Your current filters are too specific. Try broadening your search criteria to discover more games."
          )}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Reset All Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
