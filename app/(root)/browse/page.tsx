import BrowseContainer from "@/components/BrowseContainer";
import { Suspense } from "react";

export interface BrowseSearch {
  search: string;
}

export default function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<BrowseSearch>;
}) {
  return (
    <Suspense>
      <BrowseContainer searchParams={searchParams} />
    </Suspense>
  );
}
