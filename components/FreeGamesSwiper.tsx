import { freeGames } from "@/data/free-data";
import Image from "next/image";
import Link from "next/link";

const FreeGamesSwiper = () => {
  return (
    <section className="hidden md:grid grid-cols-3 lg:gap-6 gap-5 mt-24 mb-20">
      {freeGames.map((data) => (
        <div key={data.id} className="group">
          <Link href={`/browse/games/${data.slug}?from=free_games`}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 35vw, (max-width: 1280px) 32vw, 650px"
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-between h-[190px] lg:h-[200px]">
            <div>
              <p className="mt-3.5 text-lg lg:text-xl font-bold group-hover:text-[#e91e3f] transition-colors">
                {data.title}
              </p>
              <p className="mt-1 lg:mt-2 text-[13px] lg:text-sm font-medium text-neutral-400 line-clamp-4">
                {data.desc}
              </p>
            </div>
            <Link href={`/browse/games/${data.slug}?from=free_games`}>
              <button className="nox-hollow text-xs font-bold px-4 tracking-wide mt-4">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FreeGamesSwiper;
