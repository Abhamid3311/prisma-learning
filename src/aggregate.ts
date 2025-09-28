import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
  // Aggregare Only Work on Number values like age,price, number etc except _count (It will work for all)
  // _avg, _sum,_count, _max, _min
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

  // With condition
  const ageCountOfUser = await prisma.user.aggregate({
    _count: { role: true },
    where: { role: "user" },
  });

  console.log(ageCountOfUser);
};

aggregate();
