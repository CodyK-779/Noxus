import { Game } from "@/lib/generated/prisma/client";

export interface RAWGResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

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
  gameId: number;
  game: Game
}

// Session Type

interface SessionData {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null;
}

export interface Session {
  user: User;
  session: SessionData;
}
