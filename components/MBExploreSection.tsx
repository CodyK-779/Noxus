"use client";

import { exploreData } from "@/data/explore-data";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const MBExploreSection = () => {
  return (
    <section className="max-container md:hidden mt-20">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.25}
        spaceBetween={15}
        loop={false}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          el: ".swiper-pagination-container",
        }}
        breakpoints={{
          375: { spaceBetween: 20 },
        }}
      >
        {exploreData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="group">
              <Link href={data.link}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 375px) 80vw, (max-width: 640px) 80vw, 75vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between h-[160px] mt-3.5">
                <div>
                  <p className="text-base min-[350px]:text-lg sm:text-xl font-bold group-hover:text-[#e91e3f] transition-colors">
                    {data.title}
                  </p>
                  <p className="mt-1 lg:mt-2 text-xs min-[350px]:text-[13px] sm:text-sm font-medium text-neutral-400 line-clamp-4">
                    {data.desc}
                  </p>
                </div>
                {data.title !== "Sales & Specials" ? (
                  <Link href={data.link}>
                    <button className="justify-end nox-hollow sm:text-sm min-[350px]:text-xs text-[11px] font-bold px-4 tracking-wide">
                      Learn more
                    </button>
                  </Link>
                ) : (
                  <a href={data.link}>
                    <button className="justify-end nox-hollow sm:text-sm min-[350px]:text-xs text-[11px] font-bold px-4 tracking-wide">
                      Learn more
                    </button>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination-container flex gap-1.5 items-center justify-center py-10" />
      </Swiper>
    </section>
  );
};

export default MBExploreSection;
