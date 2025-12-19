import Link from "next/link";

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
        <li key={link.title}>
          <Link href={link.link} className="nox-link">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
