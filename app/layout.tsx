import type { Metadata } from "next";
import { Exo_2, Orbitron } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo2",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-orbitron",
});

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
