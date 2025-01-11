/*
  Warnings:

  - You are about to drop the `Border` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Border" DROP CONSTRAINT "Border_countryId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "borders" TEXT[];

-- DropTable
DROP TABLE "Border";
