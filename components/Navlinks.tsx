const navLinks = [
  {
    title: "Discover",
    link: "/",
  },
  {
    title: "Browse",
    link: "/browse",
  },
  {
    title: "Stores",
    link: "/stores",
  },
];

const Navlinks = () => {
  return (
    <ul className="hidden min-[800px]:flex items-center text-center gap-10">
      {navLinks.map((link) => (
        <li
          key={link.title}
          className="font-semibold hover:text-[#e91e3f] transition-colors duration-200 ease-in cursor-pointer"
        >
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
