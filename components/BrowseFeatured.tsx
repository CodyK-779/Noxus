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
        <h1 className="text-4xl font-bold ">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Explore
          </span>{" "}
          <span className="text-[#e91e3f]">Collections</span>
        </h1>
        <div className="hidden min-[768px]:flex items-center gap-3">
          <button
            ref={prevRef}
            className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            ref={nextRef}
            className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        loop={true}
        className="mt-6"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <Link href={card.link}>
              <div className="p-5 bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-xl overflow-hidden ">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-center mt-4">
                  {card.title}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrowseFeatured;
