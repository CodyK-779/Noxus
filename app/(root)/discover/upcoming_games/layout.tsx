import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Noxus | Upcoming Games",
  description: "Noxus upcoming games page",
};

export default function UpcomingGamesLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
