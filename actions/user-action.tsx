"use server";

import { auth } from "@/app/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { connection } from "next/server";

export async function getUser() {
  try {
    await connection();

    const headerList = await headers();

    const session = await auth.api.getSession({
      headers: headerList,
    });

    if (!session) return null;

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
    return null;
  }
}
