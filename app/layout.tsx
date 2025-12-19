import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { exo2, orbitron } from "./font";

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
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
