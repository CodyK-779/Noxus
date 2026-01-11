"use client";

import { GamesType } from "@/actions/games-action";
import { Swiper, SwiperSlide } from "swiper/react";
import MBNewGameCard from "./MBNewGameCard";
import { RAWGResponse, WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  newGames: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const MBNewGamesSwiper = ({ newGames, wishlistItems }: Props) => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {newGames.results.map((game) => (
          <SwiperSlide key={game.id}>
            <MBNewGameCard data={game} wishlistItems={wishlistItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBNewGamesSwiper;
