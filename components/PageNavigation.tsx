import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

interface Props {
  path?: string;
  skeleton?: boolean;
}

const PageNavigation = ({ path, skeleton }: Props) => {
  return (
    <div className="flex items-center gap-2 min-[400px]:text-sm text-xs mb-6 font-medium">
      <Link
        href="/"
        className="text-neutral-400 hover:text-white transition-colors"
      >
        Discover
      </Link>
      <ChevronRight className="size-4 text-gray-400" />
      {!skeleton ? (
        <p className="text-white cursor-pointer">{path}</p>
      ) : (
        <Skeleton className="w-20 h-3" />
      )}
    </div>
  );
};

export default PageNavigation;
