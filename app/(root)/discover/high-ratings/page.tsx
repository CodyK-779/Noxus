import HRPageContainer from "@/components/HRPageContainer";
import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import { Suspense } from "react";

export interface HRSearches {
  date: string;
  platform: string;
  genre: string;
  tag: string;
  page: string;
}

export default function HRGamesPage({
  searchParams,
}: {
  searchParams: Promise<HRSearches>;
}) {
  const header = "Discover Highly Rated Games";
  const desc =
    "This collection features games with 80+ Metacritic scores, 4.5+ user ratings, and universal critical acclaim.";

  return (
    <Suspense
      fallback={
        <GamePageSkeletons header={header} desc={desc} filterFor="high" />
      }
    >
      <HRPageContainer
        header={header}
        desc={desc}
        searchParams={searchParams}
      />
    </Suspense>
  );
}
