import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  path: string;
}

const PageNavigation = ({ path }: Props) => {
  return (
    <div className="flex items-center gap-2 min-[400px]:text-sm text-xs mb-6 font-medium">
      <Link
        href="/"
        className="text-neutral-400 hover:text-white transition-colors"
      >
        Discover
      </Link>
      <ChevronRight className="size-4 text-gray-400" />
      <p className="text-white cursor-pointer">{path}</p>
    </div>
  );
};

export default PageNavigation;
