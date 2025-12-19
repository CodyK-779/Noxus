import localFont from "next/font/local";

export const exo2 = localFont({
  src: [
    { path: "/fonts/Exo2-Regular.ttf", weight: "400" },
    { path: "/fonts/Exo2-Medium.ttf", weight: "500" },
    { path: "/fonts/Exo2-SemiBold.ttf", weight: "600" },
    { path: "/fonts/Exo2-Bold.ttf", weight: "700" },
  ],
  variable: "--font-exo2"
})

export const orbitron = localFont({
  src: [
    { path: "/fonts/Orbitron-Regular.ttf", weight: "400" },
    { path: "/fonts/Orbitron-Medium.ttf", weight: "500" },
    { path: "/fonts/Orbitron-SemiBold.ttf", weight: "600" },
    { path: "/fonts/Orbitron-Bold.ttf", weight: "700" },
  ],
  variable: "--font-orbitron",
})