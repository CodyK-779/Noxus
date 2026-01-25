import PlatformDetailsContainer from "@/components/PlatformDetailsContainer";
import PDContainerSkeleton from "@/components/skeletons/PDContainerSkeleton";
import { Suspense } from "react";

export default async function PlatformDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{
    date: string;
    genre: string;
    tag: string;
    metascore: string;
    page: string;
  }>;
}) {
  return (
    <Suspense fallback={<PDContainerSkeleton />}>
      <PlatformDetailsContainer params={params} searchParams={searchParams} />
    </Suspense>
  );
}
