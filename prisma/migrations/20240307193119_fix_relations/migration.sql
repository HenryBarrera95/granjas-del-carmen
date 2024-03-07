-- AlterTable
ALTER TABLE "Rabbit" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Rabbit" ADD CONSTRAINT "Rabbit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
