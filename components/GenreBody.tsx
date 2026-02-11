import PageNavigation from "./PageNavigation";
import TextExtender from "./TextExtender";
import { Skeleton } from "./ui/skeleton";

interface Props {
  name: string;
  desc: string;
}

const GenreBody = ({ name, desc }: Props) => {
  return (
    <div className="max-container mt-8">
      <PageNavigation path={name} isgenre />
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-2">
        <span className="text-[#e91e3f]">▸</span> About {name} Games
      </h1>

      <TextExtender description={desc} />
    </div>
  );
};

export default GenreBody;
