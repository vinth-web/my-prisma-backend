import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@gmail.com",
      password: "123456"
    }
  });

  console.log(user);
}

main();