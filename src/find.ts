import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Find All Query
  const getAllData = await prisma.post.findMany();

  // Give us 1st data what matched the condition
  const findFirst = await prisma.post.findFirst({
    where: { id: 3 },
  });

  // If Not find Anything throw an error
  const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    where: { published: false },
  });

  // Here only Unique Id need to pass else throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: { id: 4 },
  });

  //   console.log(findFirst);
};

main();
