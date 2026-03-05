"use client";

import { GamesType } from "@/actions/games-action";
import { RAWGResponse, WishlistItemType } from "./utils/interfaceTypes";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Best2025Games from "./Best2025Games";
import MBBest2025Swiper from "./MBBest2025Swiper";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const Best2025Container = ({ games, wishlistItems }: Props) => {
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 5,
  });

  useEffect(() => {
    const updateEndValue = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setPaginate((prev) => ({
        start: prev.start,
        end: isLargeScreen ? prev.start + 5 : prev.start + 4,
      }));
    };

    updateEndValue();

    window.addEventListener("resize", updateEndValue);
    return () => window.removeEventListener("resize", updateEndValue);
  }, []);

  return (
    <>
      <SectionHeader
        header="Discover Best of 2025"
        link="/discover/best_2025"
        gamesCount={games.results.length}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <Best2025Games
        paginate={paginate}
        games={games}
        wishlistItems={wishlistItems}
      />
      <MBBest2025Swiper games={games} wishlistItems={wishlistItems} />
    </>
  );
};

export default Best2025Container;
