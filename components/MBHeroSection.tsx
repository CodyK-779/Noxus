"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import HeroGameCard from "./HeroGameCard";
import { heroMobile } from "@/data/hero-data";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

const MBHeroSection = () => {
  return (
    <section className="min-[768px]:hidden pt-[90px] pb-10">
      <Suspense
        fallback={<Skeleton className="aspect-[3/4] rounded-xl mx-12" />}
      >
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={15}
          slidesPerView={1.25}
          centeredSlides={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {heroMobile.map((data) => (
            <SwiperSlide key={data.link}>
              <HeroGameCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </section>
  );
};

export default MBHeroSection;
