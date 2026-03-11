"use server";

import { auth } from "@/app/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { connection } from "next/server";

export async function toggleWishList(
  gameId: number,
  name: string,
  image: string | undefined,
  slug: string,
  createdAt: string,
  rating: number,
  platforms: string[],
  genres: string[],
  path: string,
) {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    console.log("Skipping getUser during build");
    return null;
  }

  try {
    await connection();

    const headerList = await headers();
    const session = await auth.api.getSession({
      headers: headerList,
    });

    if (!session) throw new Error("Unauthorized");

    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlist: { userId: session.user.id },
        gameId,
      },
      select: { id: true },
    });

    if (existingItem) {
      await prisma.wishlistItem.delete({
        where: { id: existingItem.id },
      });
    } else {
      const wishlist = await prisma.wishlist.upsert({
        where: { userId: session.user.id },
        update: {},
        create: { userId: session.user.id },
        select: { id: true },
      });

      await prisma.$transaction([
        prisma.game.upsert({
          where: { id: gameId },
          update: {},
          create: {
            id: gameId,
            name,
            image,
            slug,
            rating,
            platforms,
            genres,
            createdAt: new Date(createdAt),
          },
        }),
        prisma.wishlistItem.create({
          data: {
            wishlistId: wishlist.id,
            gameId,
          },
        }),
      ]);
    }

    revalidatePath(path);
    revalidatePath("/wishlist");
    return { success: true };
  } catch (error) {
    console.error("Error toggling wishlist:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update wishlist",
    };
  }
}

export async function removeWishlistItem(id: string) {
  try {
    await prisma.wishlistItem.delete({
      where: { id },
    });

    revalidatePath("/wishlist");
    return { success: true };
  } catch (error) {
    console.error("Error deleting wishlist item:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to delete wishlist item",
    };
  }
}
