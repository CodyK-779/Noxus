import GameSectionSkeletons from "./GameSectionSkeletons";
import MBGameSectionSkeletons from "./MBGameSectionSkeletons";
import SectionHeaderShell from "./SectionHeaderShell";

interface Props {
  link: string;
  header: string;
}

const GameSkeletonContainer = ({ link, header }: Props) => {
  return (
    <>
      <SectionHeaderShell link={link} header={header} />
      <GameSectionSkeletons />

      <MBGameSectionSkeletons />
    </>
  );
};

export default GameSkeletonContainer;
