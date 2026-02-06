import Image from "next/image";

interface Props {
  query: string;
}

const NoResults = ({ query }: Props) => {
  return (
    <div className="max-container flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center">
        <div className="relative min-[375px]:size-[180px] min-[350px]:size-[170px] size-[150px]">
          <Image
            src="/no_results.png"
            alt="No Results"
            fill
            sizes="(min-width: 400px) 180px, (min-width: 400px) 170px, 150px"
            className="object-cover"
          />
        </div>
        <div className="min-[350px]:mt-10 mt-8 text-center min-w-0 w-full">
          <h1 className="min-[350px]:text-xl text-lg font-bold line-clamp-2 break-words">
            No results for "{query}"
          </h1>
          <p className="text-sm font-medium text-neutral-400">
            Check your spelling and try again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
