import { Search } from "lucide-react";

const NavSearchShell = () => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:block cm:w-50 lg:w-72">
        <form className="relative">
          <input
            type="text"
            placeholder="Search Games"
            enterKeyHint="search"
            className="w-full rounded-full font-medium bg-neutral-800 text-neutral-100 pl-4 pr-16 py-2 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-200 cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default NavSearchShell;
