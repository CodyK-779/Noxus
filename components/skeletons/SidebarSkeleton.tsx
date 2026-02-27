"use client";

import Image from "next/image";
import { useMenu } from "../MenuProvider";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, Compass, Home, Store, User, X } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  { title: "Discover", link: "/", icon: Home },
  { title: "Browse", link: "/browse", icon: Compass },
  { title: "Stores", link: "/stores", icon: Store },
];

const SidebarSkeleton = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpenMenu(false);
  };

  const handleClose = () => setOpenMenu(false);

  return (
    <>
      {/* Backdrop with blur effect */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 min-[850px]:hidden"
          onClick={handleClose}
        />
      )}

      <aside
        className={`fixed min-[850px]:hidden top-0 right-0 z-30 min-h-screen w-[380px] max-[640px]:w-full bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-[#0a0a0a] backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
        style={{
          boxShadow: "-10px 0 30px -15px rgba(233,30,63,0.3)",
        }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e91e3f] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#e91e3f] to-transparent rounded-full blur-3xl" />
        </div>

        {/* Header with glass effect */}
        <div className="relative border-b border-[#e91e3f] bg-gradient-to-r from-transparent via-white/5 to-transparent">
          <div className="flex items-center justify-between p-4">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <div className="relative min-[400px]:size-9 size-8 overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo-red.png"
                  alt="Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold font-orbitron tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Noxus
                </h1>
                <span className="text-[10px] text-neutral-400 tracking-widest">
                  GAMING HUB
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="relative min-[400px]:size-10 size-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
            >
              <X className="min-[400px]:size-5 size-4 text-neutral-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-4 mt-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer group">
            <Skeleton className="min-[375px]:size-12 size-11 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-3 w-24 mb-2" />
              <Skeleton className="h-2.5 w-32" />
            </div>
            <ChevronRight className="size-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </div>

        {/* Main navigation */}
        <div className="relative px-4 py-6">
          <p className="text-xs font-semibold text-neutral-500 tracking-wider px-4 mb-3">
            MAIN MENU
          </p>
          <ul className="space-y-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.link ||
                (link.link !== "/" && pathname.startsWith(link.link));

              return (
                <li key={link.title}>
                  <Link
                    href={link.link}
                    onClick={handleClose}
                    className={`relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden ${
                      isActive ||
                      (pathname.includes("/discover") &&
                        link.title === "Discover")
                        ? "text-[#e91e3f]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#e91e3f]/10 to-transparent transition-opacity duration-300 ${
                        isActive ||
                        (pathname.includes("/discover") &&
                          link.title === "Discover")
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Icon with animation */}
                    <div className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-[#e91e3f]">
                      <Icon className="size-5" />
                    </div>

                    {/* Title */}
                    <span className="relative z-10 flex-1">{link.title}</span>

                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="relative z-10 size-1.5 rounded-full bg-[#e91e3f] animate-pulse" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-gradient-to-t from-neutral-900 to-transparent">
          <Button
            size="lg"
            className="flex items-center gap-2 w-full font-semibold bg-gradient-to-r from-[#e91e3f] to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-[#e91e3f]/25 transition-all hover:scale-[1.02]"
          >
            <User className="size-4" />
            Sign In
          </Button>
        </div>
      </aside>
    </>
  );
};

export default SidebarSkeleton;
