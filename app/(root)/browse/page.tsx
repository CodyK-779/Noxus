import BrowseContainer from "@/components/BrowseContainer";
import { Suspense } from "react";

export interface BrowseSearch {
  search: string;
}

export interface BrowseParams {
  platform: string;
  genre: string;
  date: string;
  tag: string;
  metascore: string;
}

export default function BrowsePage({
  searchParams,
  params,
}: {
  searchParams: Promise<BrowseSearch>;
  params: Promise<BrowseParams>;
}) {
  return (
    <Suspense>
      <BrowseContainer searchParams={searchParams} params={params} />
    </Suspense>
  );
}
