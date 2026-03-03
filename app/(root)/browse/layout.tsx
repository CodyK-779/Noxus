import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | Browse",
  description: "Noxus Browse Page",
};

export default function BrowseLayout({ children }: PropsWithChildren) {
  return (
    <div className="scroll-smooth">
      <main>{children}</main>
    </div>
  );
}
