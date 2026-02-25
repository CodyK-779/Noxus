import StoresPageSkeleton from "@/components/skeletons/StoresPageSkeleton";
import StoresContainer from "@/components/StoresContainer";
import { Suspense } from "react";

export default function StoresPage() {
  return (
    <Suspense fallback={<StoresPageSkeleton />}>
      <StoresContainer />
    </Suspense>
  );
}
