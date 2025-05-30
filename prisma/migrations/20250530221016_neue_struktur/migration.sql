/*
  Warnings:

  - You are about to drop the column `tierartId` on the `Anbieter` table. All the data in the column will be lost.
  - You are about to drop the `Tierart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Anbieter" DROP CONSTRAINT "Anbieter_tierartId_fkey";

-- AlterTable
ALTER TABLE "Anbieter" DROP COLUMN "tierartId";

-- DropTable
DROP TABLE "Tierart";

-- CreateTable
CREATE TABLE "Servicekategorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Servicekategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Termintyp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Termintyp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnbieterService" (
    "anbieterId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "AnbieterService_pkey" PRIMARY KEY ("anbieterId","serviceId")
);

-- CreateTable
CREATE TABLE "AnbieterTermintyp" (
    "anbieterId" INTEGER NOT NULL,
    "termintypId" INTEGER NOT NULL,

    CONSTRAINT "AnbieterTermintyp_pkey" PRIMARY KEY ("anbieterId","termintypId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servicekategorie_name_key" ON "Servicekategorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Termintyp_name_key" ON "Termintyp"("name");

-- AddForeignKey
ALTER TABLE "AnbieterService" ADD CONSTRAINT "AnbieterService_anbieterId_fkey" FOREIGN KEY ("anbieterId") REFERENCES "Anbieter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnbieterService" ADD CONSTRAINT "AnbieterService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Servicekategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnbieterTermintyp" ADD CONSTRAINT "AnbieterTermintyp_anbieterId_fkey" FOREIGN KEY ("anbieterId") REFERENCES "Anbieter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnbieterTermintyp" ADD CONSTRAINT "AnbieterTermintyp_termintypId_fkey" FOREIGN KEY ("termintypId") REFERENCES "Termintyp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
