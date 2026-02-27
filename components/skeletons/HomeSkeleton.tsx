import GamePlatformsContainer from "../GamePlatformsContainer";
import GameGenresContainerSkele from "./GameGenresContainerSkele";
import GameSkeletonContainer from "./GameSkeletonContainer";
import HeroAndHRSkeleton from "./HeroAndHRSkeleton";

const HomeSkeleton = () => {
  return (
    <>
      <HeroAndHRSkeleton />
      <GameGenresContainerSkele />
      <GameSkeletonContainer header="Discover New Releases" />
      <GamePlatformsContainer />
      <GameSkeletonContainer header="Discover Upcoming Games" />
    </>
  );
};

export default HomeSkeleton;
