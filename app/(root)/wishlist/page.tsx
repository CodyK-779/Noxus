import WishlistPageContainer from "@/components/WishlistPageContainer";
import { Suspense } from "react";

export default function WishlistPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WishlistPageContainer />
    </Suspense>
  );
}
