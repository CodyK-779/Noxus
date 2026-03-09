import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | Genres",
  description: "Noxus genres page",
};

export default function GenreLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
