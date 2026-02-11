"use client";

import { ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  path?: string;
  skeleton?: boolean;
  isgenre?: boolean;
}

const PageNavigation = ({ path, skeleton, isgenre }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 min-[400px]:text-sm text-xs mb-6 font-medium">
      {isgenre ? (
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Discover
        </Link>
      ) : (
        <div
          onClick={() => router.back()}
          className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          Discover
        </div>
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
