import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import GameOverviewSkeleton from "./GameOverviewSkeleton";

const GameTabsSkeleton = () => {
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
        <GameOverviewSkeleton />
      </TabsContent>
      <TabsContent value="achievements">
        <p>Grammy</p>
      </TabsContent>
    </Tabs>
  );
};

export default GameTabsSkeleton;
