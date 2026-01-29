"use client";

import { GamesType } from "@/actions/games-action";
import {
  RAWGResponse,
  WishlistItemType,
} from "@/components/utils/interfaceTypes";
import SectionHeader from "./SectionHeader";
import { useEffect, useState } from "react";
import HighRatedGames from "./HighRatedGames";
import MBHRGamesSwiper from "./MBHRGamesSwiper";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const HighRatedContainer = ({ games, wishlistItems }: Props) => {
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 5,
  });

  useEffect(() => {
    const updateEndValue = () => {
      const largeScreen = window.innerWidth >= 1024;
      setPaginate((prev) => ({
        start: prev.start,
        end: largeScreen ? prev.start + 5 : prev.start + 4,
      }));
    };

    updateEndValue();

    window.addEventListener("resize", updateEndValue);

    return () => window.removeEventListener("resize", updateEndValue);
  }, []);

  return (
    <>
      <SectionHeader
        header="Discover Highly Rated Games"
        link="/discover/high-ratings"
        gamesCount={games.results.length}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <HighRatedGames
        games={games}
        wishlistItems={wishlistItems}
        paginate={paginate}
      />
      <MBHRGamesSwiper games={games} wishlistItems={wishlistItems} />
    </>
  );
};

export default HighRatedContainer;
