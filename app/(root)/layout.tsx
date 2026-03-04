import Footer from "@/components/Footer";
import MBSearchResults from "@/components/MBSearchResults";
import MenuProvider from "@/components/MenuProvider";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Sidebar from "@/components/Sidebar";
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton";
import { PropsWithChildren, Suspense } from "react";

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
        <main className="pb-20">{children}</main>
        <Footer />
      </MenuProvider>
    </div>
  );
}
