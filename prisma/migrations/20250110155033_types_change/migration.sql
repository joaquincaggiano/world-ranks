/*
  Warnings:

  - The `currencies` column on the `Country` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `BorderCountry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CountryLanguage` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `region` on the `Country` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subregion` on the `Country` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "BorderCountry" DROP CONSTRAINT "BorderCountry_countryId_fkey";

-- DropForeignKey
ALTER TABLE "CountryLanguage" DROP CONSTRAINT "CountryLanguage_countryId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "borders" TEXT[],
ADD COLUMN     "languages" TEXT[],
DROP COLUMN "region",
ADD COLUMN     "region" TEXT NOT NULL,
DROP COLUMN "subregion",
ADD COLUMN     "subregion" TEXT NOT NULL,
DROP COLUMN "currencies",
ADD COLUMN     "currencies" TEXT[];

-- DropTable
DROP TABLE "BorderCountry";

-- DropTable
DROP TABLE "CountryLanguage";

-- DropEnum
DROP TYPE "Border";

-- DropEnum
DROP TYPE "CountryCurrency";

-- DropEnum
DROP TYPE "Language";

-- DropEnum
DROP TYPE "Region";

-- DropEnum
DROP TYPE "Subregion";
