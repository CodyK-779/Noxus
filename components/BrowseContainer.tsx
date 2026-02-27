import { getGames } from "@/actions/games-action";
import { BrowseSearch } from "@/app/(root)/browse/page";
import BrowseBanner from "@/components/BrowseBanner";

interface Props {
  searchParams: Promise<BrowseSearch>;
}

const BrowseContainer = async ({ searchParams }: Props) => {
  const search = (await searchParams).search || "";
  const games = await getGames();

  return (
    <>
      <BrowseBanner />
    </>
  );
};

export default BrowseContainer;
