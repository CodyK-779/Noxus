import Best2025PageContainer from "@/components/Best2025PageContainer";
import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import { Suspense } from "react";

export interface Best2025Search {
  page: string;
  platform: string;
  genre: string;
  tag: string;
  metascore: string;
}

export default function Best2025Page({
  searchParams,
}: {
  searchParams: Promise<Best2025Search>;
}) {
  const header = "Discover Best Games of 2025";
  const desc =
    "The highest-rated, most talked-about, and critically acclaimed games of 2025. All in one place.";

  return (
    <Suspense
      fallback={
        <GamePageSkeletons
          header={header}
          desc={desc}
          filterFor="2025"
          path="Best of 2025"
        />
      }
    >
      <Best2025PageContainer
        header={header}
        desc={desc}
        searchParams={searchParams}
      />
    </Suspense>
  );
}
