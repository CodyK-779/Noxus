import GenreDetailsContainer from "@/components/GenreDetailsContainer";
import GenreDetailSkeleton from "@/components/skeletons/GenreDetailSkeleton";
import { Suspense } from "react";

export interface GenreSearchParams {
  page: string;
  platform: string;
  date: string;
  tag: string;
  metascore: string;
}

export default async function GenreDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<GenreSearchParams>;
}) {
  return (
    <Suspense fallback={<GenreDetailSkeleton />}>
      <GenreDetailsContainer params={params} searchParams={searchParams} />
    </Suspense>
  );
}
