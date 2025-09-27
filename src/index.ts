import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /* const result = await prisma.post.create({
    data: {
      title: "This is titles",
      content: "This is content",
      authorName: "Hamid Khan",
      author: "MR Mokles",
    },
  });

  console.log(result); */

  const getData= await prisma.post.findMany();

  console.log(getData); 
};

main();
