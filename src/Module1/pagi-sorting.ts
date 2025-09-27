import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationAndSorting = async () => {
  // OffSet Pagination
  /*     const offsetData= await prisma.post.findMany({
        skip:5,
        take:2
    }); */

  // Cursor based Pagination: For faster Performence
  /*   const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  }); */

  // Sorting data
  const sortingData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      published: true,
    },
  });

  console.log(sortingData);
};

paginationAndSorting();
