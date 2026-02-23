"use server";

import { auth } from "@/app/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

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
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) throw new Error("Unauthorized");

    const wishlist = await prisma.wishlist.upsert({
      where: { userId: session.user.id },
      update: {},
      create: { userId: session.user.id },
      include: { items: true },
    });

    const existingItem = wishlist.items.find((i) => i.gameId === gameId);

    if (existingItem) {
      await prisma.wishlistItem.delete({
        where: { id: existingItem.id },
      });
    } else {
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
