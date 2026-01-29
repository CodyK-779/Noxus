"use client";

import { GamesType } from "@/actions/games-action";
import {
  RAWGResponse,
  WishlistItemType,
} from "@/components/utils/interfaceTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import MBHRGames from "./MBHRGames";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const MBHRGamesSwiper = ({ games, wishlistItems }: Props) => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {games.results.map((game) => (
          <SwiperSlide key={game.id}>
            <MBHRGames game={game} wishlistItems={wishlistItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBHRGamesSwiper;
