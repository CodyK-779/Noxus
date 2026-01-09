"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "../ui/skeleton";
import { Bookmark } from "lucide-react";
import { Suspense } from "react";

const MBHeroSkeleton = () => {
  return (
    <section className="min-[768px]:hidden pt-[90px]">
      <Suspense fallback={"loading..."}>
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
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <Skeleton className=" aspect-[3/4] rounded-2xl cursor-pointer" />
                <div className="absolute min-[350px]:top-5 min-[350px]:right-5 top-4 right-4 bg-black border border-white rounded-full flex items-center justify-center p-1 z-10">
                  <Bookmark className="sm:size-5 min-[350px]:size-4 size-3.5" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-5"></div>
        </Swiper>
      </Suspense>
    </section>
  );
};

export default MBHeroSkeleton;
