"use client";

import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavRight from "./NavRight";
import { useMenu } from "./MenuProvider";
import MobileNavSearch from "./MobileNavSearch";

const NavContent = () => {
  const { openSearch } = useMenu();

  return (
    <>
      <div
        className={`max-container ${
          openSearch ? "hidden min-[580px]:flex" : "flex"
        } items-center justify-between`}
      >
        {/* First Row */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative min-[400px]:size-9 size-8 overflow-hidden">
              <Image
                src="/logo-red.png"
                alt="Logo"
                fill
                sizes="(min-width: 400px) 36px, 32px"
                className="object-cover"
              />
            </div>
            <h1 className="min-[400px]:text-2xl text-xl font-bold font-orbitron tracking-wide">
              Noxus
            </h1>
          </Link>
          {/* Second Row */}
          <Navlinks />
        </div>

        {/* Third Row */}
        <NavRight />
      </div>
      {openSearch && <MobileNavSearch />}
    </>
  );
};

export default NavContent;
