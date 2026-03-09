import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | High Ratings",
  description: "Noxus highly rated games page",
};

export default function HRLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
