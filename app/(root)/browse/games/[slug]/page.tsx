import GameDetailsContainer from "@/components/GameDetailsContainer";
import GameDetailsSkeleton from "@/components/skeletons/GameDetailsSkeleton";
import { Suspense } from "react";

export default function GameDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<GameDetailsSkeleton />}>
      <GameDetailsContainer params={params} />
    </Suspense>
  );
}
