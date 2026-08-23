import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "sonner";
import { exo2, orbitron } from "./font";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BETTER_AUTH_URL!),
  title: "Nexora — Game Discovery Platform",
  description:
    "Noxus is a full-stack Game Discovery Platform Powered by Next.js 16, TypeScript, TailwindCSS, Prisma, PostgreSQL, and Better-auth.",
  openGraph: {
    title: "Noxus",
    description:
      "A full-stack Game Discovery Platform Powered by Next.js 16, TypeScript, TailwindCSS, Prisma, PostgreSQL, and Better-auth.",
    url: process.env.BETTER_AUTH_URL,
    siteName: "Noxus",
    images: [
      {
        url: "/logo-red.jpg",
        width: 1200,
        height: 630,
        alt: "Noxus — Full-Stack E-Commerce Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noxus — Game Discovery Platform",
    description:
      "A full-stack Game Discovery Platform Powered by Next.js 16, TypeScript, TailwindCSS, Prisma, PostgreSQL, and Better-auth.",
    images: ["/logo-red.jpg"],
  },
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
