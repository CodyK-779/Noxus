"use client";

import { useSession } from "@/app/lib/auth-client";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import NavSearch from "./NavSearch";
import { Suspense } from "react";
import NavSearchShell from "./skeletons/NavSearchShell";
import { Menu } from "lucide-react";
import { useMenu } from "./MenuProvider";

const NavRight = () => {
  const { data: session } = useSession();
  const { setOpenMenu } = useMenu();

  return (
    <div className="flex items-center min-[350px]:gap-4 gap-3.5">
      <Suspense fallback={<NavSearchShell />}>
        <NavSearch />
      </Suspense>
      {session ? (
        <ProfileDropdown />
      ) : (
        <Link href="/signIn">
          <button className="min-[400px]:text-sm text-xs sm:px-5 px-4 font-bold nox-btn">
            Sign In
          </button>
        </Link>
      )}
      <div className="min-[850px]:hidden" onClick={() => setOpenMenu(true)}>
        <Menu className="min-[400px]:size-8 size-7" />
      </div>
    </div>
  );
};

export default NavRight;
