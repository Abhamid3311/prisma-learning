## Prisma Setup:

```
npm init -y
npm install prisma typescript tsx @types/node --save-dev


npx tsc --init

npx prisma
npx prisma init

```

- Set Root Dir of TS & Install ts-node-dev & Set it at Package. JSON

- SetUp DB URL in .env file:

DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=ey..."

## basic Scheme If Needed We can Add them & customize depedns on our Needs

```
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

- Whenever We update this schema we need to run a command to build query language:

```
npx prisma migrate dev // and give a name

npx prisma studio // To View all data prisma provide  a GUI

```
