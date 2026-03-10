import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BrowseNavigation = () => {
  return (
    <section className="relative w-full py-24 -mb-20 md:mt-24 mt-10">
      <Image
        src="/browse.jpeg"
        alt=""
        sizes="100vw"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:via-black/80 max-sm:via-black/90 max-sm:to-black/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#e91e3f20,_transparent_50%)]" />

      <div className="absolute inset-0 bg-black/20 sm:hidden" />

      <div className="relative max-container h-full flex flex-col items-start justify-center">
        <h1 className="lg:text-[44px] sm:text-4xl min-[425px]:text-3xl min-[350px]:text-2xl text-[22px] font-bold">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Explore our
          </span>{" "}
          <span className="text-nox">catalogue</span>
        </h1>
        <p className="font-medium lg:text-lg min-[425px]:text-base min-[350px]:text-sm text-[13px] lg:max-w-xl sm:max-w-lg w-full text-neutral-300 min-[425px]:mt-6 mt-4">
          There are more than <strong className="text-nox">890k</strong> games
          waiting for you to explore. Browse by genres, platforms, metascore,
          dates and game tags to find your next favourite game.
        </p>

        <button className="nox-btn mt-8 font-semibold px-6 tracking-wide hidden sm:flex items-center gap-2">
          Browse
          <ArrowRight className="size-[18px]" />
        </button>

        <Button
          size="lg"
          asChild
          className="group sm:hidden flex items-center gap-2 min-[425px]:text-base min-[425px]:py-6 w-full min-[425px]:mt-8 mt-7 font-semibold bg-gradient-to-r from-nox to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-nox/25 transition-all hover:scale-[1.02]"
        >
          <Link href="/browse">
            Browse
            <ArrowRight className="size-4 mt-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BrowseNavigation;
