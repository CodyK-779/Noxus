import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "sonner";
import { exo2, orbitron } from "./font";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Noxus",
  description: "Full-Stack Game Store App Powered by Next.js 16",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${exo2.variable} ${orbitron.variable}`}>
        <Toaster position="top-right" />
        <TooltipProvider>
          <main>{children}</main>
        </TooltipProvider>
      </body>
    </html>
  );
}
