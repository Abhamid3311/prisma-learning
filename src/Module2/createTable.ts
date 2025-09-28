import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /*  const createUser = await prisma.user.create({
    data: {
      username: "Ab Hamid",
      email: "hamid@gmail.com",
      role: UserRole.user,
    },
  }); */
  /* const createManyUsers = await prisma.user.createMany({
    data: [
      {
        username: "Md Akash",
        email: "akash@gmail.com",
        role: UserRole.admin,
      },
      {
        username: "Limon Uddin",
        email: "limon@gmail.com",
        role: UserRole.user,
      },
      {
        username: "Shafiq Khan",
        email: "shafiq@gmail.com",
        role: UserRole.user,
      },
    ],
  }); */
  /* const createProfile = await prisma.profile.create({
    data: {
      bio: "Hello From UK, I love my My Bio",
      userId: 19
    },
  });  */
  /*   const createCategory = await prisma.category.create({
    data: {
      name: "Blog",
    },
  }); */
  
  /* const createPost = await prisma.post.create({
    data: {
      title: "Welcome to 66",
      content: "Hello This is Contyent 655",
      authorId: 40,
      postCategory: {
        create: [{ categoryId: 1 }, { categoryId: 3 }, { categoryId: 6 }],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost); */
};

main();
