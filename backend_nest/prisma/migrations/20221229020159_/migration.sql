/*
  Warnings:

  - A unique constraint covering the columns `[filename]` on the table `images` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "images_filename_key" ON "images"("filename");
