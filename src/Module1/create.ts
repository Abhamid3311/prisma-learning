import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /* const createOnePost = await prisma.post.create({
    data: {
      title: "This is titles",
      content: "This is content",
      authorName: "Hamid Khan",
      author: "MR Mokles",
    },
  }); */

  // Save all data in DB & return Count
  /* const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is titles 1",
        content: "This is content",
        authorName: "Hamid Khan",
        author: "MR Mokles",
      },
      {
        title: "This is titles 2",
        content: "This is content",
        authorName: "Hamid Khan",
        author: "MR Mokles",
      },
      {
        title: "This is titles 3",
        content: "This is content",
        authorName: "Hamid Khan",
        author: "MR Mokles",
      },
    ],
  }); */

//   console.log(createMany);
};

main();
