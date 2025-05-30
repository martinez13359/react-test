-- CreateTable
CREATE TABLE "Tierart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tierart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anbieter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stadt" TEXT NOT NULL,
    "tierartId" INTEGER NOT NULL,

    CONSTRAINT "Anbieter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tierart_name_key" ON "Tierart"("name");

-- AddForeignKey
ALTER TABLE "Anbieter" ADD CONSTRAINT "Anbieter_tierartId_fkey" FOREIGN KEY ("tierartId") REFERENCES "Tierart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
