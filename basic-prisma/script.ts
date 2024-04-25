import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.time("Query Time"); // Start the timer

  // // Create user
  // const user = await prisma.user.create({
  //     data: {
  //         name: "test2",
  //         email: "test2@gmail.com"
  //     }
  // });

  // // List User
  // const user = await prisma.user.findMany()

  // // Create user and post
  // const user = await prisma.user.create({
  //     data: {
  //         name: "test3",
  //         email: "test3@gmail.com",
  //         posts: {
  //             create: {
  //                 title: "Hello, Post"
  //             }
  //         }
  //     }
  // });

  // // List user (Include option)
  // const userWithPost = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // console.dir(userWithPost, { depth: null });

  //   // update user
  //   const user = await prisma.user.update({
  //     data: {
  //       name: "John",
  //       posts: {
  //         create: {
  //           title: "Hello, Post update",
  //         },
  //       },
  //     },
  //     where: {
  //       id: 2,
  //       // email: "test1@gmail.com"
  //     },
  //   });
  //   console.dir(user, { depth: null });

  // Delete user
  const user = await prisma.user.delete({
    where: {
      id: 1,
    },
  });
  console.log(user);

  console.timeEnd("Query Time"); // End the timer and log the time elapsed
  // console.log(user);
}

main()
  .catch((err) => {
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Ensure Prisma disconnects after execution
  });
