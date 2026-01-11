import { platformData } from "@/data/platform-data";
import PlatformList from "./PlatformList";

const GamePlatforms = () => {
  return (
    <div className="hidden min-[768px]:grid grid-cols-3">
      <PlatformList
        border
        padding="px-2"
        platforms={platformData.slice(0, 6)}
      />

      <PlatformList
        border
        padding="lg:px-2 px-1.5"
        platforms={platformData.slice(6, 12)}
      />

      <PlatformList padding="px-2" platforms={platformData.slice(12, 18)} />
    </div>
  );
};

export default GamePlatforms;
