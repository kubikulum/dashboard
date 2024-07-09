/*
  Warnings:

  - You are about to drop the column `oidcId` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `oidcId` on the `User` table. All the data in the column will be lost.
  - Made the column `name` on table `Organization` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Organization_oidcId_key";

-- DropIndex
DROP INDEX "Organization_ownerId_key";

-- DropIndex
DROP INDEX "User_oidcId_key";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "oidcId",
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "oidcId";
