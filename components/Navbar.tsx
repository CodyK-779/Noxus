import NavContent from "./NavContent";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 border-b border-[#e91e3f] py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <NavContent />
    </nav>
  );
};

export default Navbar;
