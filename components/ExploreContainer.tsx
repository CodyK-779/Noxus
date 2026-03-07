import { exploreData } from "@/data/explore-data";
import Image from "next/image";
import Link from "next/link";

const ExploreContainer = () => {
  return (
    <section className="max-container hidden md:grid grid-cols-3 lg:gap-6 gap-5 mt-20">
      {exploreData.map((data) => (
        <div key={data.id} className="group">
          <Link href={data.link}>
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
          <div className="flex flex-col justify-between h-[190px] lg:h-[180px]">
            <div>
              <p className="mt-3.5 text-lg lg:text-xl font-bold group-hover:text-[#e91e3f] transition-colors">
                {data.title}
              </p>
              <p className="mt-1 lg:mt-2 text-[13px] lg:text-sm font-medium text-neutral-400 line-clamp-4">
                {data.desc}
              </p>
            </div>
            {data.title !== "Sales & Specials" ? (
              <Link href={data.link}>
                <button className="nox-hollow text-xs font-bold px-4 tracking-wide mt-4">
                  Learn more
                </button>
              </Link>
            ) : (
              <a href={data.link}>
                <button className="nox-hollow text-xs font-bold px-4 tracking-wide mt-4">
                  Learn more
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExploreContainer;
