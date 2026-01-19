import PlatformDetailsContainer from "@/components/PlatformDetailsContainer";
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
  }>;
}) {
  return (
    <Suspense>
      <PlatformDetailsContainer params={params} searchParams={searchParams} />
    </Suspense>
  );
}
