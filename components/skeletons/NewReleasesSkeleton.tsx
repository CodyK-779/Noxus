import GameSectionSkeletons from "./GameSectionSkeletons";
import SectionHeaderShell from "./SectionHeaderShell";

const NewReleasesSkeleton = () => {
  return (
    <>
      <SectionHeaderShell header="Discover New Releases" />
      <GameSectionSkeletons />
    </>
  );
};

export default NewReleasesSkeleton;
