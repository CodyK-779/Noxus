import GameSectionSkeletons from "./GameSectionSkeletons";
import MBGameSectionSkeletons from "./MBGameSectionSkeletons";
import SectionHeaderShell from "./SectionHeaderShell";

interface Props {
  header: string;
}

const GameSkeletonContainer = ({ header }: Props) => {
  return (
    <>
      <SectionHeaderShell header={header} />
      <GameSectionSkeletons />

      <MBGameSectionSkeletons />
    </>
  );
};

export default GameSkeletonContainer;
