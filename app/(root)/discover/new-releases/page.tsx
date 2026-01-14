import NewGamesPageContainer from "@/components/NewGamesPageContainer";
import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import { Suspense } from "react";

export default function NewGamesPage() {
  const header = "Discover New Releases";
  const desc = "Check out newly released games in the last 30 days.";

  return (
    <Suspense fallback={<GamePageSkeletons header={header} desc={desc} />}>
      <NewGamesPageContainer />
    </Suspense>
  );
}
