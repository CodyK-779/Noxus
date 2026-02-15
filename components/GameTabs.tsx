import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import GameOverview from "./GameOverview";
import { RAWGResponse } from "./utils/interfaceTypes";
import {
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";

interface Props {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

const GameTabs = ({ game, screenshots, trailers }: Props) => {
  return (
    <Tabs defaultValue="overview" className="max-container mt-6">
      <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 mb-4">
        <TabsTrigger
          className="tab-trigger min-[425px]:text-base text-sm"
          value="overview"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          className="tab-trigger min-[425px]:text-base text-sm"
          value="achievements"
        >
          Achievements
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <GameOverview
          game={game}
          screenshots={screenshots}
          trailers={trailers}
        />
      </TabsContent>
      <TabsContent value="achievements">
        <p>Grammy</p>
      </TabsContent>
    </Tabs>
  );
};

export default GameTabs;
