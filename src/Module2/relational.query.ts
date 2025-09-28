import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  //Fluent API: Populate User Data with Post also
  /*  const getUserByPopulate = await prisma.user.findUnique({
    where: {
      user_id: 19,
    },
    include: {
      post: true,
      profile: true,
    },
  }); */

  // Only Give us user Posted Data
  /*  const getUserByFluentAPI = await prisma.user
    .findUnique({
      where: { user_id: 19 },
    })
    .post(); */

  // Get user whose post are false publish
  /* const getUserByNotPublishPost = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: false,
        },
      },
    },
  }); */

  ///* Filtering

  // Partial Filter with 2 conditions
  /*  const getUserByFiltering = await prisma.post.findMany({
    where: {
      AND: [
        // If we add OR then any condition match show that data
        {
          title: {
            contains: "66", // need to have "66" into title
          },
        },
        {
          published: false,
        },
      ],
    },
  }); */

  /* const getUserByNotFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "66", // need to have "66" into title
          },
        },
        {
          published: false,
        },
      ],
    },
  }); */

  /*   const getUserByStartsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "a",
      },
    },
  }); */

  /*  const getUserByStartsWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "a",  // If we need same to same then use= "equals"
      },
    },
  }); */

  const userNames = ["Ab Hamid", "Ammar Kho", "Shafiq Kho"];

  /*  const getUserByArray = await prisma.user.findMany({
    where: {
     username:{
        in:userNames
     }
    },
  }); */

  // Get In depth data
 /*  const getUserByInDepth = await prisma.user.findMany({
    where: {
      user_id: 19,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  }); */


  


    // console.log(getUserByArray);

//   console.dir(getUserByInDepth, { depth: Infinity });
};

relationalQuery();
