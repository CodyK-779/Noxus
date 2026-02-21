import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import GameOverview from "./GameOverview";
import { RAWGResponse, WishlistItemType } from "./utils/interfaceTypes";
import {
  GameAchievements,
  GameDetails,
  GameScreenShots,
  GameTrailers,
} from "@/actions/games-action";
import GameAchievementsTab from "./GameAchievementsTab";

interface Props {
  game: GameDetails;
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
  achievements: RAWGResponse<GameAchievements>;
  wishlistItem: WishlistItemType[] | undefined;
}

const GameTabs = ({
  game,
  screenshots,
  trailers,
  achievements,
  wishlistItem,
}: Props) => {
  return (
    <Tabs defaultValue="overview" className="max-container mt-6">
      <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 md:mb-4 mb-2">
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
          achievements={achievements}
          wishlistItem={wishlistItem}
        />
      </TabsContent>
      <TabsContent value="achievements">
        <GameAchievementsTab achievements={achievements} />
      </TabsContent>
    </Tabs>
  );
};

export default GameTabs;
