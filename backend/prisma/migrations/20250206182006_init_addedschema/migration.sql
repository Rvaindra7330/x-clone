/*
  Warnings:

  - Made the column `name` on table `Muggle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Muggle" ALTER COLUMN "name" SET NOT NULL;
