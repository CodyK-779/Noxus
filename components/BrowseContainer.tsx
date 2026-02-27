import { getGames } from "@/actions/games-action";
import BrowseBanner from "@/components/BrowseBanner";

const BrowseContainer = async () => {
  const games = await getGames();

  return (
    <>
      <BrowseBanner />
    </>
  );
};

export default BrowseContainer;
