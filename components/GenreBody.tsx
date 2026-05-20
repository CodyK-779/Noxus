import PageNavigation from "./PageNavigation";
import TextExtender from "./TextExtender";

interface Props {
  name: string;
  desc: string;
}

const GenreBody = ({ name, desc }: Props) => {
  return (
    <div className="max-container mt-8">
      <PageNavigation path={name} isgenre />
      <h1 className="md:text-3xl min-[400px]:text-2xl text-xl font-bold mb-2">
        <span className="text-[#e91e3f]">▸</span>{" "}
        <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          About{" "}
        </span>
        <span className="text-[#e91e3f]">{name}</span>{" "}
        <span className="bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
          Games
        </span>
      </h1>

      <TextExtender description={desc} />
    </div>
  );
};

export default GenreBody;
