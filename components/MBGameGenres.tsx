"use client";

import { GenreResults, RAWGResponse } from "@/actions/genres-action";
import { Swiper, SwiperSlide } from "swiper/react";
import MBGenreList from "./MBGenreList";
import { Pagination } from "swiper/modules";

interface Props {
  genres: RAWGResponse<GenreResults>;
}

const MBGameGenres = ({ genres }: Props) => {
  return (
    <div className="min-[768px]:hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2}
        loop={false}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          el: ".swiper-pagination-container",
        }}
        breakpoints={{
          350: {
            slidesPerView: 1.3,
          },
          375: {
            slidesPerView: 1.4,
          },
          400: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.1,
          },
        }}
      >
        <SwiperSlide>
          <MBGenreList
            border
            padding="px-2"
            genres={genres.results.slice(0, 6)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MBGenreList
            border
            padding="px-2"
            genres={genres.results.slice(6, 12)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MBGenreList padding="px-2" genres={genres.results.slice(12, 18)} />
        </SwiperSlide>

        <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-10"></div>
      </Swiper>
    </div>
  );
};

export default MBGameGenres;
