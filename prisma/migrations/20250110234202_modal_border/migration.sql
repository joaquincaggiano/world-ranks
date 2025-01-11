/*
  Warnings:

  - You are about to drop the column `borders` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "borders";

-- CreateTable
CREATE TABLE "Border" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Border_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Border" ADD CONSTRAINT "Border_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
