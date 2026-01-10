"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "../ui/skeleton";

const MBGameSectionSkeletons = () => {
  return (
    <div className="min-[768px]:hidden max-container">
      <Swiper spaceBetween={18} slidesPerView={1.62} loop={false}>
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <Skeleton className="aspect-[3/4] rounded-md" />

              <Skeleton className="mt-3 mb-0.5 w-full min-[400px]:h-3.5 h-3" />
              <Skeleton className="mt-3 w-full min-[400px]:h-4 h-3" />

              <div className="flex items-center justify-between mt-2.5">
                <Skeleton className="w-20 min-[400px]:h-3 h-2.5" />
                <Skeleton className="w-20 min-[400px]:h-3 h-2.5" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MBGameSectionSkeletons;
