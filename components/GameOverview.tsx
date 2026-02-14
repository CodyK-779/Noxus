"use client";

import { GameScreenShots, GameTrailers } from "@/actions/games-action";
import { RAWGResponse } from "./utils/interfaceTypes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Play } from "lucide-react";
import GamePaginateCtrls from "./GamePaginateCtrls";

interface Props {
  screenshots: RAWGResponse<GameScreenShots>;
  trailers: RAWGResponse<GameTrailers>;
}

interface DataType {
  id: string;
  img: string;
  url: string;
  type: "image" | "video";
}

const GameOverview = ({ screenshots, trailers }: Props) => {
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 4,
  });

  useEffect(() => {
    const updatePaginate = () => {
      const xl = window.innerWidth >= 1280;
      const lg = window.innerWidth >= 1024;
      const md = window.innerWidth >= 768;
      const sm = window.innerWidth >= 640;

      if (xl) {
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 6 }));
      } else if (lg) {
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 5 }));
      } else if (md) {
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 4 }));
      } else if (sm) {
        setPaginate((prev) => ({ start: prev.start, end: prev.start + 3 }));
      } else {
        setPaginate((prev) => ({
          start: prev.start,
          end: prev.start + 4,
        }));
      }
    };

    updatePaginate();

    window.addEventListener("resize", updatePaginate);
    return () => window.removeEventListener("resize", updatePaginate);
  }, []);

  const mergedData = useMemo(() => {
    const merged: DataType[] = [];

    if (trailers.results.length > 0) {
      trailers.results.forEach((t) => {
        merged.push({
          id: `Trailer id: ${t.id}`,
          img: t.preview,
          url: t.data.max,
          type: "video",
        });
      });
    }

    if (screenshots.results.length > 0) {
      screenshots.results.forEach((s) => {
        merged.push({
          id: `Image id: ${s.id}`,
          img: s.image,
          url: s.image,
          type: "image",
        });
      });
    }

    return merged;
  }, [screenshots, trailers]);

  const isNotEmpty = mergedData.length > 0;

  const [currentItem, setCurrentItem] = useState({
    url: isNotEmpty ? mergedData[0].url : "",
    type: isNotEmpty ? mergedData[0].type : "",
  });

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
      <div className="col-span-2">
        {mergedData.length > 0 && (
          <>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900">
              {currentItem.type === "video" ? (
                <video
                  src={currentItem.url}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={currentItem.url}
                  alt=""
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="relative grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-4 lg:gap-4 gap-3.5 sm:px-12 px-10 mt-6">
              {mergedData.length > 0 &&
                mergedData.slice(paginate.start, paginate.end).map((data) => (
                  <div
                    key={data.id}
                    onClick={() =>
                      setCurrentItem({ url: data.url, type: data.type })
                    }
                    className={`relative aspect-video rounded-md overflow-hidden cursor-pointer group ${currentItem.url === data.url && "border-[2px] border-white"}`}
                  >
                    <Image
                      src={data.img}
                      alt={data.id}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                    {currentItem.url !== data.url && (
                      <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-all duration-300" />
                    )}
                    {data.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="size-5 fill-white opacity-50" />
                      </div>
                    )}
                  </div>
                ))}

              <GamePaginateCtrls
                paginate={paginate}
                setPaginate={setPaginate}
                count={mergedData.length}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameOverview;
