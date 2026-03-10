"use client";

import { useMenu } from "./MenuProvider";
import Image from "next/image";
import {
  X,
  Home,
  Compass,
  Store,
  Heart,
  LogOut,
  ChevronRight,
  User,
  Loader2,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "@/app/lib/auth-client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const navLinks = [
  { title: "Discover", link: "/", icon: Home },
  { title: "Browse", link: "/browse", icon: Compass },
  { title: "Stores", link: "/stores", icon: Store },
  { title: "Wishlist", link: "/wishlist", icon: Heart },
];

const Sidebar = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => setOpenMenu(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpenMenu(false);
  };

  const handleSignout = async () => {
    setLoading(true);

    try {
      await signOut();
      window.location.href = "/signIn";
      toast.success("User Signed out successfully!");
    } catch (error) {
      toast.error("Failed to Log Out user");
    } finally {
      setLoading(false);
    }
  };

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
        className={`fixed min-[850px]:hidden top-0 right-0 z-40 min-h-screen w-[380px] max-[640px]:w-full bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-[#0a0a0a] backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
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
        {mounted && session && (
          <div className="px-4 mt-6">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer group">
              <div className="relative min-[375px]:size-12 size-11 flex items-center justify-center rounded-full overflow-hidden transition-all bg-neutral-600 text-white">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <User className="size-5" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{session.user.name}</p>
                <p className="text-xs text-neutral-400">{session.user.email}</p>
              </div>
              <ChevronRight className="size-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        )}

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

              // if (mounted && link.title === "Wishlist" && !session) return;

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
          {mounted && session ? (
            <Button
              size="lg"
              onClick={handleSignout}
              className="flex items-center gap-2 w-full font-semibold bg-gradient-to-r from-[#e91e3f] to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-[#e91e3f]/25 transition-all hover:scale-[1.02]"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <LogOut className="size-4" />
                  Logout
                </>
              )}
            </Button>
          ) : (
            <Button
              size="lg"
              asChild
              className="flex items-center gap-2 w-full font-semibold bg-gradient-to-r from-[#e91e3f] to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-[#e91e3f]/25 transition-all hover:scale-[1.02]"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <Link href="/signIn">
                  <User className="size-4" />
                  Sign In
                </Link>
              )}
            </Button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
