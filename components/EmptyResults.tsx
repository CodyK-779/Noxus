import { Gamepad2, SearchX } from "lucide-react";

const EmptyResults = () => {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center">
        <div className="relative min-[375px]:mb-3.5 mb-2.5">
          <div className="flex items-center justify-center w-fit min-[400px]:p-6 p-5 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
            <Gamepad2 className="sm:size-12 min-[400px]:size-10 min-[360px]:size-8 size-7 text-gray-600" />
            <SearchX className="absolute min-[400px]:top-5 min-[360px]:top-[18px] top-[19px] sm:right-[18px] min-[400px]:right-5 min-[360px]:right-4 right-[17px] sm:size-6 min-[400px]:size-5 min-[360px]:size-4 size-3.5 text-red-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-full -z-10" />
        </div>
        <h3 className="sm:text-2xl min-[375px]:text-xl text-lg font-semibold min-[375px]:mb-2 mb-1">
          No Games Found
        </h3>
        <p className="sm:text-base min-[360px]:text-sm text-xs text-gray-400 sm:max-w-md min-[375px]:max-w-sm w-full text-center">
          We couldn't find games that match all your selected criteria. Consider
          adjusting one or more filters.
        </p>
      </div>
    </div>
  );
};

export default EmptyResults;
