import { getUser } from "@/actions/user-action";
import Best2025Wrapper from "@/components/Best2025Wrapper";
import BrowseNavigation from "@/components/BrowseNavigation";
import ExploreSection from "@/components/ExploreSection";
import GameGenresContainer from "@/components/GameGenresContainer";
import GamePlatformsContainer from "@/components/GamePlatformsContainer";
import GameTagsContainer from "@/components/GameTagsContainer";
import HeroAndHRContainer from "@/components/HeroAndHRContainer";
import NewReleasesWrapper from "@/components/NewReleasesWrapper";
import GameSkeletonContainer from "@/components/skeletons/GameSkeletonContainer";
import HeroAndHRSkeleton from "@/components/skeletons/HeroAndHRSkeleton";
import UpcomingGamesWrapper from "@/components/UpcomingGamesWrapper";
import { cache, Suspense } from "react";

export const getUserPromise = cache(() => {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return Promise.resolve(null);
  }

  return getUser();
});

export default function Home() {
  const userPromise = getUserPromise();

  return (
    <>
      <Suspense fallback={<HeroAndHRSkeleton />}>
        <HeroAndHRContainer userPromise={userPromise} />
      </Suspense>

      <GameGenresContainer />

      <Suspense
        fallback={
          <GameSkeletonContainer
            link="/discover/new-releases"
            header="Discover New Releases"
          />
        }
      >
        <NewReleasesWrapper userPromise={userPromise} />
      </Suspense>

      <GamePlatformsContainer />

      <Suspense
        fallback={
          <GameSkeletonContainer
            link="/discover/upcoming_games"
            header="Discover Upcoming Games"
          />
        }
      >
        <UpcomingGamesWrapper userPromise={userPromise} />
      </Suspense>

      <GameTagsContainer />

      <Suspense
        fallback={
          <GameSkeletonContainer
            link="/discover/best_2025"
            header="Discover Best of 2025"
          />
        }
      >
        <Best2025Wrapper userPromise={userPromise} />
      </Suspense>

      <ExploreSection />

      <BrowseNavigation />
    </>
  );
}
