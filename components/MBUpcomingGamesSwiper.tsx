"use client";

import { GamesType } from "@/actions/games-action";
import { Swiper, SwiperSlide } from "swiper/react";
import MBUpcomingGames from "./MBUpcomingGames";
import { RAWGResponse } from "@/utils/interfaceTypes";

interface Props {
  games: RAWGResponse<GamesType>;
}

const MBUpcomingGamesSwiper = ({ games }: Props) => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {games.results.map((game) => (
          <SwiperSlide key={game.id}>
            <MBUpcomingGames data={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBUpcomingGamesSwiper;
