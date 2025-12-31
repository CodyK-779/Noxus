"use client";

import { GamesType } from "@/actions/games-action";
import { RAWGResponse } from "@/actions/genres-action";
import { Swiper, SwiperSlide } from "swiper/react";
import MBNewGameCard from "./MBNewGameCard";

interface Props {
  newGames: RAWGResponse<GamesType>;
}

const MBNewGamesSwiper = ({ newGames }: Props) => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {newGames.results.map((game) => (
          <SwiperSlide key={game.id}>
            <MBNewGameCard data={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBNewGamesSwiper;
