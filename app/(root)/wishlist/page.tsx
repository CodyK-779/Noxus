import WishlistPageSkeleton from "@/components/skeletons/WishlistPageSkeleton";
import WishlistPageContainer from "@/components/WishlistPageContainer";
import { Suspense } from "react";

export default function WishlistPage() {
  return (
    <Suspense fallback={<WishlistPageSkeleton />}>
      <WishlistPageContainer />
    </Suspense>
  );
}
