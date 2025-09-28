import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Batch Transaction
  const createUser = prisma.user.create({
    data: {
      username: "Fahim55 Ahmed",
      age: 25,
      email: "fahim55@gmail.com",
      role: UserRole.user,
    },
  });

  const updateUser = prisma.user.update({
    where: { user_id: 18 },
    data: {
      age: 8,
    },
  });

  // Depends each other, If 1 failed then whole process failed
  const [createData, UpdateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

//   console.log("Update User", updateUser);
};

main();
