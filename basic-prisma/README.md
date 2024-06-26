## Basic Prisma

Run test:

```bash
npx ts-node script.ts
```

Create _.json_ file for test :

```bash
npm init -y
npm i typescript ts-node @types/node --save-dev
```

Using Package:

```bash
npm i prisma --save-dev
npx prisma init --datasource-provider sqlite
```

ref: [prisma](https://www.prisma.io/docs/accelerate/getting-started)

Example Model:
```bash
model User {
  id Int @id @default(autoincrement())
  email String @unique
  name String?
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  title String 
  content String?
  published Boolean @default(false)

  // relation with User
  authorId Int
  author User @relation(fields: [authorId], references: [id])
}
```

Migration CLI:

```bash
npx prisma migrate dev --name init
```

**Example Code:**

```bash
import { PrismaClient } from "@prisma/client";
// Declare
const prisma = new PrismaClient();
```

```bash
// Create user
const user = await prisma.user.create({
    data: {
        name: "test2",
        email: "test2@gmail.com"
    }
});

// List User
const user = await prisma.user.findMany()

// Create user and post
const user = await prisma.user.create({
    data: {
        name: "test3",
        email: "test3@gmail.com",
        posts: {
            create: {
                title: "Hello, Post"
            }
        }
    }
});

// List user (Include option)
const userWithPost = await prisma.user.findMany({
    include: {
        posts: true,
    },
});

// Update user
const user = await prisma.user.update({
        data: {
        name: "John",
        posts: {
            create: {
            title: "Hello, Post update",
            },
        },
    },
    where: {
        id: 2,
        email: "test1@gmail.com"
    },
});

// Delete user
const user = await prisma.user.delete({
    where: {
        id: 1,
    },
});
```

