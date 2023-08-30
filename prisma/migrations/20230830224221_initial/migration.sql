-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "channel" TEXT NOT NULL,
    "channel_id" TEXT NOT NULL,
    "users" INTEGER NOT NULL,
    "videos" INTEGER NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
