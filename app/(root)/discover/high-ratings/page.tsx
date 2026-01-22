import HRPageContainer from "@/components/HRPageContainer";
import GamePageSkeletons from "@/components/skeletons/GamePageSkeletons";
import { Suspense } from "react";

export default function HRGamesPage() {
  const header = "Discover Highly Rated Games";
  const desc =
    "This collection features games with 80+ Metacritic scores, 4.5+ user ratings, and universal critical acclaim.";

  return (
    <Suspense fallback={<GamePageSkeletons header={header} desc={desc} />}>
      <HRPageContainer header={header} desc={desc} />
    </Suspense>
  );
}
