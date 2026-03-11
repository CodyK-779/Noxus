"use client";

import { heroMobile } from "@/data/hero-data";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroGameCardSkeleton from "./HeroGameCardSkeleton";

const MBHeroSwiperSkeleton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1.25}
        centeredSlides={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          el: ".swiper-pagination-container",
        }}
        className="mb-2"
      >
        {heroMobile.map((data, index) => (
          <SwiperSlide key={data.link}>
            <HeroGameCardSkeleton
              data={data}
              isActive={activeIndex === index}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-5" />
      </Swiper>
    </>
  );
};

export default MBHeroSwiperSkeleton;
