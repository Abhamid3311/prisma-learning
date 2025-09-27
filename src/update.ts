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

//   console.log(updateMany);
};

update();
