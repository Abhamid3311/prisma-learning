import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Aggregare Only Work on Number values like age,price, number etc
  const ageAvg = await prisma.user.aggregate({
    _avg: { age: true },
  });

  const ageSum = await prisma.user.aggregate({
    _sum: { age: true },
  });

  // Find Count of age fileds
  const ageCount = await prisma.user.aggregate({
    _count: { age: true },
  });

  // Total Row
  const countUser = await prisma.user.count();

  console.log(countUser);
};

main();
