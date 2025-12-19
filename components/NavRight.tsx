"use client";

import { signOut, useSession } from "@/app/lib/auth-client";
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

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/signIn";
  };

  return (
    <div className="flex items-center gap-4">
      <Suspense fallback={<NavSearchShell />}>
        <NavSearch />
      </Suspense>
      {session ? (
        <ProfileDropdown />
      ) : (
        <Link href="/signIn">
          <button className="text-sm px-5 font-bold nox-btn">Sign In</button>
        </Link>
      )}
      <div className="min-[800px]:hidden" onClick={() => setOpenMenu(true)}>
        <Menu className="size-8" />
      </div>
    </div>
  );
};

export default NavRight;
