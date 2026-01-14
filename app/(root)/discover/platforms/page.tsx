import PlatformsPageContainer from "@/components/PlatformsPageContainer";
import PlatformsPageSkeleton from "@/components/skeletons/PlatformsPageSkeleton";
import { Suspense } from "react";

export default function PlatformsPage() {
  return (
    <Suspense fallback={<PlatformsPageSkeleton />}>
      <PlatformsPageContainer />
    </Suspense>
  );
}
