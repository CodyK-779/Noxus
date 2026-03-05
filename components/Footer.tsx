import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t py-10 bg-black border-[#e91e3f]">
      <div className="max-container">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="relative size-11">
              <Image
                src="/logo-red.png"
                alt="Logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <p className="text-[27px] font-bold font-orbitron tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Noxus
            </p>
          </div>
          <p className="text-sm font-medium text-neutral-400 max-w-xs">
            <strong>Noxus</strong> is a modern game discovery platform. Explore
            top-rated titles, track new releases, and wishlist your favorites
            across every major platform — all powered by data from{" "}
            <strong>RAWG</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
