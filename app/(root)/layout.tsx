import Footer from "@/components/Footer";
import MBSearchResults from "@/components/MBSearchResults";
import MenuProvider from "@/components/MenuProvider";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Sidebar from "@/components/Sidebar";
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton";
import { Metadata } from "next";
import { PropsWithChildren, Suspense } from "react";

export const metadata: Metadata = {
  title: "Noxus | Discover",
  description: "Noxus Discover Home Page",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <Overlay />
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <MBSearchResults />
        <main className="pb-20 min-h-screen">{children}</main>
        <Footer />
      </MenuProvider>
    </div>
  );
}
