import MenuProvider from "@/components/MenuProvider";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <main className="overflow-hidden pb-20">{children}</main>
      </MenuProvider>
    </div>
  );
}
