import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  //Fluent API: Populate User Data with Post also
  const getUserByPopulate = await prisma.user.findUnique({
    where: {
      user_id: 19,
    },
    include: {
      post: true,
      profile: true,
    },
  });

  // Only Give us user Posted Data
  const getUserByFluentAPI = await prisma.user
    .findUnique({
      where: { user_id: 19 },
    })
    .post();

  console.log(getUserByPopulate);
};

relationalQuery();
