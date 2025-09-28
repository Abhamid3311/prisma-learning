import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Grouping data
  const groupPost = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 20,
        },
      },
    },
  });
  console.log("getId:", groupPost);
};

main();
