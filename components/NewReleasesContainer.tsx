"use client";

import { useEffect, useState } from "react";
import NewReleases from "./NewReleases";
import NewGames from "./NewGames";
import { RAWGResponse } from "@/actions/genres-action";
import { GamesType } from "@/actions/games-action";

interface Props {
  newGames: RAWGResponse<GamesType>;
}

const NewReleasesContainer = ({ newGames }: Props) => {
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
      <NewReleases paginate={paginate} setPaginate={setPaginate} />
      <NewGames
        newGames={newGames}
        paginate={paginate}
        setPaginate={setPaginate}
      />
    </>
  );
};

export default NewReleasesContainer;
