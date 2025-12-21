import { getGames } from "@/actions/games-action";
import { getGenres } from "@/actions/genres-action";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const goty = ["Hollow Knight: Silksong", "Elden Ring", "Grand Theft Auto V"];

export default async function Home() {
  return (
    <div className="max-container pt-[90px]">
      <HeroSection />
    </div>
  );
}
