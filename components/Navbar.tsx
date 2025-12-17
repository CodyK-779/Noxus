import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Browse",
    link: "/browse",
  },
  {
    title: "Genres",
    link: "/genres",
  },
  {
    title: "Platforms",
    link: "/platforms",
  },
  {
    title: "/Publishers",
    link: "/publishers",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 border-b py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <div className="max-container flex items-center justify-between">
        {/* First Row */}
        <div className="flex items-center gap-3">
          <div className="relative size-11 overflow-hidden">
            <Image src="/logo.webp" alt="Logo" fill className="object-cover" />
          </div>
          <h1 className="text-3xl font-semibold">Noxus</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
