import HomeContainer from "@/components/HomeContainer";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <HomeContainer />
      </Suspense>
    </>
  );
}
