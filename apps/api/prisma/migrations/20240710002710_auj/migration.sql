/*
  Warnings:

  - The values [flyte] on the enum `EnumClusterClusterType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[gardenerProjectNamespace]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "EnumClusterPlan" AS ENUM ('Free');

-- AlterEnum
BEGIN;
CREATE TYPE "EnumClusterClusterType_new" AS ENUM ('kubeflow', 'Flytes');
ALTER TABLE "Cluster" ALTER COLUMN "clusterType" TYPE "EnumClusterClusterType_new" USING ("clusterType"::text::"EnumClusterClusterType_new");
ALTER TYPE "EnumClusterClusterType" RENAME TO "EnumClusterClusterType_old";
ALTER TYPE "EnumClusterClusterType_new" RENAME TO "EnumClusterClusterType";
DROP TYPE "EnumClusterClusterType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Cluster" ADD COLUMN     "plan" "EnumClusterPlan";

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "gardenerProjectNamespace" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_gardenerProjectNamespace_key" ON "Organization"("gardenerProjectNamespace");
