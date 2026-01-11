"use client";

import { useEffect, useState } from "react";
import NewGames from "./NewGames";
import { GamesType } from "@/actions/games-action";
import MBNewGamesSwiper from "./MBNewGamesSwiper";
import SectionHeader from "./SectionHeader";
import { RAWGResponse, WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  newGames: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const NewReleasesContainer = ({ newGames, wishlistItems }: Props) => {
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 5,
  });

  useEffect(() => {
    const updateEndValue = () => {
      const screenWidth = window.innerWidth >= 1024;
      setPaginate((prev) => ({
        start: prev.start,
        end: screenWidth ? prev.start + 5 : prev.start + 4,
      }));
    };

    updateEndValue();

    window.addEventListener("resize", updateEndValue);

    return () => window.removeEventListener("resize", updateEndValue);
  }, []);

  return (
    <>
      <SectionHeader
        header="Discover New Releases"
        link="/discover/new-releases"
        gamesCount={newGames.results.length}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <NewGames
        newGames={newGames}
        paginate={paginate}
        wishlistItems={wishlistItems}
      />
      <MBNewGamesSwiper newGames={newGames} wishlistItems={wishlistItems} />
    </>
  );
};

export default NewReleasesContainer;
