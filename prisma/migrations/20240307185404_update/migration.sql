-- CreateTable
CREATE TABLE "Shopping" (
    "id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "description" TEXT,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cantity" INTEGER NOT NULL DEFAULT 1,
    "unityValue" INTEGER NOT NULL,
    "totalValue" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Shopping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shopping" ADD CONSTRAINT "Shopping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
