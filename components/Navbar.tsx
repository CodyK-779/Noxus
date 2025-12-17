import Image from "next/image";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 border-b py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <div className="max-container flex items-center justify-between">
        {/* First Row */}
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden">
            <Image src="/logo.webp" alt="Logo" fill className="object-cover" />
          </div>
          <h1 className="text-[26px] font-semibold">Noxus</h1>
        </div>
        {/* Second Row */}
        <Navlinks />
        {/* Third Row */}
        <p className="font-medium">Account</p>
      </div>
    </nav>
  );
};

export default Navbar;
// npx shadcn mcp init
// npx shadcn@latest add @efferd/header-10
