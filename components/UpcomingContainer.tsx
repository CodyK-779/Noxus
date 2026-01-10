"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import UpcomingGames from "./UpcomingGames";
import { RAWGResponse } from "@/actions/genres-action";
import { GamesType } from "@/actions/games-action";
import MBUpcomingGamesSwiper from "./MBUpcomingGamesSwiper";
import { WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const UpcomingContainer = ({ games, wishlistItems }: Props) => {
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
        header="Discover Upcoming Games"
        link="/discover/upcoming_games"
        gamesCount={games.results.length}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <UpcomingGames
        paginate={paginate}
        games={games}
        wishlistItems={wishlistItems}
      />
      <MBUpcomingGamesSwiper games={games} />
    </>
  );
};

export default UpcomingContainer;
