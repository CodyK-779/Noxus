import MBSearchResults from "@/components/MBSearchResults";
import MenuProvider from "@/components/MenuProvider";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <Overlay />
        <Sidebar />
        <MBSearchResults />
        <main className="overflow-hidden pb-20">{children}</main>
      </MenuProvider>
    </div>
  );
}
