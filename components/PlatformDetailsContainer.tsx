import { getPlatformGames } from "@/actions/games-action";
import { getPlatformDetails } from "@/actions/platforms-action";
import TextExtender from "@/utils/TextExtender";

interface Props {
  params: Promise<{ id: number }>;
}

const PlatformDetailsContainer = async ({ params }: Props) => {
  const platformId = (await params).id;
  const [platform, games] = await Promise.all([
    getPlatformDetails(platformId),
    getPlatformGames(platformId),
  ]);

  return (
    <div className="max-container mt-24">
      <h1 className="text-5xl font-bold mb-4">Games for {platform.name}</h1>
      {platform.description && (
        <TextExtender description={platform.description} />
      )}
    </div>
  );
};

export default PlatformDetailsContainer;
