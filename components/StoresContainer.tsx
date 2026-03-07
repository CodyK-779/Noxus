import { getStores } from "@/actions/stores-action";
import Image from "next/image";

const StoresContainer = async () => {
  const stores = await getStores();

  const formatDomain = (domain: string) => {
    try {
      return new URL(`https://${domain}`).hostname.replace("www.", "");
    } catch {
      return domain;
    }
  };

  return (
    <main className="max-container mt-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 min-[375px]:h-16 h-14 bg-[#e91e3f] rounded-full" />
        <div>
          <h1 className="md:text-5xl min-[375px]:text-4xl text-3xl font-bold">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Game
            </span>{" "}
            <span className="text-[#e91e3f]">Stores</span>
          </h1>
          <p className="text-neutral-400 min-[375px]:text-sm text-xs mt-1">
            Discover where to buy your favorite games
          </p>
        </div>
      </div>

      {/* Total Stores */}
      <div className="flex items-center gap-3 mt-10">
        <h3 className="text-xl font-bold flex items-center gap-2">
          Total Stores
          <span className="text-sm px-2 py-0.5 bg-[#e91e3f]/10 rounded-full text-[#e91e3f]">
            {stores.count}
          </span>
        </h3>
      </div>

      <hr className="my-4 border-neutral-800" />

      {/* Stores Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stores.results.map((store) => (
          <a
            key={store.id}
            href={`https://${store.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-red-600 transition-all duration-300"
          >
            {/* Background Image */}
            <div className="relative w-full h-56">
              <Image
                src={store.image_background}
                alt={store.name}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1280px) 50vw,
                       25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 w-full">
              {/* Name */}
              <h2 className="text-lg font-semibold group-hover:text-red-500 transition">
                {store.name}
              </h2>

              {/* Domain */}
              <p className="text-sm text-neutral-400 truncate">
                {formatDomain(store.domain)}
              </p>

              {/* Games Count */}
              <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-neutral-800 text-xs text-neutral-300">
                {store.games_count.toLocaleString()} Games
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default StoresContainer;
