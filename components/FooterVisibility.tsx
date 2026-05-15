"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterVisibility = () => {
  const pathname = usePathname();

  if (pathname === "/browse") return null;

  return <Footer />;
};

export default FooterVisibility;
