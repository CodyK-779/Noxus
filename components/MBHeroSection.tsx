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
import { WishlistItemType } from "@/utils/interfaceTypes";

interface Props {
  wishlistItems: WishlistItemType[] | undefined;
}

const MBHeroSection = ({ wishlistItems }: Props) => {
  return (
    <section className="min-[768px]:hidden pt-[90px]">
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
            el: ".swiper-pagination-container",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mb-2"
        >
          {heroMobile.map((data) => (
            <SwiperSlide key={data.link}>
              <HeroGameCard data={data} wishlistItems={wishlistItems} />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-5"></div>
        </Swiper>
      </Suspense>
    </section>
  );
};

export default MBHeroSection;
