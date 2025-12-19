import MenuProvider from "@/components/MenuProvider";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
      </MenuProvider>
    </div>
  );
}
