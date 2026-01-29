import { Gamepad2 } from "lucide-react";

interface Props {
  count: number;
}

const GamesCount = ({ count }: Props) => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <div className="min-[400px]:p-2.5 p-2 rounded-lg bg-[#e91e3f]">
        <Gamepad2 className="size-5" />
      </div>
      <div>
        <h3 className="sm:text-lg min-[400px]:text-base text-sm font-bold text-white sm:-mb-0.5">
          {count.toLocaleString()} Games Found
        </h3>

        <p className="min-[400px]:text-sm text-xs text-gray-400">
          Browse through our collection
        </p>
      </div>
    </div>
  );
};

export default GamesCount;
