import { Gamepad2 } from "lucide-react";
import PageHeaders from "../PageHeaders";
import { Skeleton } from "../ui/skeleton";
import DropdownSkeleton from "./DropdownSkeleton";
import PageNavigation from "../PageNavigation";

interface Props {
  header: string;
  desc: string;
  filterFor: "new" | "upcoming" | "high" | "2025";
  path: string;
}

const GamePageSkeletons = ({ header, desc, filterFor, path }: Props) => {
  const upcomingLabels = ["Filter Platform", "Filter Genre", "Filter Tags"];
  const bo2025Labels = ["Filter Platform", "Filter Genre", "Filter Tags"];

  const newGamesLabels = [
    "Filter Platform",
    "Filter Genre",
    "Filter Tags",
    "Filter Scores",
  ];
  const hrLabels = [
    "Release Dates",
    "Filter Platform",
    "Filter Genre",
    "Filter Tags",
  ];

  const dropdown = (filterFor: "new" | "upcoming" | "high" | "2025") => {
    if (filterFor === "new") return newGamesLabels;
    if (filterFor === "high") return hrLabels;
    if (filterFor === "2025") return bo2025Labels;
    return upcomingLabels;
  };

  return (
    <main className="max-container min-[400px]:mt-28 mt-24">
      <PageNavigation path={path} />
      <PageHeaders header={header} desc={desc} />
      <div className="md:flex items-center grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-2.5 mt-6 mb-8">
        {dropdown(filterFor).map((d) => (
          <DropdownSkeleton
            key={d}
            label={d}
            size="sm:min-w-36 max-[639px]:w-full"
          />
        ))}
      </div>

      <hr />

      <div className="flex items-center gap-3 mt-6">
        <div className="min-[400px]:p-2.5 p-2 rounded-lg bg-[#e91e3f]">
          <Gamepad2 className="size-5" />
        </div>
        <div>
          <Skeleton className="w-32 sm:h-[18px] min-[400px]:h-4 h-3.5 mb-2" />
          <p className="min-[400px]:text-sm text-xs text-gray-400">
            Browse through our collection
          </p>
        </div>
      </div>

      <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="relative group min-[400px]:mb-10 mb-6">
            <Skeleton className="aspect-[3/4] rounded-md" />

            <Skeleton className="mt-3 mb-0.5 w-full min-[400px]:h-3.5 h-3" />
            <Skeleton className="min-[400px]:mt-3 mt-2.5 w-full min-[400px]:h-4 h-3" />

            <Skeleton className="min-[400px]:w-20 w-14 min-[400px]:h-3 h-2.5 min-[400px]:mt-2.5 mt-2" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default GamePageSkeletons;
