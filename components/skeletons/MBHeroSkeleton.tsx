"use client";

import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense, useState } from "react";
import { heroMobile } from "@/data/hero-data";
import HeroGameCardSkeleton from "./HeroGameCardSkeleton";
import MBHeroSwiperSkeleton from "./MBHeroSwiperSkeleton";

const MBHeroSkeleton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-[768px]:hidden pt-[90px]">
      <Suspense fallback={<MBHeroSwiperSkeleton />}>
        <Swiper
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Pagination, A11y]}
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
      </Suspense>
    </section>
  );
};

export default MBHeroSkeleton;
