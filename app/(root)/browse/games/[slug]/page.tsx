import GameDetailsContainer from "@/components/GameDetailsContainer";
import { Suspense } from "react";

export default function GameDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense>
      <GameDetailsContainer params={params} />
    </Suspense>
  );
}
