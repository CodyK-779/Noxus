"use client";

import { cards } from "@/data/browse-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/autoplay";
// @ts-ignore
import "swiper/css/navigation";
import { useRef } from "react";

const BrowseFeatured = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section className="max-container mt-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <h1 className="text-[22px] min-[350px]:text-2xl min-[425px]:text-3xl sm:text-4xl font-bold ">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Explore
          </span>{" "}
          <span className="text-[#e91e3f]">Collections</span>
        </h1>
        <div className="hidden min-[375px]:flex items-center gap-3">
          <button
            ref={prevRef}
            className="flex items-center justify-center p-2 bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50 rounded-full"
          >
            <ChevronLeft className="size-3.5 sm:size-4" />
          </button>
          <button
            ref={nextRef}
            className="flex items-center justify-center p-2 bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-50 rounded-full"
          >
            <ChevronRight className="size-3.5 sm:size-4" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1.5}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        loop={true}
        breakpoints={{
          375: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2.5, spaceBetween: 14 },
          768: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 14 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mt-5 min-[350px]:mt-6"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <Link href={card.link}>
              <div className="xl:p-5 min-[425px]:p-4 p-3 bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-xl overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="px-2.5 py-1 font-medium rounded-full sm:text-[11px] text-[10px] bg-neutral-900 text-white">
                      {card.tag}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow min-[425px]:mt-4 mt-3">
                  <p className="text-sm min-[425px]:text-base lg:text-lg font-semibold line-clamp-1 group-hover:text-[#e91e3f] transition-colors">
                    {card.title}
                  </p>
                  <p className="text-xs md:text-sm md:mt-0 mt-0.5 text-neutral-400 min-[830px]:line-clamp-1 line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrowseFeatured;
