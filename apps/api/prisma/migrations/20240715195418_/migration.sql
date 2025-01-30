/*
  Warnings:

  - Added the required column `status` to the `OrganizationMember` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumOrganizationMemberStatus" AS ENUM ('PendingInvitation', 'Activated', 'Suspended', 'InvitationRevoked');

-- DropForeignKey
ALTER TABLE "OrganizationMember" DROP CONSTRAINT "OrganizationMember_userId_fkey";

-- AlterTable
ALTER TABLE "OrganizationMember" ADD COLUMN     "status" "EnumOrganizationMemberStatus" NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrganizationMember" ADD CONSTRAINT "OrganizationMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
