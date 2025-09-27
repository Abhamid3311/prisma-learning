import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});

const logging = async () => {
  const getUsers = await prisma.user.findMany({});

  //   console.log(getUsers);
};

logging();
