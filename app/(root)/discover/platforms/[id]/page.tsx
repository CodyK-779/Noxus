import PlatformDetailsContainer from "@/components/PlatformDetailsContainer";
import { Suspense } from "react";

export default async function PlatformDetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  return (
    <Suspense>
      <PlatformDetailsContainer params={params} />
    </Suspense>
  );
}
