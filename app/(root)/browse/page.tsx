import BrowseContainer from "@/components/BrowseContainer";
import { Suspense } from "react";

export default function BrowsePage() {
  return (
    <Suspense>
      <BrowseContainer />
    </Suspense>
  );
}
