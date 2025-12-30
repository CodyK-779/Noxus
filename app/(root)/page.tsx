import { getGames, getNewGames } from "@/actions/games-action";
import HeroSection from "@/components/HeroSection";
import NewReleasesContainer from "@/components/NewReleasesContainer";

export default async function Home() {
  const newGames = await getNewGames();

  return (
    <>
      <HeroSection />
      <NewReleasesContainer newGames={newGames} />
    </>
  );
}
