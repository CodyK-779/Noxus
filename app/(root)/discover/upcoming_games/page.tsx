import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import UpcomingGamesPageContainer from "@/components/UpcomingGamesPageContainer";
import { Suspense } from "react";

export default async function UpcomingGamesPage() {
  const header = "Discover Upcoming Games";
  const desc =
    "Check out upcoming games that will be released in the next 6 months.";

  return (
    <Suspense fallback={<GamePageSkeletons header={header} desc={desc} />}>
      <UpcomingGamesPageContainer />;
    </Suspense>
  );
}
