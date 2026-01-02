import { Dispatch, SetStateAction } from "react";

export interface PaginateType {
  start: number;
  end: number;
}

export interface Pagination {
  paginate: PaginateType;
  setPaginate: Dispatch<SetStateAction<PaginateType>>;
}

/*

generator client {
  provider = "prisma-client"
  output   = "../lib/generated/prisma"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_DATABASE_URL")
}

model User {
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  image         String?
  wishlist      Wishlist?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  emailVerified Boolean   @default(false)
  sessions      Session[]
  accounts      Account[]
  wishlistId    String?

  @@map("user")
}

model Game {
  id           Int            @id
  name         String
  image        String?
  wishlistItem WishlistItem[]
  slug         String
  createdAt    String
}

model Wishlist {
  id        String         @id @default(uuid())
  userId    String
  items     WishlistItem[]
  createdAt DateTime       @default(now())
  updatedAt DateTime       @updatedAt
  user      User           @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId])
}

model WishlistItem {
  id         String   @id @default(uuid())
  wishlistId String
  gameId     Int
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  wishlist Wishlist @relation(fields: [wishlistId], references: [id], onDelete: Cascade)
  game     Game     @relation(fields: [gameId], references: [id], onDelete: Cascade)

  @@unique([gameId, wishlistId])
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@index([userId])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@index([userId])
  @@map("account")
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier])
  @@map("verification")
}


*/