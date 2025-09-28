import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Interactive Transaction
  const result = await prisma.$transaction(async (transactionClient) => {
    // Query 1
    const getALLPost = await transactionClient.post.findMany({
      where: { published: true },
    });

    // Query-2
    const countUser = await transactionClient.user.count();

    // Query-3
    const updateUser = await transactionClient.user.update({
      where: { user_id: 18 },
      data: { age: 20 },
    });

    return {
      getALLPost,
      countUser,
      updateUser,
    };
  });

  console.log("Update User", result);
};

main();
