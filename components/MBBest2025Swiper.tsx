"use client";

import { GamesType } from "@/actions/games-action";
import { RAWGResponse, WishlistItemType } from "./utils/interfaceTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import MBBest2025Card from "./MBBest2025Card";

interface Props {
  games: RAWGResponse<GamesType>;
  wishlistItems: WishlistItemType[] | undefined;
}

const MBBest2025Swiper = ({ games, wishlistItems }: Props) => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {games.results.map((game) => (
          <SwiperSlide key={game.id}>
            <MBBest2025Card game={game} wishlistItems={wishlistItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBBest2025Swiper;
