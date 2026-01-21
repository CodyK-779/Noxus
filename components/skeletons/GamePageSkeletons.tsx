import PageHeaders from "../PageHeaders";
import { Skeleton } from "../ui/skeleton";

interface Props {
  header: string;
  desc: string;
}

const GamePageSkeletons = ({ header, desc }: Props) => {
  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <PageHeaders header={header} desc={desc} />

      <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-5 min-[400px]:gap-4 gap-3 sm:grid-cols-3 grid-cols-2 min-[400px]:pt-16 pt-14">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="relative group min-[400px]:mb-10 mb-6">
            <Skeleton className="aspect-[3/4] rounded-md" />

            <Skeleton className="mt-3 mb-0.5 w-full min-[400px]:h-3.5 h-3" />
            <Skeleton className="min-[400px]:mt-3 mt-2.5 w-full min-[400px]:h-4 h-3" />

            <Skeleton className="min-[400px]:w-20 w-14 min-[400px]:h-3 h-2.5 min-[400px]:mt-2.5 mt-2" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default GamePageSkeletons;
