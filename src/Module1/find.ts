import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Find All Query
  const getAllData = await prisma.post.findMany({
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  // Give us 1st data what matched the condition
  // Select sent only specific value
  /*   const findFirst = await prisma.post.findFirst({
    where: { id: 3 },
    select: {
      title: true,
      content: true,
    },
  }); */

  // If Not find Anything throw an error
  /* const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    where: { published: false },
  }); */

  // Here only Unique Id need to pass else throw error
  /*  const findUnique = await prisma.post.findUniqueOrThrow({
    where: { id: 4 },
  }); */

  console.log(getAllData);
};

main();
