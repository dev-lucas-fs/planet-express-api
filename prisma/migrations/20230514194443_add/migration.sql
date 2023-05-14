-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "help" BOOLEAN NOT NULL,
    "senderAddressId" INTEGER NOT NULL,
    "receiveAddressId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "Order_senderAddressId_fkey" FOREIGN KEY ("senderAddressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_receiveAddressId_fkey" FOREIGN KEY ("receiveAddressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
