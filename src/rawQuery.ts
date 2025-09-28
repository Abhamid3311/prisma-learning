import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
    const getAllPost = await prisma.$queryRaw`select * from posts`;

  // Remove users & All Connected data with this
  // await prisma.$queryRaw `Trancate Table "users" CASCADE`

//   console.log("post", getAllPost);
};

rawQuery();
