import { Game } from "@/lib/generated/prisma/client";

export interface UserType {
  id: string;
  email: string;
  name: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
  wishlistId: string | null;
  wishlist: WishlistType | null;
}

export interface WishlistType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  items: WishlistItemType[];
  _count: {
    items: number;
    user: number;
  };
}

export interface WishlistItemType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  wishlistId: string;
  gameId: string;
  game: Game
}