"use client";

import { TagType } from "@/actions/tags-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MBTagList from "./MBTagList";

interface Props {
  tags: RAWGResponse<TagType>;
}

const MBGameTags = ({ tags }: Props) => {
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
          <MBTagList border padding="px-2" tags={tags.results.slice(0, 6)} />
        </SwiperSlide>
        <SwiperSlide>
          <MBTagList border padding="px-2" tags={tags.results.slice(6, 12)} />
        </SwiperSlide>
        <SwiperSlide>
          <MBTagList padding="px-2" tags={tags.results.slice(12, 18)} />
        </SwiperSlide>

        <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-10"></div>
      </Swiper>
    </div>
  );
};

export default MBGameTags;
