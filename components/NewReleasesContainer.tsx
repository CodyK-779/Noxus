"use client";

import { useState } from "react";
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
