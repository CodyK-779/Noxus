"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function toggleWishList(
  userId: string,
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
  try {
    await prisma.$transaction(async (tx) => {
      const deleted = await tx.wishlistItem.deleteMany({
        where: {
          gameId,
          wishlist: { userId },
        },
      });

      if (deleted.count === 0) {
        const wishlist = await tx.wishlist.upsert({
          where: { userId },
          update: {},
          create: { userId },
          select: { id: true },
        });

        await tx.game.upsert({
          where: { id: gameId },
          update: {},
          create: {
            id: gameId,
            name,
            image,
            slug,
            rating,
            genres,
            platforms,
            createdAt: new Date(createdAt),
          },
        });

        await tx.wishlistItem.create({
          data: {
            wishlistId: wishlist.id,
            gameId,
          },
        });
      }
    });

    revalidatePath(path);
    revalidatePath("/wishlist");
    return { success: true };
  } catch (error) {
    console.error(error);
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
