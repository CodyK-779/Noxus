/*
  Warnings:

  - The primary key for the `Game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Game" DROP CONSTRAINT "Game_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");
