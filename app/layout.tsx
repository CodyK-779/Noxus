import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo2",
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
      <body className={`${exo2.variable} ${exo2.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
