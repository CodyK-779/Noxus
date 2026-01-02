"use server";

import { auth } from "@/app/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function getUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) return;

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        wishlist: {
          include: {
            items: {
              include: {
                game: true,
              },
            },
            _count: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to get user", error);
    throw new Error("Failed to get user");
  }
}
