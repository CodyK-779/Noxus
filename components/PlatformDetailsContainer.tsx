import { getPlatformGames } from "@/actions/games-action";
import { getPlatformDetails } from "@/actions/platforms-action";
import TextExtender from "@/utils/TextExtender";
import PlatformFilters from "./PlatformFilters";
import Image from "next/image";

interface Props {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ date: string }>;
}

const PlatformDetailsContainer = async ({ params, searchParams }: Props) => {
  const platformId = (await params).id;
  const dates = (await searchParams).date || "";
  const [platform, games] = await Promise.all([
    getPlatformDetails(platformId),
    getPlatformGames(platformId, dates),
  ]);

  return (
    <div className="max-container mt-24">
      <h1 className="text-5xl font-bold mb-4">Games for {platform.name}</h1>
      {platform.description && (
        <TextExtender description={platform.description} />
      )}
      <PlatformFilters />
      <ul className="flex flex-col gap-4">
        {games.results.map((game) => (
          <li key={game.id} className="flex flex-col gap-1">
            <div className="relative aspect-video size-40 rounded-md overflow-hidden">
              {game.background_image ? (
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/image-placeholder.webp"
                  alt="Image placeholder"
                  fill
                  sizes="(max-width: 768px) 80vw"
                  className="object-cover"
                />
              )}
            </div>
            <p className="font-medium">{game.name}</p>
            <p className="font-medium">{game.metacritic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformDetailsContainer;
