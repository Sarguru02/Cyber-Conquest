/*
  Warnings:

  - You are about to drop the column `userUserId` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "userUserId",
ADD COLUMN     "user" TEXT;
