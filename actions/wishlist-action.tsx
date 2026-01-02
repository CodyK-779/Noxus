// "use server";

// import { auth } from "@/app/lib/auth";
// import { prisma } from "@/lib/prisma";
// import { headers } from "next/headers";

// export async function toggleWishList(slug: string, path: string) {
//   try {
//     const session = await auth.api.getSession({
//       headers: await headers(),
//     });

//     if (!session) throw new Error("Unauthorized");

//     const wishlist = await prisma.wishlist.upsert({
//       where: { id: session.user.id },
//       update: {},
//       create: { userId: session.user.id },
//       include: {
//         items: {
//           include: {
//             game: true,
//           },
//         },
//       },
//     });

//     const existingGame = wishlist.items.find((i) => i.game.slug === slug);

//     if (existingGame) {
//       await prisma.wishlistItem.delete({
//         where: {
//           id: existingGame.id,
//         },
//       });
//     } else {
//       await prisma.wishlistItem.create({
//         data: {
//           wishlistId: wishlist.id,
//         },
//       });
//     }
//   } catch (error) {}
// }
