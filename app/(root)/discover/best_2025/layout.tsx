import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | Best 2025 Games",
  description: "Noxus Best Games of 2025 page",
};

export default function Best2025Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
