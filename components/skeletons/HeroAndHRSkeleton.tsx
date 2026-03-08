import HeroSectionSkeleton from "./HeroSectionSkeleton";
import GameSkeletonContainer from "./GameSkeletonContainer";

const HeroAndHRSkeleton = () => {
  return (
    <>
      <HeroSectionSkeleton />
      <GameSkeletonContainer
        link="/discover/high-ratings"
        header="Discover Highly Rated Games"
      />
    </>
  );
};

export default HeroAndHRSkeleton;
