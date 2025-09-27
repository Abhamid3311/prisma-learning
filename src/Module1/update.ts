import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {
  /*   const updateOne = await prisma.post.update({
    where: {id: 8},
    data: {
      title: "This is titles 8",
      content: "This is content 10",
    },
  }); */

  /*  const updateMany = await prisma.post.updateMany({
    where: { author: "MR Mokles" },
    data: {
      authorName: "Ab Hamid",
    },
  }); */

  // Update Title or Create New One
  /* const upsertData = await prisma.post.upsert({
    where: { id: 2 },
    update: {
      title: "Updated Title 3333",
    },
    create: {
      title: "This is titles 2222",
      content: "This is content",
      authorName: "Hamid Khan",
      author: "MR Mokles",
    },
  }); */

    // console.log(upsertData);
};

update();
