import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import UpcomingGamesPageContainer from "@/components/UpcomingGamesPageContainer";
import { Suspense } from "react";

export interface UpcomingSearches {
  page: string;
  platform: string;
  genre: string;
  tag: string;
}

export default async function UpcomingGamesPage({
  searchParams,
}: {
  searchParams: Promise<UpcomingSearches>;
}) {
  const header = "Discover Upcoming Games";
  const desc =
    "Check out upcoming games that will be released in the next 6 months.";

  return (
    <Suspense
      fallback={
        <GamePageSkeletons header={header} desc={desc} filterFor="upcoming" />
      }
    >
      <UpcomingGamesPageContainer
        header={header}
        desc={desc}
        searchParams={searchParams}
      />
    </Suspense>
  );
}
