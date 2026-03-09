"use client";

import { ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  path?: string;
  skeleton?: boolean;
  isgenre?: boolean;
}

const PageNavigation = ({ path, skeleton, isgenre }: Props) => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  return (
    <div className="flex items-center gap-2 min-[400px]:text-sm text-xs mb-6 font-medium">
      {isgenre ? (
        <Link
          href={from === "browse" ? "/browse" : "/"}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          {from === "browse" ? "Browse" : "Discover"}
        </Link>
      ) : (
        <Link
          href={from === "browse" ? "/browse" : "/"}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          {from === "browse" ? "Browse" : "Discover"}
        </Link>
      )}
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
