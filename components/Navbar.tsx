import Image from "next/image";
import Navlinks from "./Navlinks";
import NavRight from "./NavRight";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 border-b py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <div className="max-container flex items-center justify-between">
        {/* First Row */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative min-[400px]:size-9 size-8 overflow-hidden">
              <Image
                src="/logo-red.png"
                alt="Logo"
                fill
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
    </nav>
  );
};

export default Navbar;
