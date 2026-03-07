import {
  Bookmark,
  ChevronRight,
  Compass,
  Facebook,
  Gamepad,
  Gamepad2,
  Github,
  Home,
  Instagram,
  LayoutGrid,
  Store,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterEmail from "./FooterEmail";

const stats = [
  {
    stat: "890k+",
    name: "Games",
    icon: <Gamepad2 className="size-4 text-nox" />,
  },
  {
    stat: "50",
    name: "Platforms",
    icon: <Gamepad className="size-4 text-nox" />,
  },
  {
    stat: "19",
    name: "Genres",
    icon: <LayoutGrid className="size-4 text-nox" />,
  },
];

const quickLinks = [
  {
    name: "Discover",
    link: "/",
    icon: (
      <Home className="size-4 text-neutral-500 group-hover:text-nox transition-colors" />
    ),
  },
  {
    name: "Browse",
    link: "/browse",
    icon: (
      <Compass className="size-4 text-neutral-500 group-hover:text-nox transition-colors" />
    ),
  },
  {
    name: "Stores",
    link: "/stores",
    icon: (
      <Store className="size-4 text-neutral-500 group-hover:text-nox transition-colors" />
    ),
  },
  {
    name: "Wishlist",
    link: "/wishlist",
    icon: (
      <Bookmark className="size-4 text-neutral-500 group-hover:text-nox transition-colors" />
    ),
  },
  {
    name: "Platforms",
    link: "/discover/platforms",
    icon: (
      <Gamepad className="size-4 text-neutral-500 group-hover:text-nox transition-colors" />
    ),
  },
];

const exploreLinks = [
  { name: "Highly rated games", link: "/discover/high-ratings" },
  { name: "New Releases", link: "/discover/new-releases" },
  { name: "Upcoming games", link: "/discover/upcoming_games" },
  { name: "Best games of 2025", link: "/discover/best_2025" },
  { name: "Free games", link: "/discover/free_games" },
];

const socialLinks = [
  <Twitter className="size-4" />,
  <Instagram className="size-4" />,
  <Facebook className="size-4" />,
  <Github className="size-4" />,
];

const Footer = () => {
  return (
    <footer className="border-t py-10 bg-black border-nox">
      <div className="max-container grid grid-cols-6 gap-6">
        <div className="max-w-sm col-span-2">
          {/* Logo + Name */}
          <div className="flex items-center gap-3.5">
            <div className="relative size-[54px]">
              <Image
                src="/logo-red.png"
                alt="Logo"
                fill
                sizes="54px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[27px] font-bold font-orbitron tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Noxus
              </p>
              <p className="text-xs font-medium -mt-0.5 text-nox">
                Game Discovery Platform
              </p>
            </div>
          </div>
          {/* Description */}
          <p className="text-sm font-medium text-neutral-400 mt-4">
            <strong className="text-white">Noxus</strong> is your ultimate
            gaming companion. Discover top-rated titles, track new releases, and
            build your dream wishlist across every major platform — all powered
            by comprehensive data from{" "}
            <strong className="text-white">RAWG</strong>.
          </p>
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.stat}
                className="flex flex-col items-center justify-center bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-2"
              >
                {stat.icon}
                <p className="text-sm font-bold mt-1">{stat.stat}</p>
                <p className="text-[11px] font-medium text-neutral-500">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 max-w-[150px]">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full bg-nox" />
            <p className="font-semibold">Quick Links</p>
          </div>

          {/* Links */}
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name} className="group">
                <Link
                  href={link.link}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    <p className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                      {link.name}
                    </p>
                  </div>
                  <ChevronRight className="size-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div className="col-span-1">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full bg-nox" />
            <p className="font-semibold">Explore</p>
          </div>

          {/* Links */}
          <ul className="space-y-4">
            {exploreLinks.map((link) => (
              <li key={link.name} className="group">
                <Link
                  href={link.link}
                  className="flex items-center justify-between gap-2"
                >
                  <p className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                    {link.name}
                  </p>
                  <ChevronRight className="size-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* News letter */}
        <div className="col-span-2">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-nox" />
            <p className="font-semibold">Stay Updated</p>
          </div>
          {/* Description */}
          <p className="text-sm font-medium text-neutral-400">
            Subscribe to receive updates on new releases, trending games, free
            games and upcoming releases delivered straight to your inbox.
          </p>
          <FooterEmail />
          <h2 className="text-lg font-semibold mt-3">Follow our socials</h2>
          <div className="flex items-center gap-3 mt-3">
            {socialLinks.map((icon, index) => (
              <div
                key={index}
                className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:bg-nox/20 text-neutral-400 hover:text-nox hover:border-[#e91e3f]/20 transition-colors cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
