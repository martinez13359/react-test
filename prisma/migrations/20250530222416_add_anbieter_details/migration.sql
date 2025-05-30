/*
  Warnings:

  - Added the required column `adresse` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beschreibung` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bewertung` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bild` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oeffnungszeiten` to the `Anbieter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefon` to the `Anbieter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anbieter" ADD COLUMN     "adresse" TEXT NOT NULL,
ADD COLUMN     "beschreibung" TEXT NOT NULL,
ADD COLUMN     "bewertung" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "bild" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "oeffnungszeiten" JSONB NOT NULL,
ADD COLUMN     "telefon" TEXT NOT NULL,
ADD COLUMN     "zertifikate" TEXT[] DEFAULT ARRAY[]::TEXT[];
