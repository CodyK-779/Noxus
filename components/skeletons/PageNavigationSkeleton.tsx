import { ChevronRight } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const PageNavigationSkeleton = () => {
  return (
    <div className="flex items-center gap-2 min-[400px]:text-sm text-xs mb-6 font-medium">
      <Skeleton className="w-24 h-3" />
      <ChevronRight className="size-4 text-gray-400" />
      <Skeleton className="w-24 h-3" />
    </div>
  );
};

export default PageNavigationSkeleton;
