import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | New Games",
  description: "Noxus new games page",
};

export default function NewGamesLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
