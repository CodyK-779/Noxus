import NewGamesPageContainer from "@/components/NewGamesPageContainer";
import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import { Suspense } from "react";

export interface NewGamesSearches {
  page: string;
  platform: string;
  genre: string;
  tag: string;
  metascore: string;
}

export default function NewGamesPage({
  searchParams,
}: {
  searchParams: Promise<NewGamesSearches>;
}) {
  const header = "Discover New Releases";
  const desc = "Check out newly released games in the last 30 days.";

  return (
    <Suspense
      fallback={
        <GamePageSkeletons
          header={header}
          desc={desc}
          filterFor="new"
          path="New-releases"
        />
      }
    >
      <NewGamesPageContainer
        header={header}
        desc={desc}
        searchParams={searchParams}
      />
    </Suspense>
  );
}
