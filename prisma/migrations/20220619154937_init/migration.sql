/*
  Warnings:

  - Added the required column `grupo` to the `Equipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipes" ADD COLUMN     "grupo" TEXT NOT NULL;
