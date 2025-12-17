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
    title: "Publishers",
    link: "/publishers",
  },
];

const Navlinks = () => {
  return (
    <ul className="flex items-center text-center gap-8">
      {navLinks.map((link) => (
        <li key={link.title} className="font-medium">
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
