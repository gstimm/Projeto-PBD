/*
  Warnings:

  - You are about to drop the column `pais` on the `Goleiro` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `JogadorLinha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Goleiro" DROP COLUMN "pais";

-- AlterTable
ALTER TABLE "JogadorLinha" DROP COLUMN "pais";
